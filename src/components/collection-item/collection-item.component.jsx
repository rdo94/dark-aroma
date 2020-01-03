import React from 'react';

import { CollectionItemContainer, ItemImageContainer, ItemDescription} from './collection-item.styles';

const CollectionItem = ({ item: {name, imageUrl, price} }) => (
    <CollectionItemContainer>
        <ItemImageContainer>
            <img className='collection-image' src={imageUrl} />
        </ItemImageContainer>
        <ItemDescription>
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </ItemDescription>
        </CollectionItemContainer>
);

export default CollectionItem;