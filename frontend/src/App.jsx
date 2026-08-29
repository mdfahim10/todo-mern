import "./styles/App.css"
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/UpdateTask";
import List from "./components/List";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element=<List/> />
                <Route path="/add" element=<AddTask /> />
                <Route path="/update/:id" element=<UpdateTask /> />


            </Routes>
        </>
    );
}

export default App;