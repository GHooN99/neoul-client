import styled from "styled-components";
import { AppHeader } from "@layouts/components/AppHeader";

const AppLayout = () => {
  return (
    <StyledWrapper>
      <AppHeader />
    </StyledWrapper>
  );
};

export default AppLayout;

const StyledWrapper = styled.div`
  color: ${(props) => props.theme.texts.primary};
`;
