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
  margin: 0 auto;
  max-width: 600px;
  min-height: 100vh;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.backgrounds.base};
`;
