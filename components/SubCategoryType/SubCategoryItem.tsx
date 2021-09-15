import { useRouter } from 'next/router';

import styles from '../../styles/SubCategoryType.module.css';
import { addItem } from '../../utils/mutations';
import { replaceCookie } from '../../helpers';

const SubCategoryItem = ({ product, ...otherProps }: any) => {
  const router = useRouter();

  const handleAddToCartClick = async (partNumber: any) => {
    addItem(partNumber, 1, 'add_item', (items: any) => {
      if (items.is_new === true) {
        replaceCookie('cart_id', items.cart_id);
      }
      if (items.cart_entry.length === 1) {
        otherProps.refetchCart();
      }

      // router.push('/cart');
      // const id = `cartentry_${partNumber}`;
      // const fadeTarget: any = document.getElementById(id);
      // fadeTarget.style.display = 'block';
      // // fadeTarget.style.transition = 'opacity .25s ease-in-out';
      // const fadeEffect = setInterval(() => {
      //   // if (!fadeTarget.style.display) {
      //   //   fadeTarget.style.display = 'block';
      //   // }
      //   if (fadeTarget.style.display === 'block') {
      //     fadeTarget.style.display = 'none';
      //   } else {
      //     clearInterval(fadeEffect);
      //   }
      // }, 1000);
    });
  };
  return (
    <div className={styles.productBox}>
      <div className={styles.productImage}>
        <div className={styles.imageItem}>
          <img
            src={product.ImageURL}
            alt={product.Title}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.productContent}>
        <h2 className={styles.productTitle}>{product.Title}</h2>
        <p className={styles.brandPart}>
          <span>
            by <strong>{product.brand}</strong>
          </span>
          <span>
            Part Number <strong>{product.PartNumber}</strong>
          </span>
        </p>
      </div>
      <div className={styles.productControl}>
        <div className={styles.priceGrid}>
          ${product.price}
          <span
            className={`${styles.avail} ${
              product.Availability === 'Y' ? styles.inStock : styles.outOfStock
            }`}
          >
            {product.Availability === 'Y' ? 'In stock' : 'Out Of Stock'}
          </span>
        </div>
        <div
          className={
            product.Availability === 'Y' ? styles.enable : styles.disable
          }
        >
          <button
            className={`${styles.buttonRedSolid} ${
              product.Availability === 'Y' ? styles.enable : styles.disable
            }`}
            disabled={product.Availability === 'Y' ? false : true}
            onClick={() => handleAddToCartClick(product.primary)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryItem;
