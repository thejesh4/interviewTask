import {
  setToken,
  deleteToken
} from '../utils';

export const loginAction = ({ token }) => {
  const isLogin = setToken(token);
  return {
      type: 'login',
      isAuth: { isLogin }
  }
}

export const logoutAction = () => {
  const isLogin = deleteToken();
  return {
      type: 'loginout',
      isAuth: { isLogin: !isLogin }
  }
};
