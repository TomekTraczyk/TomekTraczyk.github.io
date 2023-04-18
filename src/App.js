import './App.css';

import Main from "./components/Main";
import MenuBar from "./components/MenuBar";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App" style={{height: '200vh'}}>
        <MenuBar></MenuBar>
        <MainSection></MainSection>
        <Main></Main>
    </div>
  );
}

export default App;
