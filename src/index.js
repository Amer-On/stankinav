import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.overflow = "hidden"

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
        </Routes>
    </BrowserRouter>
);
