import { useState } from "react"
import "../styles/AddTask.css"

export default function AddTask() {

    const[taskData,setTaskData]=useState();

    const handleAddTask=async ()=>{
        console.log(taskData);
        let result=await fetch("http://localhost:3200/add-task",
            {
                method:"POST",
                body:JSON.stringify(taskData),
                headers:{
                    "Content-Type":"Application/JSON"
                }
            }
        )
        result=await result.json()
        if(result){
            console.log("New Task Added")
        }

    }

    return (
        <div className="container">
            <h1>Add New Task</h1>

            <label htmlFor="">Title</label>
            <input
                onChange={(event)=>setTaskData({...taskData,title:event.target.value})}
                type="text"
                name="title"
                placeholder="enter task title"
            />

            <label htmlFor="">Description</label>
            <textarea
                onChange={(event)=>setTaskData({...taskData,description:event.target.value})}
                rows={4}
                name="description"
                placeholder="enter task description"
                id="">

            </textarea>

            <button
                onClick={handleAddTask}
                className="submit">
                Add Task
            </button>

        </div>
    )
}