
import { createContext, useEffect, useState } from "react";



export const ListContext = createContext({
    removeHandler:()=>{}
})

export const ListProvider = ({children}) => {

    
    const [t,setT] = useState([])
    localStorage.setItem('todos', JSON.stringify(t))
    
    const removeHandler =(index)=> {

        var list = JSON.parse(localStorage.getItem('todos'))    
        list.splice(index,1)

        console.log('list', list)
        
    }
  
    const value = {t,setT,removeHandler}
    return <ListContext.Provider value={value}>{children}</ListContext.Provider>
}