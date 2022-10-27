import type { ReactNode } from "react";
import styled from "styled-components";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default AppLayout;

const StyledWrapper = styled.main`
  touch-action: none;
  margin: 0 auto;
  max-width: 600px;
  height: 100%;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.backgrounds.base};
`;
