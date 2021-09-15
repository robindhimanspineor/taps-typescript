import { getCookie, removeDot, replaceCookie, setCookie } from '../helpers';
import apolloClient from '../apolloClient';
import { REMOVE_FROM_CART_MUTATION } from '../mutation/RemoveFromCart';

export const addItem = async (
  product: any,
  quantity: any,
  operation: string,
  callback?: any
) => {
  const authToken =
    typeof window !== 'undefined' && localStorage
      ? localStorage.getItem('auth_token')
      : null;
  const customerId =
    typeof window !== 'undefined' &&
    localStorage &&
    localStorage.getItem('customerId') !== null
      ? localStorage.getItem('customerId')
      : '';

  if (authToken && getCookie('taps_uuid') === undefined) {
    replaceCookie('taps_uuid', customerId);
  }
  if (getCookie('cart_id') === undefined) {
    setCookie('cart_id');
  }
  if (getCookie('taps_uuid') === undefined && authToken === null) {
    setCookie('taps_uuid');
  }

  const input = {
    cart_id: getCookie('cart_id'),
    user_id: getCookie('taps_uuid'),
    sku_id: removeDot(product),
    quantity,
    operation: 'add_item',
    zip_code: '12345',
  };

  const response = await apolloClient().mutate({
    mutation: REMOVE_FROM_CART_MUTATION,
    variables: { input },
  });

  if (operation === 'add_item' && callback) {
    callback(response.data.cartOperation.cart);
  }
  if (operation === 'remove_item' && callback) {
    if (response.data.cartOperation.cart.totalNumberOfItems < 1) {
      callback(response.data.cartOperation.cart.totalNumberOfItems);
    }
  }
};
