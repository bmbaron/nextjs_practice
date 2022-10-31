

import React, { useContext } from 'react';
import { TestContext } from '../contexts/TestContext'


export const Component1 = () => {

	const { setToggleComponent } = useContext(TestContext)

	return (
		<>
			<div style={{backgroundColor: 'red', height: '50vh'}}>
				hello
			</div>
			<button
				onClick={() => {
					setToggleComponent(false)
				}}
			>change component</button>
		</>
	);
};