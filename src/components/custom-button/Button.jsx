import React from 'react';
import './button.scss';

const Button = (props) => {
   let {children, ...otherProps} = props;
   return (
      <button className="custom-button" {...otherProps}>
         {children}
      </button>
   )
}

export default Button;
