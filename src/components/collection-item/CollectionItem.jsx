import React from 'react';
import './collectionitem.scss';

const CollectionItem = (props) => {
   let { id, name, price, imageUrl } = props;
   return (
      <div className="collection-item">
         <div className="collection-image" style={{backgroundImage: `url(${imageUrl})`}} />
         <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
         </div>
      </div>
   )
}

export default CollectionItem;
