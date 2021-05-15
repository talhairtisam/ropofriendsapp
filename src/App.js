import React from 'react';
import CardList from './CardList'; 
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';


class App extends React.Component {
	constructor()
	{
		super()
		this.state = {
					robots: [],
					searchfield: ''
				}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => {
			return response.json();
		})
		.then(users => {
			this.setState({ robots : users });
		});
		
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		
	}
	render()
	{
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.robots.length === 0 ) {
			return (
			<div className='tc'>
				<h1 className='f1'>Robots Friends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<hr />
				<Scroll>
					<h1>Loading...</h1>
				</Scroll>
			</div>
			)
		} else {
			return (
			<div className='tc'>
				<h1 className='f1'>Robots Friends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<hr />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
			)
		}
		
	}
}


export default App;