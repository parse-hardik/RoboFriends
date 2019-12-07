import React from 'react';

const Card =({ name,email,color }) => {
	return(
		<div className={`bg-${color} tc dib br3 pa3 ma2 grow bw2 shadow-5`}>
			<img alt = 'This a photu!' src = {`https://robohash.org/${name}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
				</div>
		</div>
	);
}

export default Card;