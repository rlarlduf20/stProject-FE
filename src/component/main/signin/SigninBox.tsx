import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useTokenContext } from "../../../context/tokenState";

const StyledSigninBox = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5.9375rem;
  width: 31.25rem;
  height: 34.375rem;

  & .signin_text {
    display: block;
    padding-top: 7.3125rem;
    font-weight: bold;
    font-size: 2.75rem;
    margin-bottom: 3rem;
  }
  & .input_email {
    width: 73%;
    font-size: 1.125rem;
    padding: 0.9375rem 0 0.9375rem 0.625rem;
    margin-bottom: 1.5rem;
  }
  & .input_pw {
    width: 73%;
    font-size: 1.125rem;
    padding: 0.9375rem 0 0.9375rem 0.625rem;
    margin-bottom: 1.5rem;
  }
  & .signin_button {
    border: 0.125rem solid green;
    color: green;
    background: white;
    font-weight: bold;
    font-size: 1rem;
    padding: 1.5rem 0.875rem 1.5rem 0.875rem;
    width: 75%;
  }
  & .signin_button:hover {
    color: white;
    cursor: pointer;
    background: #8fbc8f;
    border: 0.125rem solid white;
  }
  & .to_registration {
    margin-top: 1rem;
  }
`;
interface ISignType {
  email: string;
  password: string;
}
const SigninBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignType>();
  const navigate = useNavigate();
  const { setAccessToken } = useTokenContext();
  const onSubmit = async (data: ISignType) => {
    try {
      const req = await axios
        .post("http://localhost:8000/auth/login", data)
        .then((res) => res.data);
      console.log(req);
      alert("로그인 성공");
      navigate("/user");
      setAccessToken(req.access_token);
      localStorage.setItem("access_token", req.access_token);
      localStorage.setItem("refresh_token", req.refresh_token);
    } catch (e) {
      console.log(e);
      alert("이메일, 비밀번호를 확인해주세요");
    }
  };
  return (
    <StyledSigninBox onSubmit={handleSubmit(onSubmit)}>
      <p className="signin_text">로그인</p>
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="이메일"
        className="input_email"
      />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="비밀번호"
        className="input_pw"
      />
      <button className="signin_button">로그인</button>

      <p className="to_registration">
        처음 방문하셨나요?{" "}
        <Link to="/user/registration" style={{ color: "green" }}>
          신규등록
        </Link>
      </p>
    </StyledSigninBox>
  );
};

export default SigninBox;
