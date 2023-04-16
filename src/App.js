import logo from './logo.svg';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css"

import { InputText } from 'primereact/inputtext';
import {Menubar} from "primereact/menubar";
import Main from "./components/Main";
import Logo from "./components/Logo";


function App() {
  return (
    <div className="App">
        <Menubar className="bg-blue-600" start={Logo}></Menubar>
        <Main></Main>
    </div>
  );
}

export default App;
