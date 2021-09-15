import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { getCookie } from '../../helpers';
import CART_QUERY from '../../queries/cartQuery';
import styles from '../../styles/Navbar.module.css';

const Navbar = ({ ...otherProps }: any) => {
  const [getQuery, { data }] = useLazyQuery(CART_QUERY, {});

  useEffect(() => {
    getQuery({
      variables: {
        cart_id: getCookie('cart_id'),
        operation: 'view_cart',
        user_id: getCookie('taps_uuid'),
        zip_code: '12345',
      },
    });
  }, [otherProps.cartItems.totalNumberOfItems]);

  return (
    <nav className={styles.navbar}>
      Auto Parts
      <div className={styles.rightContainer}>
        {otherProps.cartItems.totalNumberOfItems
          ? otherProps.cartItems.totalNumberOfItems
          : data?.store?.outerCart?.cart?.totalNumberOfItems}
        Items
      </div>
    </nav>
  );
};

export default Navbar;
