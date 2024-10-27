import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const URL = '/products';

export const loader = async ({ request }) => {
  const response = await customFetch(URL);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
