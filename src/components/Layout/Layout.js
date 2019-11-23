import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Footer from '../Footer/Footer';
import classes from './Layout.module.css';
import Modal from '../Modal/Modal';

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

    {/* Modal */}
    <Modal />
  </Aux>
);

export default layout;
