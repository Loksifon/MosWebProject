import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

interface ToggleSwitchProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.span`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: ${({ theme }) => theme.colors.white};
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: ${({ theme }) => theme.colors.primary};

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  toggleTheme,
  isDarkTheme,
}) => {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <Label>
      <span>{isToggled ? "Light" : "Dark"}</span>
      <Input checked={isToggled} type="checkbox" onChange={onToggle} />
      <Switch />
    </Label>
  );
};
