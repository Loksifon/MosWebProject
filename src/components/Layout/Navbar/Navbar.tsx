import React, { FC, useContext, useState } from "react";
import {
  HOME_ROUTE,
  SCHOOL_ROUTE,
  USER_ROUTE,
  PROFILE_ROUTE,
	FORM_ROUTE
} from "@/config/config";
import { AuthContext } from "@/utils/context/AuthContext";
import { Button } from "@/components/UI";
import { NavLinkStyled } from "./Navbar.styles";
import { Container, Flex, FlexUl } from "../index";
import { ToggleSwitch } from "@/components/UI";

interface IProps {
  toggleTheme: () => void;
}

export const Navbar: FC<IProps> = ({ toggleTheme }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <header>
      <Container>
        <Flex align="center" justify="space-between">
          <nav>
            <FlexUl gap="1.5rem">
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
                <NavLinkStyled to={FORM_ROUTE}>Form</NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to={PROFILE_ROUTE}>Profile</NavLinkStyled>
              </li>
            </FlexUl>
          </nav>
          <Flex gap="1.5rem">
            <ToggleSwitch toggleTheme={toggleTheme} />
            <Button Button onClick={handleAuth}>
              {isAuth ? "Logout" : "Login"}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};
