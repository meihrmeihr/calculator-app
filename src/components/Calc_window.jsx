import { useContext } from "react";
import { ThemeContext } from "./context/Theme";
import NameAndToggleBtn from "./NameAndToggleBtn";
import Screen from "./Screen";
import Keypad from "./Keypad";

export default function CalcWindow() {
  const { theme, isChangingTheme } = useContext(ThemeContext);
  
  const darkTheme =
    !isChangingTheme && window.matchMedia("(prefers-color-scheme:dark)").matches
      ? "bg-[#0a1120] text-white"
      : "bg-[#3a4764] text-white";
  const background =
    isChangingTheme &&
    [
      "bg-[#3a4764] text-white",
      "bg-gray-200 text-blue-950",
      "bg-purple-950 text-yellow-300",
    ][theme];

  return (
    <section
      className={`${background || darkTheme} transition-colors duration-300 flex justify-center items-center h-screen py-4`}
    >
      <div className='flex flex-col justify-center items-center lg:w-[45%] h-[70dvh] gap-y-4  mx-4 py-4 px-4'>
        <NameAndToggleBtn />
        <Screen />
        <Keypad />
      </div>
    </section>
  );
}
