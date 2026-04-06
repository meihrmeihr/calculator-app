import { useContext } from "react";
import { ThemeContext } from "./context/Theme";

function Screen() {
  const { theme, isChangingTheme, firstNum, operator, secondNum } =
    useContext(ThemeContext);

  const background =
    (isChangingTheme &&
      ["bg-[#182034]", "bg-gray-100", "bg-purple-900"][theme]) ||
    "bg-[#182034]";
  function separator(target) {
    if (String(target).includes("."))
      return (
        String(
          Number(
            String(target).slice(0, String(target).indexOf(".")),
          ).toLocaleString(),
        ) + String(target).slice(String(target).indexOf("."))
      );
    else return String(Number(target).toLocaleString());
  }

  return (
    <p
      className={`relative ${background} flex justify-end items-center min-h-20 max-h-20 rounded-md w-full overflow-x-hidden text-end text-[clamp(1.5rem,3dvw,2rem)] py-4 px-4 font-bold focus:outline-0 overflow-y-hidden`}
    >
      <span className='[&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 max-w-75 lg:max-w-full overflow-x-scroll'>
        {separator(firstNum)}
        {operator}
        {secondNum && separator(secondNum)}
      </span>
    </p>
  );
}

export default Screen;
