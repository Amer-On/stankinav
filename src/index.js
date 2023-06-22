import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import reducer from "./reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.overflow = "hidden"

const store = createStore(reducer)

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
);
