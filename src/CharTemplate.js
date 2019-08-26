import React from 'react';
import './CharTemplate.css';

const CharTemplate = ({ name, gender, homeworld, height, mass }) => {

	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img className='chartest' alt='robots' src={`https://robohash.org/${name}?200x200`} />
			<div>
				<p>Name: {name}</p>
				<p>Gender: {gender}</p>
				<p>Height: {height} cm</p>
				<p>Mass: {mass} kg</p>
				<p>Homeworld: {homeworld}</p>
			</div>
		</div>

		);


}

export default CharTemplate;