import './Collection.scss'
import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import CollectionItem from "../../components/collectionItem/CollectionItem";

function Collection({ collection }) {
    console.log(collection);
    const { title, items } = collection
    return (
        <div className="collection-page">
            <h2 className="title"> {title} </h2>
            <div className="items">
                {items.map(item => (<CollectionItem item={item} />))}
            </div>
            {/* {collection.map()} */}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.CollectionId)(state)
    }
}

export default connect(mapStateToProps)(Collection)