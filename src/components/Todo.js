import React from "react";

const Todo = ({ text, complete, onClick, id }) => {
    return (
        <li
            key={id}
            style={{ textDecoration: complete ? "line-through" : "none" }}
        >
            <input
                type="checkbox"
                onClick={onClick}
            />
            {text}
        </li>
    );
};

export default Todo;
