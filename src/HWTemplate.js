import React from 'react';

const HWTemplate = ({ name, gender, homeworld, height, mass }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${name}?200x200`} />
			<div>
				<p>Name: {name}</p>
				<p>Climate: {gender}</p>
				<p>Terrain: {height}</p>
				<p>Population: {mass}</p>				
			</div>
		</div>

		);


}

export default HWTemplate;