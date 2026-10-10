import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Services from "./Pages/Services";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/login" element={<Home />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </BrowserRouter>
    );
}