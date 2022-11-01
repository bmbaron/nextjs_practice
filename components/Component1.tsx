
import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext'
import { ToggleContext } from '../contexts/ToggleContext'
import { Button } from '../components/elements/Button'
import { Container } from '../components/elements/Container'

export const Component1 = () => {

	const { setToggleComponent } = useContext(ToggleContext)
	const { secretWord } = useContext(UserContext)

	const [showSecret, setShowSecret] = useState<boolean>(false)

	return (
		<>
			<Container bg='salmon'>
				<h1>hello</h1>
				<p>This is the first component. It&apos;s red.</p>
				<div>
					<Button
						primary={false}
						onClick={() => setShowSecret(prev => !prev)}
					>click to show secret</Button>
					{showSecret && <p>{secretWord}</p>}
				</div>
			</Container>
			<Button
				primary={true}
				onClick={() => {
					setToggleComponent(false)
				}}
			>change component
			</Button>
		</>
	)
}




