import { createContext, useState } from "react";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  // 1. viết code như trên, mục đích là cho những node thuộc children có đc truyền access context, xem tiếp tại index.js
};
