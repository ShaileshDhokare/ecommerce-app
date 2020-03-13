import React from 'react';
import './button.scss';

const Button = (props) => {
   let {children, isGoogleSignin, ...otherProps} = props;
   return (
      <button className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
         {children}
      </button>
   )
}

export default Button;
