import "./Todolist.css"
import { useState } from "react";

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

    const handleComplete = (index) => {
        const updateTask = [...tasks];
        updateTask.splice(index, 1);
        setTasks(updateTask);
    }

    return (
    <>
        <div className="form_container">
            <form className="entertask_form_container" onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a Task" value={todo} onChange={handleInput}/>
                <div className="task-divider-container">
                    <button className="addtask_button" type="submit" >Add</button>
                </div>

            </form>
        </div>

        <div className="list-container1">
            <table className="header-table">
                <tr>
                    <th><u> TO - DO - LIST </u></th>
                </tr>
            </table>
        </div>

        <div className="list-container2">
            <table className="detail-table"> {tasks.map((task, index) => (
                <tr key={index}>
                    <td> {task} </td>
                    <td> <button className="complete_button" onClick={() => handleComplete(index)}> Completed </button> </td>
                </tr>
                ))}
            </table>
        </div>
    </>
    );
};

export default Todolist