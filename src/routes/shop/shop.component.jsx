import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
{/*       3. ở trong shop thêm đường dẫn này */}
      <Route path=':category' element={<Category />} />
{/*       5. tạo path ntn để có link kiểu như /shop/hats */}
    </Routes>
  );
};

export default Shop;
