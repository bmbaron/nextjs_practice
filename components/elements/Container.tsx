import styled from 'styled-components'

interface Props {
	bg: string
}
export const Container = styled.div<Props>`
	background-color: ${props => props.bg};
	height: 50vh;
	border-radius: 10px;
	width: 70%;
	height: auto;
	min-height: 55vh;
	margin: auto;
	padding: 10px;
	padding-bottom: 2rem;

	> h1 {
		font-size: 4em;
		color: black;
		margin-bottom: 1rem;
	}

	> * p {
		font-size: 1.5em;
	}

	> input, * input {
		height: 3em;
		line-height: 3em;
		font-size: 1em;
		background: white;
		color: black;
		width: 200px;
		text-indent: 10px;
	}

	> * p {
		color: black;
		font-style: italic;
	}
`