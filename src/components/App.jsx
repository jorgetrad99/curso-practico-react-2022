import React from 'react';
import '../styles/global.css';
import Login from '../containers/Login';
import Layout from '../containers/Layuot';

const App = () => {
    return(
        <Layout>
            <Login />
        </Layout>
    );
}

export default App;