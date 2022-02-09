import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>
        This is from db component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from edit component
    </div>
);

const HelpPage = () => (
    <div>
        This is from help component
    </div>
);

const NotFoundPage = () => (
    <div>
        404
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <p>
            <NavLink to="/" activeClassName='is-active' exact={true} >Home  </NavLink>  
            <NavLink to="/create" activeClassName='is-active'>Create  </NavLink>  
            <NavLink to="/edit" activeClassName='is-active'>Edit  </NavLink>  
            <NavLink to="/help" activeClassName='is-active'>Help  </NavLink>  
        </p> 
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} /> 
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>  
        </div>
          
    </BrowserRouter>
);

export default AppRouter;