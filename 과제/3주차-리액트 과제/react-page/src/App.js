import RandomImage from "./component/bgimg";
import GetClock from "./component/clock";
import Greeting from "./component/greeting";
function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <GetClock />
        <Greeting />
      </div>
      <RandomImage />
    </div>
  );
}
export default App;
