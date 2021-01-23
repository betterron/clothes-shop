import React from 'react'
import { Link } from 'react-router-dom'
import CollectionItem from '../collectionItem/CollectionItem'
import './PreviewCollection.scss'

export default function PreviewCollectoin({ title, items, routeName }) {
    return (
        <div className="collection-preview">
            <h1 className="title">
                <Link to={`/shop/${routeName}`}>
                    {title.toUpperCase()}
                </Link>
            </h1>
            <div className="preview">
                {
                    items.filter((item, index) => index < 4).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}
