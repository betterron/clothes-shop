import './CustomButton.scss'
import React from 'react'

export default function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
    return (
        <button className={` ${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''}  custom-button `} {...otherProps}>
            {children}
        </button>
    )
}
