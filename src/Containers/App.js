import React, {Component} from 'react';
import './App.css';

import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';

class App extends Component {

	constructor() {
		super();
		this.state = {
			searchfield: '',
			emplist: []			
		}
	}

	componentDidMount () {

		fetch('https://jsonplaceholder.typicode.com/users')
		.then(resp => resp.json())
		.then(results => {this.setState({emplist: results})})
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {
		
		const emplist = this.state.emplist;
		
		const searchedEmp= emplist.filter ( 
			emp => emp.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
										);
		
		return !searchedEmp.length ? 
			<h1>Loading....</h1> :
			
			(<div className='tc'>
				<h1 className='f1'>MY SEARCH APP</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList searchedEmp={searchedEmp} />
				</Scroll>
			</div>);
	}	
}

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
  // render() {
//     return (
//       // <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <h1 className="App-title">Welcome to React</h1>
//       //   </header>
//       //   <p className="App-intro">
//       //     To get started, edit <code>src/App.js</code> and save to reload.
//       //   </p>
//       // </div>

//     );
//   }
// }

// export default App;
