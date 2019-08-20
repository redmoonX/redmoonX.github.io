import React from 'react';
import CharTemplate from './CharTemplate';


const Characters = ({ people }) => {
	
	return (
		<div>
			    
					{people.map((user, i) => {
						return (<CharTemplate 
							// key={i} 
							// id={robots[i].id} 
							name={people[i].name} 
							// height={robots[i].height}
							/>
					);
				})

			}
		</div>
	);
}

export default Characters;

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

