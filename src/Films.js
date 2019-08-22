import React from 'react';
import FilmTemplate from './FilmTemplate';


const Films = ({ charName, charHeight, charMass, charHome, charGender }) => {
return (
	<div>


	<FilmTemplate 
		name={charName}
		gender={charGender}
		height={charHeight}
		mass={charMass}
		homeworld={charHome}
		 />
		
		




	
</div>
)	
} 


export default Films;