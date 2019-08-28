import React from 'react';

const Filmscroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', height: '50px'}}>
			{props.children}
		</div>
	);
};

export default Filmscroll;