import type { ReactNode } from "react";
import styled from "styled-components";

interface AppHeaderProps {
  children: ReactNode;
}

const AppHeader = ({ children }: AppHeaderProps) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default AppHeader;

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  padding: 24px;
  width: 100%;
  height: 50px;

  font-size: ${({ theme }) => theme.fontSize.h3};
  color: ${({ theme }) => theme.texts.main};
`;
