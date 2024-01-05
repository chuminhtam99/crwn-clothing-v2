import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';
// 3. import cái này
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const categoryMap = await getCategoriesAndDocuments('categories');
    console.log(categoryMap);
  }, []);
  // 3. lấy được thành công các item từ ngay component did mount

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
