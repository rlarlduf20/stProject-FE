import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import EmailCodeTimer from "./EmailCodeTimer";
import { useNavigate } from "react-router-dom";
import { useTokenContext } from "../../../context/tokenState";
import axios from "axios";

interface IReigsterType {
  email: string;
  password: string;
  confirmPassword: string;
  last_name: string;
  first_name: string;
  phone: string;
  address: string;
  city: string;
  gender: string;
}
const StyledLabel = styled.label`
  display: block;
  width: 15px;
  height: 25px;
  padding: 0.75rem 1rem 0.75rem 1rem;
  color: green;
  border: 0.125rem solid green;
  cursor: pointer;
`;
const RegisterFormBox = styled.form`
  max-width: 62.5rem;
  padding: 6.25rem;
  height: 35.75rem;
  margin: 20px 0 20px 0;

  @media (max-width: 51.5625rem) {
    height: auto;
    margin: 0;
    padding: 0 6.25rem 0 6.25rem;
  }
  background: white;
  input {
    border: 0.0625rem solid #e2e2e2;
    &:focus {
      outline: none;
      border: 0.0625rem solid #8fbc8f;
    }
  }
  .row1 {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-bottom: 2.875rem;
    .email {
      width: 17.8125rem;
      padding: 1.125rem 0 1.125rem 0.9375rem;
    }
    .codebtn {
      border: 0.125rem solid green;
      color: green;
      background: white;
      font-weight: bold;
      font-size: 1rem;
      width: 6rem;
    }
    .codebtn:hover {
      color: white;
      cursor: pointer;
      background: #8fbc8f;
      border: 0.125rem solid white;
    }
    .codeInput {
      padding-left: 0.9375rem;
    }
  }
  .row2 {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-bottom: 2.875rem;
    .password,
    .confirmPassword {
      width: 17.8125rem;
      padding: 1.125rem 0 1.125rem 0.9375rem;
    }
  }
  .row3 {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-bottom: 2.875rem;
    .last_name,
    .first_name {
      width: 17.8125rem;
      padding: 1.125rem 0 1.125rem 0.9375rem;
    }
  }
  .row4 {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2.875rem;
    .phone {
      width: 17.8125rem;
      padding: 1.125rem 0 1.125rem 0.9375rem;
      margin-right: 1.25rem;
    }

    input[type="radio"] {
      display: none;
    }
    input[type="radio"]:checked + ${StyledLabel} {
      color: white;
      background: #8fbc8f;
      border: 0.125rem solid white;
    }
  }
  .row5 {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-bottom: 2.875rem;
    .city,
    .address {
      width: 17.8125rem;
      padding: 1.125rem 0 1.125rem 0.9375rem;
    }
  }
  .row6 {
    display: flex;
    justify-content: center;
    & .submitbtn {
      border: 0.125rem solid green;
      color: green;
      background: white;
      font-weight: bold;
      font-size: 1rem;
      padding: 1.5rem 0.875rem 1.5rem 0.875rem;
      width: 20rem;
      @media (max-width: 51.5625rem) {
        margin-bottom: 1.875rem;
      }
    }
    & .submitbtn:hover {
      color: white;
      cursor: pointer;
      background: #8fbc8f;
      border: 0.125rem solid white;
    }
  }
`;

const RegisterBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IReigsterType>();
  const navigate = useNavigate();
  const watchEmail = watch("email");
  const watchPassword = watch("password");
  const watchConfirmPassword = watch("confirmPassword");
  const { setAccessToken } = useTokenContext();

  //이메일 코드 전송
  const [isSendEmail, setIsSendEmail] = useState<boolean>(false);
  const [btnValue, setBtnValue] = useState<string>("코드 전송");
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const clickSendEmail = async () => {
    setBtnValue("...");
    setDisabled(true);
    try {
      await axios.post(`${process.env.REACT_APP_SERVER}/auth/send-auth-mail`, {
        email: watchEmail,
      });
      setIsSendEmail(true);
      alert("이메일 코드 전송 완료");
      setDisabled(false);
    } catch (e) {
      alert("유효한 이메일을 입력하세요.");
      setBtnValue("코드 전송");
      setDisabled(false);
    }
  };

  //코드확인
  const [code, setCode] = useState<string>("");
  const onChangeCode = (e: any) => setCode(e.target.value);
  const [correctCode, setCorrectCode] = useState(false);
  //이메일 인증 완료 후 토큰 생성
  const [emailToken, setEmailToken] = useState<string>("");

  const onSubmit = async (data: IReigsterType) => {
    if (emailToken === "") return alert("이메일 인증절차를 완료해주세요");
    if (watchPassword !== watchConfirmPassword) {
      return alert("비밀번호가 서로 다릅니다.");
    }
    let header = {
      headers: {
        Authorization: `Bearer ${emailToken}`,
      },
    };
    try {
      const req = await axios
        .post(`${process.env.REACT_APP_SERVER}/user`, data, header)
        .then((res) => res.data);
      setAccessToken(req.token.access_token);
      localStorage.setItem("access_token", req.token.access_token);
      localStorage.setItem("refresh_token", req.token.refresh_token);
      alert("등록 완료");
      navigate("/");
    } catch (e) {
      console.error(e);
      alert("회원가입 실패");
    }
  };
  return (
    <RegisterFormBox onSubmit={handleSubmit(onSubmit)}>
      <div className="row1">
        <input
          {...register("email", { required: true })}
          placeholder="이메일 *"
          type="email"
          className="email"
          disabled={isSendEmail}
        />
        {isSendEmail ? (
          <>
            <input
              type="text"
              placeholder="코드입력 *"
              value={code}
              onChange={onChangeCode}
              className="codeInput"
              disabled={correctCode}
            />
            <EmailCodeTimer
              active={isSendEmail}
              toggleIsSendMail={() => setIsSendEmail(false)}
              changeValue={() => setBtnValue("코드 전송")}
              code={code}
              email={watchEmail}
              correctCode={correctCode}
              changeCorrectCode={() => setCorrectCode(true)}
              setEmailToken={(token: string) => setEmailToken(token)}
            />
          </>
        ) : (
          <input
            type="button"
            value={btnValue}
            className="codebtn"
            onClick={clickSendEmail}
            disabled={isDisabled}
          />
        )}
      </div>
      <div className="row2">
        <input
          {...register("password", { required: true })}
          placeholder="비밀번호 *"
          type="password"
          className="password"
        />
        <input
          {...register("confirmPassword", { required: true })}
          placeholder="비밀번호 확인 *"
          type="password"
          className="confirmPassword"
        />
      </div>
      <div className="row3">
        <input
          {...register("last_name", { required: true })}
          placeholder="성 *"
          type="text"
          className="last_name"
        />
        <input
          {...register("first_name", { required: true })}
          placeholder="이름 *"
          type="text"
          className="first_name"
        />
      </div>
      <div className="row4">
        <input
          {...register("phone", { required: true })}
          placeholder="전화번호 *"
          type="text"
          className="phone"
        />

        <input
          {...register("gender", { required: true })}
          type="radio"
          name="gender"
          value="male"
          id="male"
          className="gender"
        />
        <StyledLabel htmlFor="male"> 남</StyledLabel>

        <input
          {...register("gender", { required: true })}
          type="radio"
          name="gender"
          value="female"
          id="female"
          className="gender"
        />
        <StyledLabel htmlFor="female"> 여</StyledLabel>
      </div>
      <div className="row5">
        <input
          {...register("city", { required: true })}
          placeholder="거주도시 *"
          type="text"
          className="city"
        />
        <input
          {...register("address", { required: true })}
          placeholder="주소 *"
          type="text"
          className="address"
        />
      </div>
      <div className="row6">
        <button className="submitbtn">등록하기</button>
      </div>
    </RegisterFormBox>
  );
};

export default RegisterBox;
