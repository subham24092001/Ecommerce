import React,{createContext,useContext,useState} from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [isdark,setIsDark] = useState(false);
  
  const toggletheme = ()=>{
    setIsDark(!isdark);
  }

  return (
    <ThemeContext.Provider value={{isdark,toggletheme}}>{children}</ThemeContext.Provider>  
  )
}

export const useTheme = ()=>{
    return useContext(ThemeContext);
}
