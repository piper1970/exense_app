import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import CreateExpensePage from '../components/CreateExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
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

export default AppRouter;