import React from 'react';
import classes from './Modal.module.css';

/**
 * A generic modal that displays whatever is passed in `props.children`.
 * @param {Object} props 
 */
const modal = (props) => (
  <div className={classes.Modal}>
    {props.children}
  </div>
);

export default modal;
