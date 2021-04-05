import './App.css';
import React, { Component } from 'react';
import SearchBox from './SearchBox';
import GitHubCards from './GitHubCards';
import debounce from 'lodash.debounce'

class App extends Component {
  
  constructor(){
    super()
    this.state = {
        searchField: ''
    }
  }


  onSearchChange = debounce((searchField) => {
    this.setState({ searchField });
    console.log();
  },500);
    
  
  render(){
    return(
      <div>
        <div className='Title'>
          <h1>GitHub Search</h1>
        </div>
        <div>
          <SearchBox searchChange={e => this.onSearchChange(e.target.value)}/>
        </div>
        <div>
          <GitHubCards searchField={this.state.searchField}/>
        </div>
      </div>
      
    );
  }
}

export default App;
