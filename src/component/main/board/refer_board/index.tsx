import { useState, useEffect } from "react";
import TableList from "../../../public/common/table/TableList";
import TableType from "../../../public/common/table/TableType";
import TableSearch from "../../../public/common/table/TableSearch";
import TablePagination from "../../../public/common/table/TablePagination";
import { BoardMainContainer, BoardInnerContainer } from "../notice_board";
const ReferBoardMain = () => {
  const [tableList, setTableList] = useState([]);
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
        <TableType title="자료실" />
        {tableList.map((list, index: number) => (
          <TableList key={index} list={list} />
        ))}
        <TablePagination totalPage={totalPage} pageChange={pageChange} />
        <TableSearch />
      </BoardInnerContainer>
    </BoardMainContainer>
  );
};

export default ReferBoardMain;
