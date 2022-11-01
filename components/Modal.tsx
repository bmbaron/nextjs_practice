import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import { Button } from './elements/Button';
import { Container } from './elements/Container';

type Props = {
	show: (s: boolean) => void,
}
export const Modal = (props: Props) => {

	const { secretWord, setSecretWord } = useContext(UserContext)


	return (
		<Container bg='goldenrod'>
			<h1>hello, what&apos;s your secret?&nbsp; </h1>
			<input 
				placeholder={secretWord}
				onChange={e => setSecretWord(e.target.value)}
			></input>
			<Button primary={false} onClick={() => props.show(false)}>add secret</Button>
		</Container>
	);
};
