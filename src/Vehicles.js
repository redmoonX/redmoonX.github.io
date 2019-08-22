import React from 'react';
import VehTemplate from './VehTemplate';


const Vehicles = ({ charName, charHeight, charMass, charHome, charGender }) => {
return (
	<div>


	<VehTemplate 
		name={charName}
		gender={charGender}
		height={charHeight}
		mass={charMass}
		homeworld={charHome}
		 />
		
		




	
</div>
)	
} 


export default Vehicles;