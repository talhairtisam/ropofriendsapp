import React from 'react';
import { connect } from 'react-redux';
import CardList from './CardList'; 
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

import { setSearchField } from './actions';

const mapStateToProps = (state) => {
	return {
		searchField: state.change.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends React.Component {
	constructor()
	{
		super()
		this.state = {
					robots: []
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


	render()
	{
		const { searchField, onSearchChange } = this.props;
		const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        })
		console.log(searchField);
		if (this.state.robots.length === 0 ) {
			return (
			<div className='tc'>
				<h1 className='f1'>Robots Friends</h1>
				<SearchBox searchChange={onSearchChange}/>
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
				<SearchBox searchChange={onSearchChange}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(App);