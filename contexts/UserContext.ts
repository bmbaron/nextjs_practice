import { createContext } from 'react'

export type GlobalContent = {
	secretWord: string,
	setSecretWord:(t: string) => void,
}

export const UserContext = createContext<GlobalContent>({
	secretWord: 'enter your secret word',
	setSecretWord: () => {},
})
