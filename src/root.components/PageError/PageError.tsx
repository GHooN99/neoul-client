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
      <span className="cry-emoji">๐ญ</span>
      <Typography variant="p" align="center" className="info-message">
        ์ด๋ฐ...๋ฐ์ดํฐ๋ฅผ ๋ถ๋ฌ์ค์ง ๋ชปํ์ด์
      </Typography>

      <Typography variant="sub1" align="center">
        ์๋ก๊ณ ์นจ์ ๋๋ฌ ๋ค์ ์๋ํด๋ณด์๊ฒ ์ด์?
      </Typography>

      <Button
        onClick={handleReloadButtonClick}
        className="reload-button"
        size="small"
        color="transparent"
      >
        โป๏ธ ์๋ก๊ณ ์นจ
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
