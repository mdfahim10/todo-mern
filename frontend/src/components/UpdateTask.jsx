import { useState } from "react"
import "../styles/UpdateTask.css"
import { useNavigate } from "react-router-dom";

export default function UpdateTask() {

    const [taskData, setTaskData] = useState();

    const navigate=useNavigate();



    return (
        <div className="container">
            <h1>Update Task</h1>

            <label htmlFor="">Title</label>
            <input
                onChange={(event) => setTaskData({ ...taskData, title: event.target.value })}
                type="text"
                name="title"
                placeholder="enter task title"
            />

            <label htmlFor="">Description</label>
            <textarea
                onChange={(event) => setTaskData({ ...taskData, description: event.target.value })}
                rows={4}
                name="description"
                placeholder="enter task description"
                id="">

            </textarea>

            <button
                className="submit">
                Update Task
            </button>

        </div>
    )
}