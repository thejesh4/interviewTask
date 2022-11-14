import {
  getToken
} from '../utils';

const rootReducer = (state= {
  isLogin: false
}, action) => {
  const isLogin = getToken() ? true : action?.isAuth?.isLogin;
  switch (action.type) {
    case 'login':
        return { ...state, isLogin };
    case 'loginout':
        return { ...state, isLogin };
    default:
        return { ...state, isLogin };
  }
}

export default rootReducer;
