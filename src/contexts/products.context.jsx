import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';
// 4. thêm
import SHOP_DATA from '../shop-data.js';
// 2. chỉnh
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
// 2. chỉnh
  // useEffect(() => {
  //   addCollectionAndDocuments('collections', SHOP_DATA);
  // 4. thêm component did mount để có collection tên collection , chứa shop data như miêu tả ở bước 5. chỗ này chỉ là check thui
  // }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
