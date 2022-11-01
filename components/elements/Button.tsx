import styled from 'styled-components'

interface Props {
	primary: boolean;
}
export const Button = styled.button<Props>`
  color: palevioletred;
	background: ${props => props.primary ? 'none' : 'white'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: inline-block;

	&:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
`