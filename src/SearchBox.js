import React from 'react';
// import { connect } from 'react-redux';
// import { setSearchField } from './actions';

class SearchBox extends React.Component {
	render()
	{
		return ( 
			<div className='pa2'>
			<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='seach robots' 
			onChange={this.props.searchChange}
			/>
			</div>
			)
	}

}
// const mapDispatchToProps =(dispatch)=>{
// 	return {
// 		searchChange: () => dispatch(setSearchField())
// 	}
// }
// export default connect(null,mapDispatchToProps)(SearchBox);
export default SearchBox;