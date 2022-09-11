import './app.css';
import {ReactComponent as SidebarMenu} from './assets/SidebarMenu.svg';
import Header from './components/header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <div className='sideBar'>
        <SidebarMenu/>
      </div>
      <div className='mainContainer'>        
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
