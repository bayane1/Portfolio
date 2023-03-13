import React from 'react';
import classes from '../../styles/Subtitle.module.css';
const SectionSubtitle = (props) => {
  return <h1 className={`${classes.section__subtitle}`}> {props.subtitle}</h1>;
};

export default SectionSubtitle;
