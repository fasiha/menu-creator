import './App.css';
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Menu from './components/Menu.js'
import sushiya from './menus/sushiya.json'
import React, {useState} from 'react'

// sample menu 
const loadedData = JSON.stringify(sushiya)
const json = JSON.parse(loadedData)

function App() {
  const [menu,setMenu] = useState(json['menu'])
  return (
    <>
    <Header restaurant= {json['restaurant']} menu={menu} />
    <div className='main'>
        
        <Sidebar setMenu = {setMenu} menu={menu}/>
        <Menu setMenu = {setMenu} menu={menu}/> 
    </div>
    </>
    );
}

export default App;
