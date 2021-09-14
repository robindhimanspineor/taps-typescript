import { GetServerSideProps } from 'next';
import apolloClient from '../../apolloClient';
import { SKU_NEW_LISTING_QUERY } from '../../queries/routerQueries';
import SubCategoryItem from '../../components/SubCategoryType/SubCategoryItem';

import styles from '../../styles/SubCategoryType.module.css';

const Categories = ({ categoryType }: any) => {
  const renderSubCategoryItem = () => {
    return categoryType.productTypeSkuList.sku.edges.map((item: any) => (
      <SubCategoryItem key={item.node.id} product={item.node} />
    ));
  };
  return (
    <div>
      <h1>Category Type</h1>
      <div className={styles.subCategoryDirectory}>
        {renderSubCategoryItem()}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context : any) => {
  const category = context.query.category;
  const fieldTypeRequest = context.query.subcategory;
  const subcategory = context.query.subcategory;
  const vehicle = context.query.vehicle.split('-');

  const make = vehicle[0];
  const model = vehicle[1];
  const year = vehicle[2];
  const submodel = context.query.submodel;
  const engine = context.query.engine.split('-').join(' ');
  const data = await apolloClient().query({
    query: SKU_NEW_LISTING_QUERY,
    variables: {
      category,
      fieldTypeRequest,
      subcategory,
      year,
      make,
      model,
      submodel,
      engine,
      brand: '',
      brandFacet: '',
      pageNo: 1,
      partType: '',
      position: '',
      price: '',
      productType: '',
    },
  });

  return {
    props: {
      categoryType: data.data.store,
    },
  };
};

export default Categories;
