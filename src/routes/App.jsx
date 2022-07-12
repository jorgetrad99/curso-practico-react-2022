import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../styles/global.css';
import Login from '../containers/Login';
import Layout from '../containers/Layuot';
import RecoveryPassword from '../containers/RecoveryPassword';

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/recovery-password" component={ RecoveryPassword } />
                    <Route component={ NotFound } />
                </Layout>
            </Switch>
            <Layout>
                <Login />
                <RecoveryPassword />
            </Layout>

        </BrowserRouter>
    );
}

export default App;