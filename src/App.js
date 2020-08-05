import React from 'react';
import './App.css';
import DoingPage from './components/DoingPage'
import {HashRouter, Route, Switch} from 'react-router-dom'

import DonePage from './components/DonePage'
import Menu from "./components/Menu";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <HashRouter>
                    <Menu/>
                    <Switch>
                        <Route exact path="/" component={DoingPage}></Route>
                        <Route exact path="/finish" component={DonePage}></Route>
                    </Switch>
                </HashRouter>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
