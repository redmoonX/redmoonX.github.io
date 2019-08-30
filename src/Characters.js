import React from 'react';
import CharTemplate from './CharTemplate';


const Characters = ({ charName, charHeight, charMass, charHome, charGender }) => {
return (
	<div>



	<CharTemplate 
		name={charName}
		gender={charGender}
		height={charHeight}
		mass={charMass}
		homeworld={charHome}
		 />
		
		




	
</div>
)	
} 


export default Characters;


// return(<div name={robots.map()}></div>);




// import React from 'react';
// import CharTemplate from './CharTemplate';

 
// const Characters = ({ people }) => {
// return (<div><CharTemplate 
// 	name={console.log({ people })}
// 		// height={}
// 	// name={robots.results[0].name}
// 	// gender={robots.robots.results[0].gender}
// 	// height={robots.results[0].height}
// 	// weight={robots.results[0].weight}
// 	/>
// 	</div>)
// }

// 	<div>
// 	<CharTemplate
// 	name={console.log(Characters)}
// 	gender={robots.gender}
// 	height='massively massive'
// 	/>
// 	</div> );
// }

// export default Characters;







// const Characters = ({ robots }) => {
	
// 	return (
// 		<div>
// 			{
// 					this.map((user, i) => {
// 						return (<CharTemplate 
// 							key={i} 
// 							id={robots[i].id} 
// 							name={robots[i].name} 
// 							email={robots[i].email}
// 							/>
// 					);
// 				})

// 			}
// 		</div>
// 	);
// }

