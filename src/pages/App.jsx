import CalcWindow from "../components/Calc_window";
import Theme from "../components/context/Theme";
export default function App() {
  
  return (
    <main className={`font-league-spartan font-bold min-h-screen min-w-screen`}>
      <Theme>
        <CalcWindow />
      </Theme>
    </main>
  );
}