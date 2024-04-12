import { FC, createContext, useState } from "react"

export const scrollContext = createContext({})

interface Props {
    children: JSX.Element
}
const ScrollContextProvider: FC<Props> = ({ children }) => {

    const [sectionChange, SetsectionChange] = useState<boolean>(false)

    return (
        <scrollContext.Provider value={{ sectionChange, SetsectionChange }}>{children}</scrollContext.Provider>
    )
}

export default ScrollContextProvider;
