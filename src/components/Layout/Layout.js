import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

const layout = (props) => (
  <Aux>
    {/* Navigation */}
    <div className={classes.nav}>Toolbar, SideDrawer, Backdrop</div>
    {/* Header */}
    <header>
      <h1>Start Up</h1>
    </header>
    {/* Main area */}
    <main>
      {props.children}
    </main>
    {/* Footer */}
    <footer></footer>
  </Aux>
);

export default layout;
