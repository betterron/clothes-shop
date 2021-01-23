import React from 'react'
import StripeCheckout from "react-stripe-checkout";

export default function StripeButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ICFfuHk1swWa5rPy77hsICeTHeAk9gmS3SQ88auxDqRDn1Amu41smntcJ22MqgEGReyvBE2Bxo0yllNfpth063O00FavAtndl'
    const onToken = (token) => {
        console.log(123123);
    }
    return (<StripeCheckout
        label='Pay Now'
        name='CRWN Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
    )
}
