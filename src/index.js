import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TestCss from "./components/testCss";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import MyNavBar from "./components/NavBar";
import MyFileAriane from "./components/fileAriane";
import MyCards from "./components/cards";
import MyFormulaire from "./components/formulaire";
import MyModal from "./components/modal";
import MyCarrousel from "./components/carrousel";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/" Component={MyCards}>
            </Route>
            <Route path="/css" Component={TestCss}>
            </Route>
            <Route path="/navbar" Component={MyNavBar}>
            </Route>
            <Route path="/ariane" Component={MyFileAriane}>
            </Route>
            <Route path="/cards" Component={MyCards}>
            </Route>
            <Route path="/forms" Component={MyFormulaire}>
            </Route>
            <Route path="/modal" Component={MyModal}>
            </Route>
            <Route path="/carousel" Component={MyCarrousel}>
            </Route>
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

