import { useRouter } from "next/router";
import styled from "styled-components";
import { Button } from "@components/Button";
import { Typography } from "@components/Typography";

const PageError = () => {
  const router = useRouter();

  const handleReloadButtonClick = () => {
    router.reload();
  };

  return (
    <StyledWrapper>
      <span className="cry-emoji">😭</span>
      <Typography variant="p" align="center" className="info-message">
        이런...데이터를 불러오지 못했어요
      </Typography>

      <Typography variant="sub1" align="center">
        새로고침을 눌러 다시 시도해보시겠어요?
      </Typography>

      <Button
        onClick={handleReloadButtonClick}
        className="reload-button"
        size="small"
        color="transparent"
      >
        ♻️ 새로고침
      </Button>
    </StyledWrapper>
  );
};

export default PageError;

const StyledWrapper = styled.div`
  padding: 40px 0;
  .cry-emoji {
    display: block;
    font-size: 36px;
    text-align: center;
    margin-bottom: 30px;
  }
  .info-message {
    margin-bottom: 20px;
  }

  .reload-button {
    display: flex;
    margin: 30px auto 0;
  }
`;
