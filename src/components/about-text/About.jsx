import React from 'react';
import './about.css';

export const About = ({ children ,titre}) => { 
  return (
    <div>
      <h2 className='about-titre'>{titre}<hr className="about-separator" /></h2>
      <p>{children}</p> 
    </div>
  );
}
