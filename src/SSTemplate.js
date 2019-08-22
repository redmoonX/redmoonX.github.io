import React from 'react';

const SSTemplate = ({ name, gender, homeworld, height, mass }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${name}?200x200`} />
			<div>
				<p>Name: {name}</p>
				<p>Model: {gender}</p>
				<p>Manufacturer: {height}</p>
				<p>Crew: {mass}</p>
				<p>Length: {homeworld}</p>
				
			</div>
		</div>

		);


}

export default SSTemplate;