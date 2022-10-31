import { createContext } from 'react'

export type GlobalContent = {
	toggleComponent: boolean,
	setToggleComponent:(t: boolean) => void
}
export const TestContext = createContext<GlobalContent>({
	toggleComponent: true,
	setToggleComponent: () => {},
})
