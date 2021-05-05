import { logInAction, logOutAction } from './actionCreator';

export const logIn = (values, history) => async dispatch => {
  const res = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
  if (res.status === 200) {
    dispatch(logInAction());
    history.push('/');
  }
};

export const logout = () => async dispatch => {
  const res = await fetch('/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (res.status === 200) {
    dispatch(logOutAction());
  }
};

export const registration = async (values, history) => {
  const res = await fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
  if (res.status === 200) {
    history.push('/login');
  }
};
