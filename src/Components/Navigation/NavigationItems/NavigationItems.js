import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <div className={classes.NavigationItems}>
        <ul>
            <NavigationItem link="/" active >Checkout</NavigationItem>
            <NavigationItem link="/"  >Burger Builder</NavigationItem>
        </ul>
    </div>
);

export default navigationItems;