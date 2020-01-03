import React from 'react';

import { CollectionPreviewContainer, Preview } from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';


const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <h1 className="title">{title.toUpperCase()}</h1>
        <Preview>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
            }
        </Preview>
    </CollectionPreviewContainer>
);

export default CollectionPreview;