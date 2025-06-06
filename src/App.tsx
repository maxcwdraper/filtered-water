import "./App.css";
import Drum from "./Drum.tsx";

function App() {
  return (
    <div className="base">
      <Drum debris={["salt ", "dirt ", "calcite ", "uranium ", "rubber "]} />
    </div>
  );
}

export default App;
