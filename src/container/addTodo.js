import React from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => {
    let input;
    const onClick = (e) => {
        e.preventDefault();
        if (input.value.trim() !== "") {
            dispatch(addTodo(input.value.trim()));
        }
    };

    return (
        <div>
            <form>
                <input type="text" ref={node => (input = node)} />
                <button type="submit" onClick={onClick}>
                    Add Todo
                </button>
            </form>

        </div>
    );
};

export default connect()(AddTodo);
