import Count from "./components/Count";
import Timer from "./components/Timer";
import CharacterCount from "./components/CharacterCount";
import HideTimer from "./components/HideTimer";
import CountReducer from "./components/CountReducer";
import ToggleTheme from "./components/ToggleTheme";
function App() {
  return (
    <div>
      <Count />
      <Timer />
      <CharacterCount />
      <HideTimer />
      <CountReducer />
      <ToggleTheme />
    </div>
  );
}
export default App;
