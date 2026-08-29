import "./styles/App.css"
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import List from "./components/List";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element=<List/> >
                </Route>

                <Route path="/add" element=<AddTask />>
                </Route>


            </Routes>
        </>
    );
}

export default App;