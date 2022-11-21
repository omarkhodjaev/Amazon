import './App.css';
import Header from './components/header/Header'
import MiniHeader from './components/mini-header/MiniHeader';
import { Backtotop, Overlay } from './utils';
import Routes from './routes';
import Sidebar from './components/sidebar/Sidebar';
import { useState, useEffect } from 'react';

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  useEffect(() => {
    if(isSidebarActive){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
  }, [isSidebarActive])
  return (
    <div>
      <Header/>
      <MiniHeader setIsSidebarActive={setIsSidebarActive}/>
      <Sidebar isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive}/>
      <Routes/>
      <Backtotop/>
      {isSidebarActive && <Overlay state={isSidebarActive} callback={setIsSidebarActive}/>}
    </div>
  );
}

export default App;