import React, { useEffect, useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

import { formatPrice } from './../utils/format'

const CARD_STYLES = {
  base: {
    padding: '24ox 12px',
    fontSize: '16px'
  }
}

export default ({ cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [token, setToken] = useState(null);
  const [total, setTotal] = useState('loading');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('HandleSubmit', event);
    const result = await stripe.confirmCardPayment(token, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    })
    console.log('handleSubmit result', result);

  }

  useEffect(() => {
    const loadToken = async () => {
      const response = await fetch('http://localhost:1337/orders/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cart: cart.map(product => (
            { ...product, ...{ id: product.strapiId } }
          ))
        })
      })
      const data = await response.json()

      console.log('loadToken data', data);

      setToken(data.client_secret)
      setTotal(data.amount);
    }

    loadToken();
  }, [cart])

  if (token) {
    return (
      <div style={{ margin: '24px 0' }}>
        <h3>Total: {formatPrice(total)}</h3>
        <form
          onSubmit={handleSubmit}

        >
          <CardElement options={CARD_STYLES} />
          <button disabled={!stripe}>Buy it</button>
        </form>
      </div>
    )
  } else {
    return (
      <p>loading...</p>
    )
  }

}
