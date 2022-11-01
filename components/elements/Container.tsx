import styled from 'styled-components'

interface Props {
	bg: string
}
export const Container = styled.div<Props>`
	background-color: ${props => props.bg === 'red' ? 'salmon' : 'skyblue'};
	height: 50vh;

	> h1 {
		font-size: 4em;
		color: black;
		padding-top: 5rem;
	}

	>p {
		font-size: 2em;
	}
`