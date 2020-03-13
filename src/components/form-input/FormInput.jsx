import React from 'react';
import './forminput.scss';

const FormInput = (props) => {
   let {handleChange, label, ...otherProps} = props;
   return (
      <div className="group">
         <input className="form-input" onChange={handleChange} {...otherProps} />
         {label && (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)}
      </div>
   )
}

export default FormInput;
