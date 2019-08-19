import React from 'react';

const CharTemplate = ({ name, gender, key, height }) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${key}?200x200`} />
			<div>
				<p>Name: {name}</p>
				<p>Gender: {gender}</p>
				<p>Height: {height}</p>
				<p>Key: {key}</p>
				
			</div>
		</div>

		);


}

export default CharTemplate;