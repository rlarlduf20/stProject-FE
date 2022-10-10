import styled from "styled-components";
import { useEffect, useState } from "react";
import TableList from "../../public/common/table/TableList";
import TableType from "../../public/common/table/TableType";
import TableSearch from "../../public/common/table/TableSearch";
import TablePagination from "../../public/common/table/TablePagination";

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
    {
      indexNo: 5,
      title: "백엔드 네스트",
      writer: "minjun@google.com",
      date: "7.11",
      view: 18,
    },
    {
      indexNo: 6,
      title: "백엔드 네스트",
      writer: "minjun@google.com",
      date: "7.11",
      view: 18,
    },
    {
      indexNo: 7,
      title: "백엔드 네스트",
      writer: "minjun@google.com",
      date: "7.11",
      view: 18,
    },
    {
      indexNo: 8,
      title: "백엔드 네스트",
      writer: "minjun@google.com",
      date: "7.11",
      view: 18,
    },
    {
      indexNo: 9,
      title: "백엔드 네스트",
      writer: "minjun@google.com",
      date: "7.11",
      view: 18,
    },
    {
      indexNo: 10,
      title: "백엔드 네스트",
      writer: "minjun@google.com",
      date: "7.11",
      view: 18,
    },
    {
      indexNo: 11,
      title: "백엔드 네스트",
      writer: "minjun@google.com",
      date: "7.11",
      view: 18,
    },
    {
      indexNo: 12,
      title: "백엔드 네스트",
      writer: "minjun@google.com",
      date: "7.11",
      view: 18,
    },
    {
      indexNo: 13,
      title: "백엔드 네스트",
      writer: "minjun@google.com",
      date: "7.11",
      view: 18,
    },
  ]);

  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    setTotalPage(Math.trunc((tableList.length - 1) / 5 + 1));
  }, [tableList]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageChange = (p: number) => {
    setCurrentPage(p);
  };

  return (
    <NoticeMainContainer>
      <NoticeInnerContainer>
        <TableType title="공지사항" />
        {tableList
          .slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5)
          .map((list, index: number) => (
            <TableList key={index} list={list} />
          ))}
        <TablePagination totalPage={totalPage} pageChange={pageChange} />
        <TableSearch />
      </NoticeInnerContainer>
    </NoticeMainContainer>
  );
};

export default NoticeBoardMain;
