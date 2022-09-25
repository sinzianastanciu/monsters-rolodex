import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users, filteredMonsters: users }
          }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value;
    this.setState(() => { return { searchField: searchField } })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const result = monsters.filter(el => el.name.toLowerCase().includes(searchField));

    return (
      <div className="App">
        <h1 className='app-name'>Monsters Rolodex</h1>
        <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/>
        <CardList monsters={result}/>
      </div>
    );
  }

}

export default App;
