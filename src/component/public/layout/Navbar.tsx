import React, { useState, useRef, useEffect, SyntheticEvent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Mark from "../../../image/seoultechMark.jpeg";

const StyledNav = styled.nav`
  position: relative;
  width: 78.125rem;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  .navbox {
    position: absolute;
    right: 5%;
    .navboxItem {
      display: inline-block;
      margin-right: 30px;
    }
  }
  .signin {
    position: absolute;
    right: 0;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  img {
    position: absolute;
    top: 1.875rem;
    left: 0;
    width: 2.1875rem;
    height: 2.1875rem;
    display: inline-block;
  }
  .home_button {
    margin-left: 2.3rem;
    margin-right: 38px;
    display: inline-block;
    font-weight: bold;
    font-size: 1.1875rem;
  }
`;
const navboxItem = [
  { text: "data", link: "/data" },
  { text: "소개", link: "#" },
  { text: "공지사항", link: "#" },
  { text: "자료실", link: "#" },
  { text: "환경오염신고", link: "#" },
  { text: "자유게시판", link: "#" },
  { text: "질문과답변", link: "#" },
];
const Navbar = () => {
  return (
    <StyledNav>
      <StyledLink to="/user">
        <img src={Mark} alt="마크" />
        <p className="home_button">환경서비스 플랫폼</p>
      </StyledLink>
      <div className="navbox">
        {navboxItem.map((list, index) => (
          <div key={index} className="navboxItem">
            <StyledLink to={list.link}>{list.text}</StyledLink>
          </div>
        ))}
      </div>
      <div className="signin">
        <StyledLink to="/user/login">로그인</StyledLink>
      </div>
    </StyledNav>
  );
};

export default Navbar;
