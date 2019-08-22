import React from 'react';
import HWTemplate from './HWTemplate';


const Homeworlds = ({ charName, charHeight, charMass, charHome, charGender }) => {
return (
	<div>


	<HWTemplate 
		name={charName}
		gender={charGender}
		height={charHeight}
		mass={charMass}
		homeworld={charHome}
		 />
		
		




	
</div>
)	
} 


export default Homeworlds;