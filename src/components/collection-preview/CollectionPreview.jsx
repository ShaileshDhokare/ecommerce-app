import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './collectionpreview.scss';

const CollectionPreview = (props) => {
   const {title, items} = props;
   return (
      <div className="collection-preview">
         <h1 className="title">{title.toUpperCase()}</h1>
         <div className="preview">
            {items.filter((item, index) => index < 4).map(({id, ...otherItemProps}) => (
               <CollectionItem key={id} {...otherItemProps} />
            ))}
         </div>
      </div>
   )
}

export default CollectionPreview;
