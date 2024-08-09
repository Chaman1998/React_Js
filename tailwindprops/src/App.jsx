import Card from "./assets/components/Card";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      {/* <h3 className="bg-green-500 text-black p-4 rounded-xl text-xl cursor-pointer">
        Tailwind Test
      </h3> */}

      <Card username="Chaman"/>
      <Card/>
    </div>
  );
}

export default App;
