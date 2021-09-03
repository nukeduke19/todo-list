import Todo from "./components/Todo";
import { Provider } from "react-redux";
import configureStore from "./store/configStore";

const store = configureStore();
console.log("Store,,,", store);

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
