import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

// Component Imports
import Header from '../components/Header';
import Dashboard from '../components/ExpenseDashboardPage';
import Create from '../components/AddExpensePage';
import Edit from '../components/EditExpensePage';
import Help from '../components/HelpPage';
import NotFound from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} /> 
                <Route path="/create" component={Create} />
                <Route path="/edit" component={Edit} />
                <Route path="/help" component={Help} />
            <Route component={NotFound} />
        </Switch>  
        </div>
          
    </BrowserRouter>
);

export default AppRouter;