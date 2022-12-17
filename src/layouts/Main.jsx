import React from 'react';
import { Outlet } from 'react-router-dom';
import Head from '../components/Head';
import Header from '../components/Header';

const Main = () => {
    return (
        <div>
            <Head/>
            {/* <Header /> */}
            <Outlet/>
        </div>
    );
};

export default Main;