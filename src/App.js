import './App.css';
import Sandbox from "./components/sandbox";
import ButtonsBar from "./components/buttonsBar";
import InfoBar from "./components/infoBar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
        <ButtonsBar />
        <Sandbox />
    </div>
  );
}

export default App;
