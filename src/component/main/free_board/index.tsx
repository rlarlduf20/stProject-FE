// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import TableType from "../../public/common/table/TableType";
// import { styled as styledTable } from "@mui/material/styles";
// import TableSearch from "../../public/common/table/TableSearch";
// const FreeBoardMainContainer = styled.main`
//   margin-top: 5.9375rem;
// `;

// const FreeBoardInnerContainer = styled.div`
//   min-height: calc(100vh - 9.375rem - 7.3125rem);
//   max-width: 62.5rem;
//   margin: 0 auto;
// `;
// const StyledTableRow = styled(TableRow)`
//   cursor: pointer;
// `;
// const StyledTableCell = styledTable(TableCell)(() => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#f2f3f4",
//     color: "green",
//     fontWeight: "bold",
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));
// interface Column {
//   id: "index" | "title" | "writer" | "date" | "view";
//   label: string;
//   minWidth?: number;
//   align?: "right" | "center";
//   format?: (value: number) => string;
// }
// const columns: readonly Column[] = [
//   { id: "index", label: "No.", minWidth: 50, align: "center" },
//   { id: "title", label: "제목", minWidth: 230, align: "center" },
//   {
//     id: "writer",
//     label: "작성자",
//     minWidth: 200,
//     align: "center",
//     //   format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: "date",
//     label: "날짜",
//     minWidth: 70,
//     align: "center",
//     //   format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: "view",
//     label: "조회",
//     align: "center",
//     minWidth: 50,
//   },
// ];
// interface Data {
//   index: number;
//   title: string;
//   writer: string;
//   date: string;
//   view: number;
// }

// function createData(
//   index: number,
//   title: string,
//   writer: string,
//   date: string,
//   view: number
// ): Data {
//   return { index, title, writer, date, view };
// }
// const rows = [
//   createData(1, "프론트엔드 리액트", "kky8274@naver.com", "7.9", 0),
//   createData(2, "백엔드 네스트", "minjun@google.com", "7.11", 18),
//   createData(3, "백엔드 네스트", "minjun@google.com", "7.11", 18),
//   createData(4, "백엔드 네스트", "minjun@google.com", "7.11", 18),
//   createData(5, "백엔드 네스트", "minjun@google.com", "7.11", 18),
//   createData(6, "백엔드 네스트", "minjun@google.com", "7.11", 18),
//   createData(7, "백엔드 네스트", "minjun@google.com", "7.11", 18),
//   createData(8, "백엔드 네스트", "minjun@google.com", "7.11", 18),
//   createData(9, "백엔드 네스트", "minjun@google.com", "7.11", 18),
//   createData(10, "백엔드 네스트", "minjun@google.com", "7.11", 18),
//   createData(11, "백엔드 네스트", "minjun@google.com", "7.11", 18),
//   createData(12, "백엔드 네스트", "minjun@google.com", "7.11", 18),
//   createData(13, "백엔드 네스트", "minjun@google.com", "7.11", 18),
// ];

// const FreeBoardMain = () => {
//   const [page, setPage] = useState(0);
//   const rowsPerPage = 5;
//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };
//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setPage(0);
//   };

//   return (
//     <FreeBoardMainContainer>
//       <FreeBoardInnerContainer>
//         <TableType title="자유게시판" />
//         <Paper sx={{ width: "100%", overflow: "hidden" }}>
//           <TableContainer sx={{ maxHeight: 440 }}>
//             <Table stickyHeader aria-label="sticky table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => (
//                     <StyledTableCell
//                       key={column.id}
//                       align={column.align}
//                       style={{ minWidth: column.minWidth }}
//                     >
//                       {column.label}
//                     </StyledTableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {rows
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((row) => {
//                     return (
//                       <TableRow
//                         //hover
//                         role="checkbox"
//                         tabIndex={-1}
//                         key={row.index}
//                       >
//                         {columns.map((column) => {
//                           const value = row[column.id];
//                           return (
//                             <TableCell key={column.id} align={column.align}>
//                               {column.format && typeof value === "number"
//                                 ? column.format(value)
//                                 : value}
//                             </TableCell>
//                           );
//                         })}
//                       </TableRow>
//                     );
//                   })}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <TablePagination
//             rowsPerPageOptions={[5]}
//             component="div"
//             count={rows.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </Paper>
//         <TableSearch />
//       </FreeBoardInnerContainer>
//     </FreeBoardMainContainer>
//   );
// };

// export default FreeBoardMain;

import styled from "styled-components";
import { useState, useEffect } from "react";
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
    <NoticeMainContainer>
      <NoticeInnerContainer>
        <TableType title="자유게시판" />
        {tableList.map((list, index: number) => (
          <TableList key={index} list={list} />
        ))}
        <TablePagination totalPage={totalPage} pageChange={pageChange} />
        <TableSearch />
      </NoticeInnerContainer>
    </NoticeMainContainer>
  );
};

export default NoticeBoardMain;
