import styled from "styled-components";
import { useState } from "react";
import NoticeBoardList from "./NoticeBoardList";
import CreateIcon from "@mui/icons-material/Create";
import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";

const NoticeMainContainer = styled.main`
  margin-top: 5.9375rem;
`;
const NoticeInnerContainer = styled.div`
  min-height: calc(100vh - 9.375rem - 7.3125rem);
  max-width: 62.5rem;
  margin: 0 auto;
  .title {
    margin-top: 9.375rem;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    .title_text {
      color: white;
      font-size: 1.5rem;
      display: inline-block;
      background: #8fbc8f;
      padding: 1.25rem;
      border-radius: 1.25rem 1.25rem 0 0;
    }
    .none {
      flex-grow: 1;
    }
    .post {
      display: inline-block;
      width: 26px;
      height: 26px;
      overflow: auto;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      cursor: pointer;
      transition: width 0.2s;
      .create {
        display: inline-block;
      }
      &:hover {
        width: 67px;
      }
    }
  }

  .th {
    display: flex;
    padding: 0.9375rem;
    border-bottom: 0.0625rem solid lightgrey;
    font-weight: bold;
    background: #f2f3f4;
    @media (max-width: 37.5rem) {
      font-size: 0.75rem;
    }
    @media (max-width: 25rem) {
      font-size: 0.625rem;
    }

    color: green;
    text-align: center;
    .th_indexNo {
      flex-basis: 3.125rem;
    }
    .th_title {
      flex-basis: 31.25rem;
    }
    .th_writer {
      flex-basis: 18.75rem;
    }
    .th_date {
      flex-basis: 6.25rem;
    }
    .th_view {
      flex-basis: 3.125rem;
      @media (max-width: 25rem) {
        flex-basis: 3.3125rem;
      }
    }
  }
  .page {
    display: flex;
    justify-content: center;
    padding: 48px 0 48px 0;
  }
  .search {
    display: flex;
    justify-content: center;
    .search_type {
      display: inline-block;
      border: 1px solid #e2e2e2;
      font-size: 14px;
      display: flex;
      padding: 0 5px 0 5px;
      align-items: center;
    }
    .search_input {
      padding: 10px 0 10px 10px;
      border: 1px solid #e2e2e2;
      outline: none;
    }
    .search_button {
      background: #e2e2e2;
      cursor: pointer;
      border: 1px solid #e2e2e2;
      &:hover {
        background: #8fbc8f;
      }
    }
  }
`;
const NoticeBoardMain = () => {
  const [tableList, setTableList] = useState([
    {
      indexNo: 1,
      title: "프론트엔드 리액트",
      writer: "kky8274@naver.com",
      date: "7.9",
      view: 0,
    },
    {
      indexNo: 2,
      title: "백엔드 네스트",
      writer: "minjun@google.com",
      date: "7.11",
      view: 18,
    },
  ]);

  return (
    <NoticeMainContainer>
      <NoticeInnerContainer>
        <div className="title">
          <p className="title_text">공지사항</p>
          <div className="none"></div>
          <div className="post">
            <CreateIcon />
            <span className="create">글쓰기</span>
          </div>
        </div>
        <div className="th">
          <div className="th_indexNo">No.</div>
          <div className="th_title">제목</div>
          <div className="th_writer">작성자</div>
          <div className="th_date">날짜</div>
          <div className="th_view">조회</div>
        </div>

        {tableList.map((list, index: number) => (
          <NoticeBoardList key={index} list={list} />
        ))}

        <div className="page">
          <Pagination
            count={10}
            color="primary"
            shape="rounded"
            size="small"
            showFirstButton
            showLastButton
          />
        </div>
        <div className="search">
          <div className="search_type">제목</div>
          <input
            type="text"
            className="search_input"
            placeholder="검색어를 입력하세요"
          />
          <button className="search_button">
            <SearchIcon />
          </button>
        </div>
      </NoticeInnerContainer>
    </NoticeMainContainer>
  );
};

export default NoticeBoardMain;
