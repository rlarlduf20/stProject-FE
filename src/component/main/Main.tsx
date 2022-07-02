import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import MainImage from "../../image/envl.png";
import SubImage1 from "../../image/envp.png";
import SubImage2 from "../../image/s.jpg";

const StyledMainBox = styled.main`
  position: relative;
  margin-top: 5.9375rem;
  background: #f2f2f2;
  height: 95.625rem;
  & .main_image {
    width: 100vw;
    height: 500px;
    opacity: 0.85;
  }
`;
const appearText = keyframes`
  0% {
    margin-top: 1.25rem;
    opacity: 0;
  }
  100% {
    opacity: 1;

  }
`;
const appearButton = keyframes`
  0% {
    margin-right: 1.25rem;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const StyledMainText = styled.div`
  position: absolute;
  top: 6.5625rem;
  right: 31.25rem;
  .main_text {
    font-size: 1.75rem;
    text-align: right;
    line-height: 2.5rem;
    letter-spacing: 0.125rem;
    animation: ${appearText} 1.5s;
  }
  button {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    right: 0;
    padding: 0.3125rem 1.25rem 0.3125rem 1.25rem;
    border: 0.125rem solid green;
    border-radius: 3.125rem;
    animation: ${appearButton} 1.5s;
  }
  button:hover {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    right: 0;
    padding: 0.3125rem 1.25rem 0.3125rem 1.25rem;
    border: 0.125rem solid white;
    background: #8fbc8f;
    border-radius: 3.125rem;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  color: green;
  &:hover {
    color: white;
  }
`;

const StyledInnerBox = styled.div`
  position: relative;
  width: 78.125rem;
  margin: 0 auto;
  background: white;
  padding: 3.125rem 0 3.125rem 0;
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  & p {
    font-size: 1.5625rem;
    font-weight: bold;
    margin-right: 1.875rem;
  }
  & .sub_image1 {
  }
  & .sub_image2 {
    margin-top: 6.25rem;
  }
`;
const Main = () => {
  const [isTextLoading, setIsTextLoading] = useState<boolean>(false);
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  useEffect(() => {
    let textTimer = setTimeout(() => setIsTextLoading(true), 500);
    return () => {
      clearTimeout(textTimer);
    };
  }, []);
  useEffect(() => {
    let buttonTimer = setTimeout(() => setIsButtonLoading(true), 1500);
    return () => {
      clearTimeout(buttonTimer);
    };
  }, []);
  return (
    <StyledMainBox>
      <img className="main_image" src={MainImage} alt="메인이미지" />
      <StyledMainText>
        {isTextLoading ? (
          <p className="main_text">
            이 땅은 모든 사람의 필요를 <br />
            충족시키기에 충분하지만
            <br />
            모든 사람의 욕심을 충족시키지는 못합니다.
            <br />
            -Mahatma Gandhi
          </p>
        ) : null}
        {isButtonLoading ? (
          <button>
            <StyledLink to="/data">
              지금 바로 우리지역 환경데이터를 확인해보세요
            </StyledLink>
          </button>
        ) : null}
      </StyledMainText>
      <StyledInnerBox>
        <p>
          Environment Technology
          <br /> Sesearch Institute
          <br /> Seoultech University
        </p>
        <img className="sub_image1" src={SubImage1} alt="서브이미지1" />
        <img className="sub_image2" src={SubImage2} alt="서브이미지2" />
      </StyledInnerBox>
    </StyledMainBox>
  );
};

export default Main;
