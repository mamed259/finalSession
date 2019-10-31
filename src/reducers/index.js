import { combineReducers } from "redux";
import todos from "../reducers/todo";
import filterTodo from "../reducers/filter";

export default combineReducers({
    todos,
    filterTodo
});
