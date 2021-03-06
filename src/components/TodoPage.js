import React from "react";
import "../App.css"
import AddTodo from "../container/addTodo";
import TodoList from "../container/TodoList";
import Footer from "../container/Footer";

const TodoPage = () => (

    <div className="content">
        <AddTodo />
        <TodoList />
        <Footer />
    </div>
);

export default TodoPage;
