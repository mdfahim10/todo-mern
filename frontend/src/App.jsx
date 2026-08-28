import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import AddTask from "./components/AddTask";

function App() {
    return (
        <>
            <NavBar />

            <Routes>
                <Route
                    path="/"
                    element={<h1>Hi this is the home page</h1>}
                />

                <Route
                    path="/add"
                    element={<AddTask />}
                />
            </Routes>
        </>
    );
}

export default App;