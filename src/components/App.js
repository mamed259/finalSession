import React from "react";
import "../App.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Posts from "./Posts";
import TodoPage from "./TodoPage";

const App = () => (

    <div className="content">
        <Router>
            <div>
                <ul className="router-list">
                    <li>
                        <Link to={'/'} className="nav-link">Todo</Link>
                    </li>
                    <li>
                        <Link to={'/posts'}>Posts</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path='/' component={TodoPage} />
                    <Route path='/posts' component={Posts} />
                </Switch>
            </div>
        </Router>
    </div>
);

export default App;
