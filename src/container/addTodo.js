import React from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => {
    let input;
    const onClick = (e) => {
        dispatch(addTodo(input.value.trim()));
    };
    return (
        <div>
                <input type="text" ref={node => (input = node)} />
                <button type="submit" onClick={onClick}>
                    Add Todo
                </button>
        </div>
    );
};

export default connect()(AddTodo);
