
import styled from 'styled-components'
import React, { useContext } from 'react';
import { TestContext } from '../contexts/TestContext'
import { Button } from '../components/elements/Button'
import { Container } from '../components/elements/Container'

export const Component1 = () => {

	const { setToggleComponent } = useContext(TestContext)

	return (
		<>
			<Container bg='red'>
				<h1>hello</h1>
				<p>This is the first component. It&apos;s red.</p>
				<div>
					show secret word
					<Button primary={false}>click to show</Button>
					<input></input>
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




