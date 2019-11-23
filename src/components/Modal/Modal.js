import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Modal.module.css';
import LightBox from '../LightBox/LightBox';

/**
 * A generic modal that displays whatever is passed in `props.children`.
 * @param {Object} props 
 */
const modal = (props) => {
  /**
   * The status of the modal points to either the 'show'
   * or the 'hide' css class based on if it's visibility is set to true or false
   */
  const status = props.visibility ? 'show' : 'hide';
  console.log(props.visibility, status);

  return (
    <Aux>
      <LightBox visibility={props.visibility} clicked={props.modalClose}></LightBox>

      <div className={`${classes.Modal} ${classes[status]}`}>
        {props.children}
      </div>
    </Aux>
  )
};

export default modal;
