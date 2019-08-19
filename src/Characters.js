import React from 'react';
import CharTemplate from './CharTemplate';


const Characters = ({ robots }) => {
	
	return (
		<div>
			{
					this.map((user, i) => {
						return (<CharTemplate 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
							/>
					);
				})

			}
		</div>
	);
}

export default Characters;