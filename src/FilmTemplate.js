import React from 'react';
import Filmscroll from './Filmscroll.js';

const SSTemplate = ({ name, gender, homeworld, height, mass }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${name}?200x200`} />
			<div>
				<p>Title: {name}</p>
				<p>Episode: {gender}</p>
				<p>Release Date: {height}</p>
				<p>Intro: 
				<Filmscroll>{mass}
				</Filmscroll>
				</p>
			</div>
		</div>

		);


}

export default SSTemplate;