import React, { useContext } from 'react';
import { TestContext } from '../contexts/TestContext';

export const Component2 = () => {
	const { setToggleComponent } = useContext(TestContext)

		return (
			<>
				<div style={{backgroundColor: 'blue', height: '50vh'}}>
					goodbye
				</div>
				<button
					onClick={() => {
						setToggleComponent(true)
					}}
				>change component</button>
			</>
	);
};
