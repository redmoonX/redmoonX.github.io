import React from 'react';

const CharSheet = ({ name, gender, height, weight, homeworld, key }) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${key}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{gender}</p>
				<p>{height}</p>
				<p>{weight}</p>
				<p>{homeworld}</p>
			</div>
		</div>

		);


}

export default CharSheet;