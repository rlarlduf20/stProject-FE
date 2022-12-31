import { useState, useEffect } from "react";
import TableList from "../../../public/common/table/TableList";
import TableType from "../../../public/common/table/TableType";
import TableSearch from "../../../public/common/table/TableSearch";
import TablePagination from "../../../public/common/table/TablePagination";
import { BoardMainContainer, BoardInnerContainer } from "../notice_board";
import { Link, useLocation } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import queryString from "query-string";

const ReportBoardMain = () => {
  const [loading, setLoading] = useState(true);
  const [reportList, setReportList] = useState<any>();
  const { search } = useLocation();

  const getReportList = async () => {
    try {
      const res = await useAxios.get(`/report`, {
        params: {
          title: queryString.parse(search).des,
        },
      });
      setReportList(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getReportList();
  }, []);

  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    if (reportList !== undefined) {
      setTotalPage(Math.trunc((reportList.length - 1) / 5 + 1));
    }
  }, [reportList]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageChange = (p: number) => {
    setCurrentPage(p);
  };
  console.log(currentPage);
  return (
    <BoardMainContainer>
      <BoardInnerContainer>
        {loading ? null : (
          <>
            <TableType title="환경오염신고" route="reportRegi" />
            {reportList
              .slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5)
              .map((list: any, index: number) => (
                <Link
                  to={`/eachReport?id=${list._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                  key={index}
                >
                  <TableList
                    list={list}
                    index={index + (currentPage - 1) * 5}
                  />
                </Link>
              ))}
            <TablePagination totalPage={totalPage} pageChange={pageChange} />
            <TableSearch type="reportb" />
          </>
        )}
      </BoardInnerContainer>
    </BoardMainContainer>
  );
};

export default ReportBoardMain;
