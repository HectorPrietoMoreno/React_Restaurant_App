import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import MainPage from './pages/MainPage/MainPage';
import MainPage2 from './pages/MainPage2/MainPage2';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">MainPage</Link>
                </li>
                <li>
                    <Link to="/2">MainPage2</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/2" component={MainPage2} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
