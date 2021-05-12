import React from 'react';

class Scroll extends React.Component {
	render(){
		return (
			<div style={{overflowY:'scroll', border: '1px solid white', height: '600px'}}>
				{this.props.children}
			</div>

			) 
	}

}

export default Scroll;