import React from 'react'
import { useStripe, useElement, CardElement } from '@stripe/react-stripe-js';

export default () => {
  const stripe = useStripe();
  // const elements = useElement();

  const handleSubmit = (event) => {
    console.log('HandleSubmit', event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={!stripe}>Buy it</button>
    </form>
  )

}
