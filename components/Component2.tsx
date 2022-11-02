import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import { ToggleContext } from '../contexts/ToggleContext';
import { Button } from './elements/Button';
import { Container } from './elements/Container';

export const Component2 = () => {

	const { secretWord, setSecretWord } = useContext(UserContext)
	const { setToggleComponent } = useContext(ToggleContext)

		return (
			<>
			<Container bg='lightblue'>
				<h1>Edit Secret</h1>
				<p>changes are automatically saved</p>
				<div>
					<input value={secretWord} onChange={(e) => setSecretWord(e.target.value)}></input>
				</div>
			</Container>
			<Button
				primary={true}
				onClick={() => {
					setToggleComponent(true)
				}}
			>go to <strong>view secret</strong>
			</Button>
		</>
	);
};
