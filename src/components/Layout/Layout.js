import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Footer from '../Footer/Footer';
import classes from './Layout.module.css';

const layout = (props) => (
  <Aux>
    {/* Navigation */}
    <nav className={classes.nav}>Toolbar, SideDrawer, Backdrop</nav>
    {/* Main area */}
    <main>
      {props.children}
    </main>
    {/* Footer */}
    <Footer />
  </Aux>
);

export default layout;
