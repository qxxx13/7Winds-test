import React from 'react';

import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { SideBar } from './components/SideBar/SideBar';
import { TopBar } from './components/TopBar/TopBar';
import { SMRPage } from './pages/SMRPage/SMRPage';

export const App = () => {
    return (
        <div>
            <TopBar />
            <SideBar />
            <Breadcrumbs />
            <SMRPage />
        </div>
    );
};
