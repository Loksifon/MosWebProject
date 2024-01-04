import React, { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, SCHOOL_ROUTE, USER_ROUTE, PROFILE_ROUTE } from '@/config/config';
import { AuthContext } from '@/utils/context/AuthContext';
import { Button } from '@/components/UI';
import { UlStyled, NavLinkStyled } from './Navbar.styles';


export const Navbar: FC = () => {

	const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <header>
      <nav>
        <UlStyled>
          <li>
            <NavLinkStyled to={HOME_ROUTE}>Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={SCHOOL_ROUTE}>School</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={USER_ROUTE}>User</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={PROFILE_ROUTE}>Profile</NavLinkStyled>
          </li>
          <li>
            <Button onClick={handleAuth}>{isAuth ? 'Logout' : 'Login'}</Button>
          </li>
        </UlStyled>
      </nav>
    </header>
  );
};