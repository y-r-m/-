import RandomImage from "./component/BgImg";
import GetClock from "./component/Clock";
import Greeting from "./component/Greeting";
import Weather from "./component/Weather";
import TodoList from "./component/TodoList";
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
      <div>
        <div
          style={{
            fontSize: "25px",
            textAlign: "center",
            position: "absolute",
            top: "2%",
            left: "1%",
          }}
        >
          <Weather />
        </div>
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
          <TodoList />
        </div>
      </div>
      <RandomImage />
    </div>
  );
}
export default App;
