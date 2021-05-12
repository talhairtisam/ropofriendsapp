import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render(){
		return (
			<div className='bg-light-green dib br3 ma2 grow bw2 shadow-5'>
				 <img alt='robots' src={`https://robohash.org/${this.props.id}?200x200`} />
				 <div className='tc'>
				 	<h2>{this.props.name}</h2>
				 	<p>{this.props.email}</p>
				 </div>
			</div>

			)
	}

}

export default Card;