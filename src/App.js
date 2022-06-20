import './App.css';
import Style from './components/Style';
import GlobalStyle from "./components/GlobalStyle";
import Mainbanner from './components/Mainbanner';
import SubBanner from './components/SubBanner';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Mainbanner />
      <SubBanner />
      <Style />
    </div>
  );
}

export default App;

