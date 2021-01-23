import React from 'react';
import CollectionOverview from '../../../components/collection-overview/CollectionOverview';
import './Shop.scss';
import { Route } from 'react-router-dom'
import Collection from '../../../pages/collection/Collection';



function Shop({ match }) {
    return (
        <div className="shop-page">
            {/* <CollectionOverview /> */}
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route exact path={`${match.path}/:CollectionId`} component={Collection} />
        </div>
    )
}

export default Shop;