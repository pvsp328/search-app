import React from 'react';

import Card from './Card';

const CardList = ({searchedEmp}) => {
	
	return 	searchedEmp.map(
						(user,i) => {return <Card key={i} id={user.id} name={user.name} email={user.email} /> }
					   )		
}

export default CardList;