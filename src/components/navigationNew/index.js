import React from 'react';
import DesktopNavigation from './navigationDesktop';
import MobileNavigation from './navigationMobile';
import { subcategories } from './navigationData';
import './navigationStyles.css';

const Navigation = () => {
    return (
        <>
            <DesktopNavigation subcategories={subcategories} />
            <MobileNavigation subcategories={subcategories} />
        </>
    );
};

export default Navigation;