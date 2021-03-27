import './App.css';
import React, { Component} from 'react';
import SearchBox from './SearchBox';
import GitHubCards from './GitHubCards'

class App extends Component {
  
  constructor(){
    super()
    this.state = {
        searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }
  
  


  render(){
    return(
      <div>
        <div className='Title'>
          <h1>GitHub Search</h1>
        </div>
        <div>
          <SearchBox/>
        </div>
        <div>
          <GitHubCards/>
        </div>
      </div>
      
    );
  }
}

export default App;
