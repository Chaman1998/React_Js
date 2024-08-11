import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
    const [length, setlength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789";
    if (charAllow) str += `!@#$%^&*()_+-={}[]|;"'<>,.?/`;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  useEffect(() => {passwordGenerator()}, [length, numberAllow, charAllow, passwordGenerator])

  //ref method
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,50);

    window.navigator.clipboard.writeText(password);
  }, [password]);


  return (
    <div className="md:w-3/5 mx-auto h-screen flex items-center justify-center">
      <div className="w-full md:p-6 p-4 rounded-lg shadow-2xl">
        <h2 className="text-4xl text-center text-orange-500 mb-5">
          Password Generator
        </h2>
        <div className="md:flex md:items-center mb-4 space-y-2 md:space-y-0">
          <input
            type="text"
            className="w-full py-1 px-2 rounded-l-lg rounded-r-lg md:rounded-l-lg md:rounded-r-none"
            value={password}
            placeholder="Password"
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-2 py-1 rounded-r-lg rounded-l-lg md:rounded-r-lg md:rounded-l-none hover:bg-blue-800"
          onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="md:flex text-md gap-x-2">
          <div className="flex items-center gap-x-1 w-full md:w-2/4">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer w-2/4"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className=" w-2/4 text-orange-500">
              Length: {length}
            </label>
          </div>
          <div className="flex items-center gap-x-1 w-full md:w-2/4 text-orange-500">
            <input
              type="checkBox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="mr-4 md:mr-2">Numbers</label>
            <input
              type="checkBox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
