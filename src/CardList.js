import React from 'react';
import Card from './Card';
// import { connect } from 'react-redux';


class CardList extends React.Component {
 	
	render()
	{
		const cardComponents = this.props.robots.map((user,i) => {
					return (
						<Card 
						key={i} 
						id={this.props.robots[i].id} 
						name={this.props.robots[i].name} 
						email={this.props.robots[i].email} 
						/>
						);
					})
		return (
			<div>
  				{ 
  					cardComponents
	 			}
  			</div>
			);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		robots: state.change.searchField
// 	}
// }

// export default connect(mapStateToProps)(CardList);

export default CardList;