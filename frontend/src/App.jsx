import "./styles/App.css"
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<><h1>Task List</h1> <br /> <p>This is the home page of our ToDo App and in this page we will show al task that has been added by the users</p></>}>
                </Route>

                <Route path="/add" element=<AddTask />>
                </Route>


            </Routes>
        </>
    );
}

export default App;