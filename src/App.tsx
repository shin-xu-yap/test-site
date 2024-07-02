import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage"
import CityPage from "./pages/CityPage"
import HistoricalRoutePage from "./pages/HistoricalRoute"
import ReviewPage from "./pages/ReviewsPage";
import RoutesPage from "./pages/Routes";
import CreateNewRoutesPage from "./pages/CreateNewRoutes";
import MyAccountPage from "./pages/MyAccountPage";
import EditProfilePage from "./pages/EditProfilePage";

class App extends Component {
    render(){
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/city" element={<CityPage/>}/>
                <Route path="/historical" element={<HistoricalRoutePage/>}/>
                <Route path="/reviews" element={<ReviewPage/>}/>
                <Route path="/routes" element={<RoutesPage/>}/>
                <Route path="/createNewRoutes" element={<CreateNewRoutesPage/>}/>
                <Route path="/myAccount" element={<MyAccountPage/>}/>
                <Route path="/editProfile" element={<EditProfilePage/>}/>
            </Routes>
        </Router>
    );
    }
}

export default App;