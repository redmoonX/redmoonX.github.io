import React from 'react';
import CharTemplate from './CharTemplate';

 
const Characters = ({robots}) => {
return (<div><CharTemplate 
	name={robots.results[0].name}
	gender={robots.results[0].gender}
	height={robots.results[0].height}
	weight={robots.results[0].weight}
	/>
	</div>)
}

// 	<div>
// 	<CharTemplate
// 	name={console.log(Characters)}
// 	gender={robots.gender}
// 	height='massively massive'
// 	/>
// 	</div> );
// }









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

export default Characters;