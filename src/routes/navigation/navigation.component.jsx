import { Fragment, useContext } from 'react';
// 4. bây giờ ta sẽ sử dụng user context tại đây
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
// 4. vẫn import cái này như ở bước 3
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
// 4. lấy currentUser, setCurrentUser từ context! nhớ rằng cứ có thay đổi của User tại Context thì gây nên re-render! làm tương tự ở sign-up là ta sẽ thấy ngay nó re-render khi user đăng nhập
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
      // 4 . phần này có ý nghĩa là nếu có user trong context, tức ng dùng đã siggn in rồi thì ta ghi là sign-out, ngc lại là sign in. tiếp tục add 1 cái sign out ở util...
            <span className='nav-link' onClick={signOutHandler}>
              {' '}
              SIGN OUT{' '}
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
