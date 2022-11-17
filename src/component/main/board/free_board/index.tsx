import { useState, useEffect } from "react";
import TableList from "../../../public/common/table/TableList";
import TableType from "../../../public/common/table/TableType";
import TableSearch from "../../../public/common/table/TableSearch";
import TablePagination from "../../../public/common/table/TablePagination";
import { BoardMainContainer, BoardInnerContainer } from "../notice_board";

const FreeBoardMain = () => {
  const [tableList, setTableList] = useState([
    // {
    //   indexNo: 1,
    //   title: "프론트엔드 리액트",
    //   writer: "kky8274@naver.com",
    //   date: "7.9",
    //   view: 0,
    // },
    // {
    //   indexNo: 2,
    //   title: "백엔드 네스트",
    //   writer: "minjun@google.com",
    //   date: "7.11",
    //   view: 18,
    // },
    // {
    //   indexNo: 3,
    //   title: "백엔드 네스트",
    //   writer: "minjun@google.com",
    //   date: "7.11",
    //   view: 18,
    // },
    // {
    //   indexNo: 4,
    //   title: "백엔드 네스트",
    //   writer: "minjun@google.com",
    //   date: "7.11",
    //   view: 18,
    // },
    // {
    //   indexNo: 5,
    //   title: "백엔드 네스트",
    //   writer: "minjun@google.com",
    //   date: "7.11",
    //   view: 18,
    // },
  ]);
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    setTotalPage((tableList.length % 5) + 1);
    console.log(tableList.length, totalPage);
  }, [tableList]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageChange = (p: number) => {
    setCurrentPage(p);
  };
  console.log(currentPage);
  return (
    <BoardMainContainer>
      <BoardInnerContainer>
        <TableType title="자유게시판" />
        {tableList.map((list, index: number) => (
          <TableList key={index} list={list} />
        ))}
        <TablePagination totalPage={totalPage} pageChange={pageChange} />
        <TableSearch />
      </BoardInnerContainer>
    </BoardMainContainer>
  );
};

export default FreeBoardMain;
