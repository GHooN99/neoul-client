import Link from "next/link";
import type { FormEvent } from "react";
import styled from "styled-components";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Typography } from "@components/Typography";
import { useJoinMutation } from "@features/auth/hooks/useJoinMutation";
import {
  EMAIL_VALID_PATTERN,
  PASSWORD_MIN_LENGTH,
} from "@features/auth/libs/constants/inputRules";
import { useBoolean } from "@hooks/useBoolean";
import { useInput } from "@hooks/useInput";
import { PagePath } from "@libs/constants/pagePath";

/**
 * ### 회원가입 폼 컴포넌트
 *
 * - 이메일 입력 인풋
 *   - 이메일 형식이 맞는지 체크
 *   - 이메일 형식이 아니면 에러메시지 출력 (첫 submit엔 유효성 체크 X , 이후 실시간 체크)
 *
 * - 비밀번호 입력 인풋
 *   - 비밀번호는 8자 이상입력
 *   - 8자 이하일시 에러메시지 출력 (첫 submit엔 유효성 체크 X ,이후 실시간 체크 )
 *
 * - 비밀번호 확인 입력 인풋
 *   - 입력한 비밀번호와 같게 입력
 *   - 입력한 비밀번호와 일치하지 않으면 에러메시지 출력 (첫 submit엔 유효성 체크 X ,이후 실시간 체크 )
 *
 * - 회원가입 버튼
 *   - 클릭시 form submit 이벤트 발생
 *   - 첫 sumbit 일시 실시간 validation 시작
 *   - 모든 조건이 맞으면 로그인 mutation 실행
 *   - 모든 인풋 조건이 만족하지 않으면 disabled
 *   - 로딩중일 시 로딩 스피너 출력
 *   - 회원가입 완료시 로그인 페이지로 이동
 *   - 회원가입 실패시 토스트 메시지 출력
 */
const JoinForm = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [passwordConfirm, setPasswordConfirm] = useInput("");

  const joinMutation = useJoinMutation();

  const { value: isFirstSubmit, setFalse: setFirstSubmitFalse } =
    useBoolean(true);

  const isMutationLoading = joinMutation.isLoading;

  const isValidEmail = EMAIL_VALID_PATTERN.test(email);
  const isValidPassword = password.length >= PASSWORD_MIN_LENGTH;
  const isValidConfirmPassword = password === passwordConfirm;

  const isValidInputs =
    isValidEmail && isValidPassword && isValidConfirmPassword;
  const isSubmitButtonDisable = !isValidInputs || isMutationLoading;

  const handleJoinFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFirstSubmit) {
      setFirstSubmitFalse();
    }

    if (!isValidInputs) {
      return;
    }

    joinMutation.mutate({
      email,
      password,
    });
  };

  return (
    <StyledFormWrapper noValidate onSubmit={handleJoinFormSubmit}>
      <Input
        className="email-input"
        onChange={setEmail}
        value={email}
        hasError={!isFirstSubmit && !isValidEmail}
        errorMessage="올바른 이메일 형식을 입력해주세요."
        fullWidth
        type="email"
        placeholder="이메일 (example@mail.com)"
      />
      <Input
        className="password-input"
        onChange={setPassword}
        value={password}
        hasError={!isFirstSubmit && !isValidPassword}
        errorMessage="비밀번호는 최소 8자 이상으로 입력해주세요. "
        fullWidth
        type="password"
        placeholder="비밀번호 (8자 이상)"
      />
      <Input
        className="password-input"
        onChange={setPasswordConfirm}
        value={passwordConfirm}
        hasError={!isFirstSubmit && !isValidConfirmPassword}
        errorMessage="비밀번호가 일치하지 않습니다."
        fullWidth
        type="password"
        placeholder="비밀번호 재확인"
      />

      <Typography align="right" variant="sub1" className="join-message">
        이미 계정이 존재하나요? <Link href={PagePath.LOGIN}>로그인</Link>
      </Typography>

      <Button
        className="submit-button"
        type="submit"
        fullWidth
        disabled={!isFirstSubmit && isSubmitButtonDisable}
        loading={isMutationLoading}
      >
        회원가입
      </Button>
    </StyledFormWrapper>
  );
};

export default JoinForm;

const StyledFormWrapper = styled.form`
  .email-input,
  .password-input {
    margin-bottom: 25px;
  }

  .join-message {
    margin-top: 34px;
    margin-right: 13px;
  }

  .submit-button {
    margin-top: 60px;
  }
`;
