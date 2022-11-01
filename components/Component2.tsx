import React, { useContext } from 'react';
import { TestContext } from '../contexts/TestContext';
import { Button } from './elements/Button';
import { Container } from './elements/Container';

export const Component2 = () => {
	const { setToggleComponent } = useContext(TestContext)

		return (
			<>
			<Container bg='blue'>
				<h1>goodbye</h1>
				<p>This is the second component. It&apos;s blue.</p>
			</Container>
			<Button
				primary={false}
				onClick={() => {
					setToggleComponent(true)
				}}
			>change component
			</Button>
		</>
	);
};
