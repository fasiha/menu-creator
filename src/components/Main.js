import './Main.css'
import React,{useState} from "react";
import Sidebar from "./Sidebar.js"
import Menu from "./Menu.js" 

// sample menu 
const info = {'restaurant':'Sushiya',
'menu':{
    'Categories': ['Sushi','Makimono','Hot Food','Drink']
}}

// const test = {'Sushi':{
//     'Items':{''}
// }}

const Main = props => {
    const [categories,setCategories] = useState(info['menu']['Categories'])  
    return (
        <div className='main'>
            <Sidebar setCategories = {setCategories} categories={categories}/>
            <Menu categories={categories}/>
        </div>
        );
  };
export default Main