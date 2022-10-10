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
  height: auto;
  padding-bottom: 3.125rem;
  & .main_image {
    width: 100vw;
    max-height: 500px;
    height: 60vw;
    opacity: 0.85;
    margin-bottom: 3.125rem;
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
  top: 25vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  @media (max-width: 40.625rem) {
    top: 18vh;
  }
  @media (max-width: 25rem) {
    top: 15vh;
  }
  .main_text {
    font-size: 1.75rem;
    text-align: right;
    line-height: 2.5rem;
    margin-bottom: 1rem;
    letter-spacing: 0.125rem;
    animation: ${appearText} 1.5s;
    @media (max-width: 50rem) {
      font-size: 1.5rem;
    }
    @media (max-width: 40.625rem) {
      font-size: 1rem;
      line-height: 2rem;
    }
    @media (max-width: 30rem) {
      font-size: 0.7rem;
      line-height: 1.5rem;
    }
  }
  .dataBtn {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: green;
    cursor: pointer;
    @media (max-width: 40.625rem) {
      padding: 0.2rem 0.8rem 0.2rem 0.8rem;
      font-size: 0.5rem;
    }
    right: 0;
    padding: 0.3125rem 1.25rem 0.3125rem 1.25rem;
    border: 0.125rem solid green;
    border-radius: 3.125rem;
    animation: ${appearButton} 1.5s;
  }
  .dataBtn:hover {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    right: 0;
    padding: 0.3125rem 1.25rem 0.3125rem 1.25rem;
    border: 0.125rem solid white;
    background: #8fbc8f;
    color: white;
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
  max-width: 78.125rem;
  margin: 0 auto;
  background: white;
  padding: 3.125rem 0 3.125rem 0;
  .sub_wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .sub_box {
      display: inline-flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      & .sub_text {
        font-size: 1.5625rem;
        font-weight: bold;
        margin-right: 1.875rem;
        @media (max-width: 50rem) {
          font-size: 1.2rem;
        }
      }
      & .sub_image1 {
        width: 40vw;
        @media (max-width: 50rem) {
          width: 70vw;
        }
      }
    }

    & .sub_image2 {
      margin-top: 6.25rem;
      max-width: 50vw;
      width: 60vw;
    }
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
          <StyledLink to="/data">
            <input
              type="button"
              value="지금 바로 우리지역 환경데이터를 확인해보세요"
              className="dataBtn"
            />
          </StyledLink>
        ) : null}
      </StyledMainText>
      <StyledInnerBox>
        <div className="sub_wrapper">
          <div className="sub_box">
            <div className="sub_text">
              Environment Technology
              <br /> Sesearch Institute
              <br /> Seoultech University
            </div>
            <img className="sub_image1" src={SubImage1} alt="서브이미지1" />
          </div>
          <img className="sub_image2" src={SubImage2} alt="서브이미지2" />
        </div>
      </StyledInnerBox>
    </StyledMainBox>
  );
};

export default Main;
