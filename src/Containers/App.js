import React, { Component } from 'react';
import CardList from '../Components/CardList';
import './App.css';
import { robots } from '../Robots';
import Scroll from '../Components/Scroll';
import SearchBox from '../Components/SearchBox';

class App extends Component{
	constructor()
	{
		super();
		this.state ={
			robots:robots,
			searchField:''
		}
	}

	// componentDidMount(){
	// 	fetch('http://jsonplaceholder.typicode.com/users')
	// 	.then(response=>response.json())
	// 	.then(users=>this.setState({ robots:users}));
	// }

	onSearchChange = (event) =>{
		this.setState({ searchField: event.target.value});
	}

	render(){
			const {robots,searchField}= this.state;
			const filteredRobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchField.toLowerCase());
			});
			return(
				<div className='tc'>
				<h1 className={`f1 tc`}>RoboFriends</h1>
				<SearchBox searchChange={ this.onSearchChange }/>
				<Scroll>
				<CardList robots = { filteredRobots }/>
				</Scroll>
				</div>
		);
	}
}

export default App;