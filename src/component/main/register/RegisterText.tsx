import React from "react";
import styled from "styled-components";

const StyledRegisterText = styled.div`
  height: 12.5rem;
  text-align: center;
  h1 {
    display: block;
    padding: 2rem;
    font-size: 2.25rem;
    @media (max-width: 37.5rem) {
      font-size: 2rem;
    }
    font-weight: bold;
  }
  p {
    display: block;
    padding: 1rem;
    line-height: 1.875rem;
    @media (max-width: 37.5rem) {
      font-size: 0.875rem;
    }
  }
`;
const RegisterText = () => {
  return (
    <StyledRegisterText>
      <h1>신규사용자 등록</h1>
      <p>
        * 표시는 필수 입력사항입니다.
        <br />
        이메일인증절차가 있습니다. 유효한 이메일을 사용해주세요.
      </p>
    </StyledRegisterText>
  );
};

export default RegisterText;
