import React from 'react';
import './App.css';
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";

const App = () => {
    return (
        <div className="app_wrapper">
            <Header/>
            <div className="body">
                <div className="body__navbar">
                    <Navbar/>
                </div>
                 <div className="body__profile">
                     <Profile/>
                 </div>
            </div>
        </div>
    );
}

export default App;
