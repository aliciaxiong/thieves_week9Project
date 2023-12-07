import "./Todolist.css"
import React, { useState } from "react";

interface TodolistProps {
    tasks: string[];
}

const Todolist = () => {

    const [todo, setTodo] = useState("");
    const [tasks, setTasks] = useState([]);


    const handleInput = (event) => {
        setTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo !== "") {
            setTasks([...tasks, todo]);
            setTodo("");
        } 
    }

    return (
    <>
        <div className="form_container">
            <form className="entertask_form_container" onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a task" value={todo} onChange={handleInput}/>

                <div className="task-divider-container">
                    <button className="addtask_button" type="submit">Add</button>
                </div>

            </form>
        </div>

        <div className="list-container1">
            <table className="header-table">
                <tr>
                    <th> Task </th>
                </tr>
            </table>
        </div>

        <div className="list-container2">
            <table className="detail-table"> {tasks.map((task, index) => (
                <tr key={index}>
                    <td> {task} </td>
                </tr>
                ))}
            </table>
        </div>

    </>
    )
};

export default Todolist