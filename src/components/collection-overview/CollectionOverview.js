import './CollectionOverview.scss'
import { createStructuredSelector } from "reselect";
import React from 'react'
import { connect } from 'react-redux';

import PreviewCollectoin, { } from "../preview-collection/PreviewCollectoin";
import { selectCollectionsForOverview } from '../../redux/shop/shop.selector';


function CollectionOverview({ colllections }) {
    return (
        <div className="collections-overview">
            {
                colllections.map(({ id, ...otherColections }) => (
                    <PreviewCollectoin key={id} {...otherColections} />
                ))
            }
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    colllections: selectCollectionsForOverview,
})

export default connect(mapStateToProps)(CollectionOverview);