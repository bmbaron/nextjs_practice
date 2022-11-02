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
	color: black;

	> h1 {
		font-size: 4em;
		margin-bottom: 5rem;
	}

	> input, * input {
		height: 3em;
		line-height: 3em;
		font-size: 1em;
		background: white;
		width: 200px;
		text-indent: 5px;
		color: black;
	}

	> * p {
		font-style: italic;
		font-size: 1.5em;
	}
`