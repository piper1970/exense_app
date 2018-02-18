import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Link, NavLink, Route} from 'react-router-dom';
import 'normalize-css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from the top of the world!
    </div>
);

const CreateExpensePage = () => (
    <div>
        This is the create page!
    </div>
);

const EditExpensePage = () => (
    <div>
        This is the edit page!
    </div>
);

const HelpPage = () => (
    <div>
        This is the help page!
    </div>
);

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense Page</NavLink>
        <NavLink to="/edit" activeClassName="is-active" exact={true}>Edit Expense Page</NavLink>
        <NavLink to="/help" activeClassName="is-active" exact={true}>Help Page</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route 
                    path = "/"
                    component = {ExpenseDashboardPage}
                    exact={true}
                />
                <Route 
                    path = "/create"
                    component = {CreateExpensePage}
                />
                <Route 
                    path = "/edit"
                    component ={EditExpensePage}
                />
                <Route 
                    path = "/help"
                    component ={HelpPage}
                />
                <Route 
                    path = "/help"
                    component ={HelpPage}
                />
                <Route
                    component ={NotFoundPage}
                />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
