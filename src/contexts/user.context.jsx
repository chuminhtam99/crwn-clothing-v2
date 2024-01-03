import { createContext, useState, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // 2. ta cho 1 cái component did mount (tuy là context nhưng vẫn chạy như các component khác). nếu onAuthStateChangedListener((user) => {
      // if (user) {
      //   log(user);
      // } thì ta vẫn sẽ nhận đc user cũ, dù nó có sign in hay out, vì fire base luôn giữ kết nối vs cái đã đăng nhập và luôn mark nó là authentication => thêm signOutUser tại firebase.util .... lằng nhằng => túm lại là nhờ thằng này (của firebase) sẽ nghe ngóng mọi động tĩnh in/out, dồn lại 1 chỗ này, ko cần phải dùng useContext mỗi file 1 ít như bài trc nữa! 
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
