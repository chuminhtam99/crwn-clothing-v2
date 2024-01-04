import { createContext, useState } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
// 3.3. tìm xem item đang add có trong cart hay chưa? nếu có thì tăng quantity, ko thì thêm với vs quantity = 1, sau đó return lại tất cả items sau khi đã add
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    // 3.3.1. ở đây chỗ hàm map có ý nghĩa như sau: khi ta cho loop qua tất cả các item trong cartItems, nếu trùng id với cái nào thì cái item đó 
    // trong cart phải có quantity + 1, ko trùng thì thôi, để nguyên đó; và return này cho ra 1 dãy cartItems (với item đc thay đổi)
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
  // 3.3.2. ở đây do ko có item nào trùng nên cứ thế return ra mảng !
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  // 3.1. bình thường ta sẽ lưu những cartItem ntn, nhưng với do khi ta click vào thì sẽ ko setCartItems mà chỉ thêm vào => cần 1 hàm khác là addItemToCart 
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));
// 3.2 . addItemToCart sẽ là 1 hàm thuôc context, nó nhận 1 data của 1 product bất kì, và từ đó nó set lại các items trong cart với hàm addCartItem ở trên
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
