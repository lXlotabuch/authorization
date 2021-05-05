import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLogin } from '../../store/reducer';
import { logout } from '../../store/middlware';
import './Header.css';

export const Header: React.FC = () => {
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const handleClick: React.MouseEventHandler = async () => {
    logout()(dispatch);
  };

  return (
    <nav className='navigation'>
      <ul className='navigation-list'>
        {!isLogin && (
          <li>
            <NavLink to='/login'>LogIn</NavLink>
          </li>
        )}
        <li>
          <NavLink to='/registration'>Registration</NavLink>
        </li>
      </ul>
      {isLogin && (
        <Button type='primary' onClick={handleClick}>
          LogOut
        </Button>
      )}
    </nav>
  );
};
