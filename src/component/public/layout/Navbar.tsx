import React, { useState, useRef, useEffect, SyntheticEvent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Mark from "../../../image/seoultechMark.jpeg";
import { useTokenContext } from "../../../context/tokenState";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Avatar from "@mui/material/Avatar";

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
  .data {
    position: absolute;
    right: 10%;
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
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const { accessToken, setAccessToken } = useTokenContext();
  const navigate = useNavigate();
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const onClickLogout = async () => {
    try {
      const res = await axios.post("http://localhost:8000/auth/logout", {
        refresh_token: localStorage.getItem("refresh_token"),
      });
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      setAccessToken("");
      alert("로그아웃 성공");
      navigate("/user");
    } catch (e) {
      alert("로그아웃 실패");
    }
  };
  console.log(accessToken);
  return (
    <StyledNav>
      <StyledLink to="/user">
        <img src={Mark} alt="마크" />
        <p className="home_button">환경서비스 플랫폼</p>
      </StyledLink>
      {accessToken ? (
        <>
          <div className="navbox">
            {navboxItem.map((list, index) => (
              <div key={index} className="navboxItem">
                <StyledLink to={list.link}>{list.text}</StyledLink>
              </div>
            ))}
          </div>
          <div className="signin">
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Avatar src="/broken-image.jpg" sx={{ width: 48, height: 48 }} />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <StyledLink to="/mypage">
                          <a>
                            <MenuItem onClick={handleClose}>My Page</MenuItem>
                          </a>
                        </StyledLink>
                        <MenuItem onClick={onClickLogout}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </>
      ) : (
        <>
          <div className="data">
            <StyledLink to="/data">data</StyledLink>
          </div>
          <div className="signin">
            <StyledLink to="/user/login">로그인</StyledLink>
          </div>
        </>
      )}
    </StyledNav>
  );
};

export default Navbar;
