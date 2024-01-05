import { useContext, Fragment } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
      // 4. cái Object.keys(1 cái hashmap) là để lọc ra các keys của hashmap như python zậy
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      // 4. như vậy, với mỗi key ta tạo ra 1 thẻ tên key, rồi ở dưới là 1 loạt các item cùng key đó
      ))}
    </Fragment>
  );
};

export default Shop;
