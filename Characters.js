import React from 'react';
import CharSheet from './CharSheet';


const Characters = ({ people }) => {
	return (<div>
			{
					people.map((i) => {
						return (<CharSheet 
							key={i} 
							name={people[i].name} 
							gender={people[i].gender} 
							height={people[i].height}
							weight={people[i].weight}
							homeworld={people[i].homeworld}

							/>
					);
				})

			}
		</div>
	);
}

export default Characters;

//
