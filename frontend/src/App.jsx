import NavBar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<h1> Hi this is the home page</h1>} />
                <Route path="/add" element={<h1> Hi this is the adding page</h1>} />
            </Routes>
        </>
    )
}
import { Form } from "react-router-dom"

export default App