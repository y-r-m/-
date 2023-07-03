import CountReducer from "./components/CountReducer";
import ToDoList from "./components/ToDoList";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <CountReducer />
      <ToDoList />
      <Counter />
      <Auth />
      <Cart />
    </div>
  );
}
export default App;
