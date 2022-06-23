
import { createContext } from "react";



export const ListContext = createContext({
})

export const ListProvider = ({children}) => {
  
    const value = {}
    return <ListContext.Provider value={value}>{children}</ListContext.Provider>
}