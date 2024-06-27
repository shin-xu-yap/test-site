import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage"
import CityPage from "./pages/CityPage"

class App extends Component {
    render(){
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/city" element={<CityPage/>}/>
            </Routes>
        </Router>
    );
    }
}

export default App;