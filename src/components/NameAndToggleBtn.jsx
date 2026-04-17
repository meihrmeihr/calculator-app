import { useState, useContext } from "react";
import { ThemeContext } from "./context/Theme";

export default function NameAndToggleBtn() {
    const {theme,setTheme,isChangingTheme,setIsChangingTheme} = useContext(ThemeContext);
    const [toggle,setToggle] = useState("left-1");

    const background = isChangingTheme && ["bg-[#232c43]","bg-gray-300","bg-purple-900"][theme];
    const dot =
      isChangingTheme &&
      [
        "bg-red-500 hover:bg-red-400",
        "bg-orange-600 hover:bg-orange-500",
        "bg-cyan-500 hover:bg-cyan-400",
      ][theme];

  return (
    <div className='flex justify-between items-center w-full'>
      <h1 className='text-2xl md:text-4xl font-bold'>calc</h1>
      <div className='flex justify-center items-end gap-x-6 uppercase'>
        <h1 className='text-xs pb-2'>theme</h1>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center gap-x-2'>
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
          </div>
          <div
            className={`relative ${background || "bg-[#1f2a44]"} flex justify-start items-center rounded-full w-14 h-6 p-1`}
          >
            <button
              className={`absolute ${dot || "bg-red-500 hover:bg-red-400"} ${toggle} transition-left duration-300 rounded-full cursor-pointer w-4 h-4`}
              type='button'
              onClick={() => {
                setIsChangingTheme(true);
                setToggle((prevGle) =>
                  prevGle === "left-1"
                    ? (prevGle = "left-4.5")
                    : prevGle === "left-4.5"
                      ? (prevGle = "left-9")
                      : (prevGle = "left-1"),
                );
                setTheme(prev => (prev + 1) % 3 );
              }}
              aria-label="this a toggle button that doesn't need any text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
