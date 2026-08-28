import { useState } from "react"
import "../styles/AddTask.css"

export default function AddTask() {
    const [taskData, setTaskdata] = useState();

    const handleAddTask=async ()=>{
        event.preventDefault();

        console.log(taskData);
        let result = await fetch("http://localhost:3200/add-task",{
            method:"POST",
            body:JSON.stringify(taskData),
            headers:{
                "Content-Type":"Application/Json"
            }
        })
        result=await result.json()
        if(result){
            console.log("new task added");
        }else{
            
        }
    }
    return (
        <div className="container">
            <h1>Add New Task</h1>
            <form>
                <label htmlFor="">Title</label>
                <input
                    onChange={(event) => setTaskdata({ ...taskData, title: event.target.value })}
                    type="text"
                    name="title"
                    placeholder="enter task title" />

                <label htmlFor="">Description</label>
                <textarea
                    onChange={(event) => setTaskdata({ ...taskData, description: event.target.value })}
                    rows={4}
                    name="description"
                    placeholder="enter task description"
                    id="">
                </textarea>

                <button 
                onClick={handleAddTask}
                className="button" type="submit">Add New Task</button>
            </form>
        </div>
    )
} 