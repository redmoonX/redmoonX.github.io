import React from 'react';

const Filmscroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', border: '5px solid black', height: '50px'}}>
			{props.children}
		</div>
	);
};

export default Filmscroll;