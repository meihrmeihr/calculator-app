import { useContext } from "react";
import { ThemeContext } from "./context/Theme";
import Numbers from "./Numbers";

export default function Keypad() {
  const { theme, isChangingTheme } = useContext(ThemeContext);
  const background =
    isChangingTheme && ["bg-[#232c43]", "bg-gray-300", "bg-purple-900"][theme] || "bg-[#1f2a44]";
    const keypadVal = [7,8,9,"DEL",4,5,6,"+",1,2,3,"-",".",0,"/","*","RESET","="]
  return (
    <div className={`${background} grid grid-cols-4 grid-rows-5 place-items-center gap-4 py-4 rounded-md w-full h-full px-4`}>
      {keypadVal.map((val)=><Numbers key={val} val={val} />)}
    </div>
  );
}
