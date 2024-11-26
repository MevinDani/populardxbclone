// components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css'

const LayOut = () => {
    return (
        <div className='LayOutStyle'>

            <Outlet />
        </div>
    );
};


export default LayOut