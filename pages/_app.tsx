import { useState, useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import apolloClient from '../apolloClient';
import Layout from '../components/layout';

import '../styles/globals.css';
import {
  generateRandomAlphanumericNumber,
  getCookie,
  setCookieExpiry,
} from '../helpers';

function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState({
    cartID: getCookie('cart_id'),
    userID: getCookie('taps_uuid'),
    vehicleID: getCookie('vehicle_uuid'),
    cartItems: [],
  });

  useEffect(() => {
    if (getCookie('cart_id')) {
      refetchCart();
    }
    if (getCookie('kountsdk') === undefined) {
      const kountSdk = generateRandomAlphanumericNumber(32);
      setCookieExpiry('kountsdk', kountSdk);
    }
  }, []);

  const onTransition = (location: any) => {
    const thankyouPage = getCookie('orderreciept');
    if (location.pathname.indexOf('thankyou') !== -1) {
      if (thankyouPage === undefined) {
        return false;
      }
    }
    window.scrollTo(0, 0);
  };

  const getCartItems = (items: any) => {
    setState({
      ...state,
      cartItems: items,
    });
  };

  const refetchCart = () => {
    setState({
      ...state,
      cartID: getCookie('cart_id'),
      userID: getCookie('taps_uuid'),
    });
  };

  const destroySession = () => {
    setState({
      ...state,
      cartID: undefined,
      userID: undefined,
    });
  };

  const refetchVehicle = () => {
    setState({
      ...state,
      vehicleID: getCookie('vehicle_uuid'),
    });
  };

  return (
    <ApolloProvider client={apolloClient()}>
      <Layout>
        <Component
          {...pageProps}
          cartID={state.cartID}
          userID={state.userID}
          vehicleID={state.vehicleID}
          cartItems={state.cartItems}
          refetchCart={refetchCart}
          refetchVehicle={refetchVehicle}
          destroySession={destroySession}
          getCartItems={getCartItems}
        />
      </Layout>
    </ApolloProvider>
  );
}
export default MyApp;
