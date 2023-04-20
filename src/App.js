import React from 'react';
import CardList from './CardList.js'
import SearchBox from './SearchBox.js';
import './App.css';
import ErrorBoundry from './ErrorBoundry.js';

class App extends React.Component{
	constructor(){
		super();
		this.state={
				robots:[],
				Searchfield: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
		return	response.json();
		}).then(users=> {this.setState({robots:users});})
		
		
	}

	onSearchChange=(event)=>{
			this.setState({Searchfield:event.target.value});

	}

	render(){

					const filteredrobot = this.state.robots.filter(robots=>{
					return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
		})
		console.log(filteredrobot);
	
		
	 return(
	 	<div className='tc'>
	 	<h1>robo friends</h1>
	 	<SearchBox searchChange ={this.onSearchChange}/>
	 	<ErrorBoundry>
	 	 <CardList robots = {filteredrobot}/ >
	 	 </ErrorBoundry>
	 	 </div>
	 	
	 	 );

	 	}
}
export default App;