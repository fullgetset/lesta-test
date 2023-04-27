import "./styles/global.scss";

import Footer from "./components/Footer";
import StepList from "./components/StepList";

import { stepListData } from "./data/stepListData";

function App() {
  return (
    <div className="App">
      <StepList items={stepListData} />
      <Footer />
    </div>
  );
}

export default App;
