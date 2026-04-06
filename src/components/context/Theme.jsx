import { useState, createContext } from "react";
export const ThemeContext = createContext({});

export default function Theme({children}) {
    
    const [isChangingTheme,setIsChangingTheme] = useState(false);
    const [theme,setTheme] = useState(0);

    const [firstNum,setFirstNum] = useState("");
    const [operator,setOperator] = useState("");
    const [secondNum,setSecondNum] = useState("");
    const [hasCalculated,setHasCalculated] = useState(false);
    
    const val = {
      theme,setTheme,
      isChangingTheme,setIsChangingTheme,
      firstNum,setFirstNum,
      operator,setOperator,
      secondNum,setSecondNum,
      hasCalculated,setHasCalculated
    };
    return (
        <ThemeContext.Provider value={val}>
            {children}
        </ThemeContext.Provider>
    );
}