import React from 'react';
import classes from './LightBox.module.css';

const lightbox = (props) => {
  const box = (<div
    className={classes.LightBox}
    onClick={props.clicked}>{props.children}</div>)

  return props.visibility ? box : null;
}

export default lightbox;
