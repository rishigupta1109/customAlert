import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import { AlertContext } from "./utils/contexts/AlertContext";
function App() {
  const ctx = useContext(AlertContext);
  const useMessage = ctx.Message();
  return (
    <div className="App">
      <button
        onClick={() => {
          useMessage?.success("done!", false);
        }}
      >
        success alert with no auto close
      </button>
      <button
        onClick={() => {
          useMessage?.success("done!");
        }}
      >
        success alert with default auto close
      </button>
      <button
        onClick={() => {
          useMessage?.success("done!", true, 2000);
        }}
      >
        success alert with duration on auto close
      </button>
      <button
        onClick={() => {
          useMessage?.error("done!", false);
        }}
      >
        error alert with no auto close
      </button>
      <button
        onClick={() => {
          useMessage?.error("done!");
        }}
      >
        error alert with default auto close
      </button>
      <button
        onClick={() => {
          useMessage?.warning("done!", true, 2000);
        }}
      >
        warninng alert with duration on auto close
      </button>
    </div>
  );
}

export default App;
