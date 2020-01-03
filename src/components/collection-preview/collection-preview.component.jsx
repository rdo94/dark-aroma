import React from 'react';

import { CollectionPreviewContainer, CollectionPreviewTitle, CollectionPreviewItem } from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
        <CollectionPreviewItem>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
            }
        </CollectionPreviewItem>
    </CollectionPreviewContainer>
);

export default CollectionPreview;