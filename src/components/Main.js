import React,{useState} from "react";
import Sidebar from "./Sidebar.js"
import Menu from "./Menu.js" 
import sushiya from '../menus/sushiya.json'
import Header from './Header.js'


// sample menu 
const loadedData = JSON.stringify(sushiya)
const json = JSON.parse(loadedData)
// console.log(json)
// const info = 
// {'restaurant':'Sushiya',
//  'menu':[
//         {'category':'Sushi',
//          'description':'Comes with two pieces of sushi',
//          'items':[
//             {'name':'Tamago',
//              'description':'Sweeted egg omelette tied with dried seaweed. Comes with two pieces',
//              'price': 3},
//              {'name':'Maguro',
//              'description':'Tune. Comes with two pieces',
//              'price': 4},
//              {'name':'Salmon',
//              'description':'Fresh salmon. Comes with two pieces',
//              'price': 4},
//              {'name':'Scallops',
//              'description':'Scallops imported from Peru. Comes with two pieces',
//              'price': 4.50} 
//             ]
//         },
//         {'category':'Makimono',
//          'description':'Comes with six pieces of maki',
//          'items':[
//             {'name':'California Roll',
//              'description':'Rolled with avocado and crab meats. Comes with six pieces',
//              'price': 6},
//              {'name':'Tuna Roll',
//              'description':'Rolled with fresh tuna. Comes with six pieces',
//              'price': 6}, 
//              {'name':'Cucumber Roll',
//              'description':'Rolled with cucumber. Comes with six pieces',
//              'price': 5},
//             ]
//         },
//         {'category':'Hot Food',
//          'description':'Various options from Japanese style cooking.',
//          'items':[
//             {'name':'Karaage',
//              'description':'Deep fried chicken, marinated with ginger and garlic soysauce. Comes with six pieces',
//              'price': 8},
//              {'name':'Takoyaki',
//              'description':'Octpus balls with Bull Dog Sauce. Comes with six pieces',
//              'price': 8}, 
//              {'name':'Miso Soup',
//              'description':'',
//              'price': 3},
//             ]
//         },
//         {'category':'Drink',
//          'description':'',
//          'items':[
//             {'name':'Coca Cola',
//              'description':'',
//              'price': 2},
//              {'name':'Fanta Orange',
//              'description':'',
//              'price': 2}, 
//              {'name':'Water',
//              'description':'',
//              'price': 2},
//             ]
//         },
//        ]
       
//     }

    
const Main = props => {
    // const [menu,setMenu] = useState(info['menu'])
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
  };
export default Main