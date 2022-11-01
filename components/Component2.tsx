import React, { useContext } from 'react';
import { ToggleContext } from '../contexts/ToggleContext';
import { Button } from './elements/Button';
import { Container } from './elements/Container';

export const Component2 = () => {
	const { setToggleComponent } = useContext(ToggleContext)

		return (
			<>
			<Container bg='royalblue'>
				<h1>goodbye</h1>
				<p>This is the second component. It&apos;s blue.</p>
			</Container>
			<Button
				primary={true}
				onClick={() => {
					setToggleComponent(true)
				}}
			>change component
			</Button>
		</>
	);
};
