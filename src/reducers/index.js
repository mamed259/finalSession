import { combineReducers } from "redux";
import todos from "../reducers/todo";
import filterTodo from "../reducers/filter";
import itemsHasErrored from "../reducers/itemsHasErroredPost";
import itemsIsLoading from "../reducers/itemsIsLoadingPost";
import itemsPost from "../reducers/itemsPost";

export default combineReducers({
    todos,
    filterTodo,
    itemsHasErrored,
    itemsIsLoading,
    itemsPost
});
