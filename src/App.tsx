import React from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage"

function App() {
    return (
        <Router basename="/">
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;