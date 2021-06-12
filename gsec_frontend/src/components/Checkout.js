import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from "./CheckoutForm";

const stripe = loadStripe('pk_test_51Ixw88AGzBGboXkXDxsU9pewZM84jojVcrocs572j1MLFuaPHiokQjnztTk4dXEGYVJWSd8HIB7N9LSyelr8s5sI00GP6kIdBW');

export default ({ cart }) => (
  <div>
    <Elements stripe={stripe}>
      <CheckoutForm cart={cart} />
    </Elements>
  </div>
)

