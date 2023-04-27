import "./styles/global.scss";

import Footer from "./components/Footer";
import StartGame from "./components/StartGame";
import Characteristics from "./components/Characteristics";

function App() {
  return (
    <div className="App">
      <StartGame />
      <Characteristics />
      <Footer />
    </div>
  );
}

export default App;
