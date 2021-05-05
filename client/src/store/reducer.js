import { LOGIN, LOGOUT } from './actionType';

const initialState = {
  isLogin: false,
};

export const selectIsLogin = state => state.isLogin;

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };

    default:
      return state;
  }
};
