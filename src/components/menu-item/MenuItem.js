import React from 'react'
import { withRouter } from 'react-router-dom'
import './MenuItem.scss'

 function MenuItem({title, imageUrl,size,linkUrl, history}) {
    return (
        <div 
            className={`menu-item ${size}`}
            onClick={()=>{
                history.push(`${linkUrl}`)
            }}
        >
            <div className="background-image"
                style={{backgroundImage : `url(${imageUrl})`}}  
            > 
                <div className="content">
                    <h1 className="title">
                        {title}
                    </h1>
                    <span className="subtitle">
                        SHOP NOWs
                    </span>
                </div>
            </div>
        </div>
    )
}
export default withRouter(MenuItem)