import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { getCookie } from '../../helpers';
import CART_QUERY from '../../queries/cartQuery';
import styles from '../../styles/Navbar.module.css';

const Navbar = ({ items }: any) => {
  const { data, refetch } = useQuery(CART_QUERY, {
    variables: {
      cart_id: getCookie('cart_id'),
      operation: 'view_cart',
      user_id: getCookie('taps_uuid'),
      zip_code: '12345',
    },
  });

  return (
    <nav className={styles.navbar}>
      Auto Parts
      <div className={styles.rightContainer}>
        {data?.store?.outerCart?.cart?.totalNumberOfItems
          ? data?.store?.outerCart?.cart?.totalNumberOfItems
          : ''}{' '}
        Items
      </div>
    </nav>
  );
};

export default Navbar;
