import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Profile from "./Profile";
import Header from "./Header";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
