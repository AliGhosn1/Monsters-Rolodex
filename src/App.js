import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {

  const [filter, setFilter] = useState("");
  const [monsters, setMonsters] = useState([]);
  const[filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() =>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => setMonsters(users))

  }, []);


  useEffect(() => {

    const newMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(filter));
    setFilteredMonsters(newMonsters);

  }, [filter, monsters]);


  const onSearchChange = (event) => {

    const searchFilter = event.target.value.toLocaleLowerCase();
    setFilter(searchFilter);

  };


  return(
    <div className="App">
        
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox 
        placeholder='Search monsters' 
        className='monsters-search-box' 
        onChangeHandler={onSearchChange}
      />

      <CardList monsters={filteredMonsters}/>

    </div>
  )

}

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       filter: ""
//     };

//   }


//   componentDidMount(){

//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((users) => {this.setState(() =>{return {monsters: users}})})

//   }


//   render(){

//     const {monsters, filter} = this.state
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));

//     return (
//       <div className="App">
        
//         <h1 className="app-title">Monsters Rolodex</h1>

//         <SearchBox 
//           placeholder='Search monsters' 
//           className='monsters-search-box' 
//           onChangeHandler={onSearchChange}
//         />

//         <CardList monsters={filteredMonsters}/>

//       </div>
//     );

//   }

  
//   onSearchChange = (event) => {this.setState(() => {return {filter: event.target.value}})};

// }

export default App;
