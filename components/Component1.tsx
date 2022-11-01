
import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext'
import { ToggleContext } from '../contexts/ToggleContext'
import { Button } from '../components/elements/Button'
import { Container } from '../components/elements/Container'

export const Component1 = () => {

	const { secretWord } = useContext(UserContext)
	const { setToggleComponent } = useContext(ToggleContext)

	const [showSecret, setShowSecret] = useState<boolean>(false)

	return (
		<>
			<Container bg='salmon'>
				<h1>View Secret</h1>
				<div>
					<Button
						primary={false}
						onClick={() => setShowSecret(prev => !prev)}
					>click to {showSecret ? 'hide' : 'show'} secret</Button>
					<p>{showSecret ? secretWord: '***'}</p>
				</div>
			</Container>
			<Button
				primary={true}
				onClick={() => {
					setToggleComponent(false)
				}}
			>go to <strong>edit secret</strong>
			</Button>
		</>
	)
}




