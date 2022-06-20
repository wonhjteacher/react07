import './App.css';
import Style from './components/Style';
import GlobalStyle from "./components/GlobalStyle";
import Mainbanner from './components/Mainbanner';
import SubBanner from './components/SubBanner';
import CanSlider from './components/CanSlider';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Mainbanner />
      <SubBanner />
      <CanSlider />
      <Style />
    </div>
  );
}

export default App;

