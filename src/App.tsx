import React, {Component} from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage"

class App extends Component {
    render(){
    return (
        <Router basename="/">
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
            </Routes>
        </Router>
    );
    }
}

export default App;