import './Main.css'
import React,{useState} from "react";
import Sidebar from "./Sidebar.js"
import Menu from "./Menu.js" 

// sample menu 
const info = {'restaurant':'Sushiya',
'menu':{
    'Categories': ['Sushi','Makimono','Hot Food','Drink'],
    'descriptions': {
    'Sushi': "Comes with two pieces of sushi",
    'Makimono':"Comes with 6 pieces of maki.",
    'Hot Food': "Various options from Japanese cookings.",
    'Drink':''  
    },
    "items": {
        'Sushi':['Tamago','Maguro','Salmon','Scallops'],
        'Makimono':['California Roll','Tuna Roll','Cucumber Roll'],
        'Hot Food':['Karaage','Takoyaki','Miso Soup'],
        'Drink':['Coca Cola','Fanta Orange','Water']
    },
    "items-desc":{
        'Tamago':'Sweeted egg omelette tied with dried seaweed. Comes with two pieces',
        'Maguro':'Tuna. Comes with two pieces.',
        'Salmon':'Fresh salmon. Comes with two pieces',
        'Scallops':'Scallops imported from Peru. Comes with two pieces.',
        'California Roll':'Rolled with avocado and crab meats. Comes with six pieces.',
        'Tuna Roll': 'Rolled with fresh tuna. Comes with six pieces.',
        'Cucumber Roll':'Rolled with cucumber. Comes with six pieces.',
        'Karaage': 'Deep fried chicken, marinated with ginger and garlic soysauce. Comes with six pieces.',
        'Takoyaki':'Ocotopus ball with Bull-Dog Sauce. Comes with six pieces.',
        'Coca Cola':'',
        'Fanta Orange':'',
        'Water':''
    },
    "prices":{
        'Tamago':3,
        'Maguro':4,
        'Salmon':4,
        'Scallops':4.5,
        'California Roll':6,
        'Tuna Roll': 6,
        'Cucumber Roll':5,
        'Karaage': 8,
        'Takoyaki':8,
        'Miso Soup':3,
        'Coca Cola':2,
        'Fanta Orange':2,
        'Water':2
    }
}
}

    
const Main = props => {
    const [categories,setCategories] = useState(info['menu']['Categories'])  
    return (
        <div className='main'>
            <Sidebar setCategories = {setCategories} categories={categories}/>
            <Menu categories={categories}
                  descriptions={info['menu']['descriptions']}
                  items = {info['menu']['items']}
                  itemsDesc= {info['menu']['items-desc']}
                  prices = {info['menu']['prices']}
                  />
        </div>
        );
  };
export default Main