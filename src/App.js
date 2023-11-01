import "./App.css";
import Checkbox from "./components/Checkbox";
import Dropdown from "./components/Dropdown";
import FileUpload from "./components/FileUpload";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LinearScale from "./components/LinearScale";
import Mcq from "./components/Mcq";
import MultiChoice from "./components/MultiChoice";
import Paragraph from "./components/Paragraph";
import ShortAnswer from "./components/ShortAnswer";
import Submit from "./components/Submit";
import TickBox from "./components/TickBox";

function App() {
  return (
    <div className="App">
      <Header />
      <Mcq />
      <Checkbox />
      <ShortAnswer />
      <Paragraph />
      <Dropdown />
      <FileUpload />
      <LinearScale />
      <MultiChoice />
      {/* tickboxgrid */}
      <TickBox />
      <Submit />
      <Footer />
    </div>
  );
}

export default App;
