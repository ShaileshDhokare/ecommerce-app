import React from 'react';
import './menuitem.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = (props) => {

   const {title, image, size, match} = props;
   return (
      <div className={`menu-item ${size}`} >
         <div className="background-image" style={{backgroundImage: `url(${image})`}} />
         <div className="content" onClick={() => props.history.push(`${match.url}${title}`)}>
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop Now</span>
         </div>
      </div>
   )
}

export default withRouter(MenuItem);
