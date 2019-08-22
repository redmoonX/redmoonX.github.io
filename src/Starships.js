import React from 'react';
import SSTemplate from './SSTemplate';


const Starships = ({ charName, charHeight, charMass, charHome, charGender }) => {
return (
	<div>


	<SSTemplate 
		name={charName}
		gender={charGender}
		height={charHeight}
		mass={charMass}
		homeworld={charHome}
		 />
		
		




	
</div>
)	
} 


export default Starships;