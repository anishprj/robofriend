import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';



class  App extends React.Component  {
	constructor(){
		super()
		this.state = {
				robots : [],
				searchField: ''
		}
	}

componentDidMount(){
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => this.setState({robots: users}))
}


 onSearchChange =(event) => {
 	// this.state.searchfield same as this
 	this.setState({searchField : event.target.value })	
 }

	render() {
		const { robots, searchField } = this.state;
		const filterRobots = robots.filter(robot => {
 		return robot.name.toLowerCase().includes(searchField.toLowerCase());
 	})
	  if(!robots.length) {
	  	return <h1> loading </h1>
	  }else {
		return(
			<div className="tc">
			<h1 className="f1"> RoboFriends </h1>
			<SearchBox searchChange={this.onSearchChange} /> 
			<Scroll>
			<ErrorBoundry>
	         <CardList robots={filterRobots} />
	        </ErrorBoundry>
	        </Scroll>
	         </div>
		);
	 }
	}
}

export default App;



