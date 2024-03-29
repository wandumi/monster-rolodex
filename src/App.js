import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => this.setState({ monsters:users}))
  }

  render() {
    // The search mechanism
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className='App'>

          
          <div className='container'>
              <h1>Monsters Rolodex</h1>
              <SearchBox 
                     placeholder='search monsters' 
                     handleChange={ e => this.setState({ searchField: e.target.value})  } />
              <CardList monsters={ filteredMonsters } />
          </div>
      
      </div>
    )
  }
}

export default App;
