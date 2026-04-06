import { useContext } from "react";
import { ThemeContext } from "./context/Theme";
export default function Numbers({ val }) {
  const {
    isChangingTheme,
    theme,
    firstNum,
    setFirstNum,
    secondNum,
    setSecondNum,
    operator,
    setOperator,
    setHasCalculated,
  } = useContext(ThemeContext);

  const background =
    isChangingTheme &&
    [
      "bg-gray-200 text-[#444b5a] shadow-[#b4a597] active:bg-[#b4a597]",
      "bg-gray-200 text-blue-950 shadow-gray-500 active:bg-gray-500",
      "bg-purple-800 text-yellow-300 shadow-purple-400 active:bg-purple-400",
    ][theme];
  const presets =
    (val === "DEL" &&
      [
        "bg-[#637097] text-white shadow-[#404e72] active:bg-[#404e72]",
        "bg-[#1b5f65] text-white shadow-[#404e72] active:bg-[#404e72]",
        "bg-[#341c4f] text-white shadow-[#871c9c] active:bg-[#871c9c]",
      ][theme]) ||
    (val === "RESET" &&
      [
        "bg-[#637097] text-white shadow-[#404e72] col-span-2 active:bg-[#404e72]",
        "bg-[#1b5f65] text-white shadow-[#404e72] col-span-2 active:bg-[#404e72]",
        "bg-[#341c4f] text-white shadow-[#871c9c] col-span-2 active:bg-[#871c9c]",
      ][theme]) ||
    (val === "=" &&
      [
        "bg-[#d03f2f] text-white shadow-[#93261a] col-span-2 active:bg-[#93261a]",
        "bg-[#ca5502] text-white shadow-[#893901] col-span-2 active:bg-[#893901]",
        "bg-[#00e0d1] text-[#1b2428] shadow-[#6cf9f2] col-span-2 active:bg-[#6cf9f2]",
      ][theme]);

  function merge(prevNum, currentNum) {
    
    if (prevNum.length > 14) return prevNum;
    if (prevNum === "" && currentNum === "0") {
      prevNum = "0";
    } else if (prevNum === "" && currentNum === ".") {
      prevNum = "0.";
    } else if (
      currentNum === "." &&
      !prevNum.includes(".")
    ) {
      prevNum += currentNum;
    } else if (currentNum !== ".") { 
       prevNum += currentNum;
    }
    return prevNum;
  }
  function calculation(e) {
    const preventedKeys = ["DEL", "RESET", "="];
    const operators = ["+", "-", "*", "/"];
    const clickedKey = e.target.value;
    const isIncluded =
      !preventedKeys.includes(clickedKey) && !operators.includes(clickedKey);

    if (isIncluded && operator === "") {
      setFirstNum(merge(String(firstNum), clickedKey));
    } else {
      if (isIncluded) setSecondNum(merge(String(secondNum), clickedKey));
    }
    if (operators.includes(clickedKey) && firstNum !== "" && firstNum[firstNum.length -1] !== ".") {
      setOperator(clickedKey);
    }

    if (firstNum && secondNum && operator) {
      if (clickedKey === "=" || operators.includes(clickedKey)) {
        switch (operator) {
          case "+":
            setFirstNum(Number(firstNum) + Number(secondNum));
            break;
          case "-":
            setFirstNum(Number(firstNum) - Number(secondNum));
            break;
          case "*":
            setFirstNum(Number(firstNum) * Number(secondNum));
            break;
          case "/":
            setFirstNum(Number(firstNum) / Number(secondNum));
            break;
        }
        setOperator("");
        setSecondNum("");
        setHasCalculated(true);
      }
    }

    if (clickedKey === "DEL") {
      if (secondNum)
        setSecondNum(String(secondNum).slice(0, String(secondNum).length - 1));
      else if (operator) setOperator("");
      else if (firstNum)
        setFirstNum(String(firstNum).slice(0, String(firstNum).length - 1));
    }
    if (clickedKey === "RESET") {
      setFirstNum("");
      setSecondNum("");
      setOperator("");
      setHasCalculated(false);
    }
  }
  return (
    <button
      className={`${presets || background || "bg-gray-200 text-[#444b5a] shadow-[#b4a597]"} text-[clamp(1.5rem,4dvw,3rem)] px-1 w-full h-[9dvh] rounded-md shadow-[0px_4px_0px_0px] active:scale-105 cursor-pointer`}
      value={val}
      onClick={calculation}
    >
      {val}
    </button>
  );
}
