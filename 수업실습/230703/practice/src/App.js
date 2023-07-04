import CountReducer from "./components/CountReducer";
import ToDoList from "./components/ToDoList";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Cart from "./components/Cart";
import ReduxTodoList from "./components/ReduxTodoList";

function App() {
  return (
    <div>
      <h1>✔Reducer</h1>
      <Counter />
      <ToDoList />
      <p>-------------------------</p>
      <h1>✔Redux</h1>
      <CountReducer />
      <Auth />
      <Cart />
      <ReduxTodoList />
    </div>
  );
}
export default App;
