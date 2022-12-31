import { useState, useEffect } from "react";
import TableList from "../../../public/common/table/TableList";
import TableType from "../../../public/common/table/TableType";
import TableSearch from "../../../public/common/table/TableSearch";
import TablePagination from "../../../public/common/table/TablePagination";
import { BoardMainContainer, BoardInnerContainer } from "../notice_board";
import { Link, useLocation } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import queryString from "query-string";

const FreeBoardMain = () => {
  const [loading, setLoading] = useState(true);
  const [freeList, setFreeList] = useState<any>();
  const { search } = useLocation();

  const getFreeList = async () => {
    try {
      const res = await useAxios.get(`/freeboard`, {
        params: {
          title: queryString.parse(search).des,
        },
      });

      setFreeList(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getFreeList();
  }, []);

  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    if (freeList !== undefined) {
      setTotalPage(Math.trunc((freeList.length - 1) / 5 + 1));
    }
  }, [freeList]);
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
            <TableType title="자유게시판" route="freeRegi" />
            {freeList
              .slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5)
              .map((list: any, index: number) => (
                <Link
                  to={`/eachFree?id=${list._id}`}
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
            <TableSearch type="freeb" />
          </>
        )}
      </BoardInnerContainer>
    </BoardMainContainer>
  );
};

export default FreeBoardMain;
