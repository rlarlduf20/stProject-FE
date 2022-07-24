import styled from "styled-components";
import { useState } from "react";
import NoticeBoardList from "./NoticeBoardList";
import Pagination from "@mui/material/Pagination";
import TableType from "../../public/common/table/TableType";
import TableSearch from "../../public/common/table/TableSearch";

const NoticeMainContainer = styled.main`
  margin-top: 5.9375rem;
`;
const NoticeInnerContainer = styled.div`
  min-height: calc(100vh - 9.375rem - 7.3125rem);
  max-width: 62.5rem;
  margin: 0 auto;
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
    padding: 48px 0 0 0;
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
    {
      indexNo: 3,
      title: "백엔드 네스트",
      writer: "minjun@google.com",
      date: "7.11",
      view: 18,
    },
    {
      indexNo: 4,
      title: "백엔드 네스트",
      writer: "minjun@google.com",
      date: "7.11",
      view: 18,
    },
  ]);

  return (
    <NoticeMainContainer>
      <NoticeInnerContainer>
        <TableType title="공지사항" />
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
        <TableSearch />
      </NoticeInnerContainer>
    </NoticeMainContainer>
  );
};

export default NoticeBoardMain;
