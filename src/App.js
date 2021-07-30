import './App.css';
import Sandbox from "./components/sandbox";
import ButtonsBar from "./components/buttonsBar";
import InfoBar from "./components/infoBar";

function App() {
  return (
    <div className="App">
        <ButtonsBar />
      <header className="App-header">
        <h1 align="center">AlgoVisuals</h1>
      </header>
        <Sandbox />
        <InfoBar />

    </div>
  );
}

export default App;
