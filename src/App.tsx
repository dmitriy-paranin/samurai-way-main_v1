import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Profile from "./Profile";
import Header from "./Header";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="body">
                <div className="body__profile">
                    <Profile/>
                </div>
                 <div className="body__navbar">
                     <Navbar/>
                 </div>
            </div>
        </div>
    );
}

export default App;
