import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='pa2'>
			<input 
				type='search' 
				className='pa3 ba b--green bg-lightest-blue' 
				placeholder='Search Employees' 
				onChange={props.searchChange} 
			/>
		</div>
		);
}

export default SearchBox;