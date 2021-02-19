import React from 'react';
import Sidebar from "../components/Sidebar";
import './main-layout.scss';
import './responsive.scss';

// @ts-ignore
const MainLayout = ({children}) => {
    return (
        <div className='main-layout d_grid'>
            <Sidebar/>
            <div className='content'>{children}</div>
        </div>
    )
}

export default MainLayout;