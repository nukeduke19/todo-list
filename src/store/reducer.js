import { combineReducers } from "redux";
import tasksReducers from "./tasks";

export default combineReducers({
  tasks: tasksReducers,
});
