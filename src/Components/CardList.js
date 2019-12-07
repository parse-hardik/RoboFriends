import React from 'react';
import Card from './Card';

const CardList = ( {robots} ) =>
{
	const cardArray = robots.map((user,i) => {
		return (
			<Card 
				key={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email} 
				color={robots[i].color}
				/>);
	});
	return(
		<div>
			{cardArray}
		</div>
	);
}

export default CardList;
