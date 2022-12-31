import { useState, useEffect } from "react";
import TableList from "../../../public/common/table/TableList";
import TableType from "../../../public/common/table/TableType";
import TableSearch from "../../../public/common/table/TableSearch";
import TablePagination from "../../../public/common/table/TablePagination";
import { BoardMainContainer, BoardInnerContainer } from "../notice_board";
import { Link, useLocation } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import queryString from "query-string";

const QnABoardMain = () => {
  const [loading, setLoading] = useState(true);
  const [qnaList, setQnaList] = useState<any>();
  const { search } = useLocation();
  const [totalPage, setTotalPage] = useState(1);

  const getQnaList = async () => {
    try {
      const res = await useAxios.get(`/qna`, {
        params: {
          title: queryString.parse(search).des,
        },
      });

      setQnaList(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getQnaList();
  }, []);

  useEffect(() => {
    if (qnaList !== undefined) {
      setTotalPage(Math.trunc((qnaList.length - 1) / 5 + 1));
    }
  }, [qnaList]);

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
            <TableType title="QnA" route="qnaRegi" />
            {qnaList
              .slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5)
              .map((list: any, index: number) => (
                <Link
                  to={`/eachQnA?id=${list._id}`}
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
            <TableSearch type="qnab" />
          </>
        )}
      </BoardInnerContainer>
    </BoardMainContainer>
  );
};

export default QnABoardMain;
