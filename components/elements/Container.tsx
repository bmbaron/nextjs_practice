import styled from 'styled-components'

interface Props {
	bg: string
}
export const Container = styled.div<Props>`
	background-color: ${props => props.bg};
	height: 50vh;
	border-radius: 10px;

	> h1 {
		font-size: 4em;
		color: black;
		padding-top: 5rem;
		margin-bottom: 1rem;
	}

	>p {
		font-size: 1.5em;
		margin-bottom: 1rem;
	}

	> input {
		height: 3em;
		line-height: 3em;
		font-size: 1em;
		background: white;
		color: black;
		width: 200px;
	}

	> * p {
		color: black;
		font-style: italic;
	}
`