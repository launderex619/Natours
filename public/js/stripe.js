/* eslint-disable */

import axios from "axios";
import { showAlert } from './alerts';

const stripe = Stripe('pk_test_rOu3BGxhuloo11LgfoJxYQ7p00I1PVEXhw');

export const bookTour = async tourId => {
  try {
    
    // get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
      );
      // console.log(session);
      // Create checkout form + charge credit card
      await stripe.redirectToCheckout({
        sessionId: session.data.session.id
      })
  } catch (error) {
    console.error(error);
    showAlert('error', error);
  }
};