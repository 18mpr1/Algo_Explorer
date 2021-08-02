import './App.css';
import Sandbox from "./components/sandbox";
import ButtonsBar from "./components/buttonsBar";
import Footer from "./components/footer";
import Descriptor from "./components/descriptor";

function App() {
  return (
    <div className="App">
        <ButtonsBar />
        <Sandbox />
        {/*<Descriptor/>
        <Footer/>*/}
    </div>
  );
}

export default App;
