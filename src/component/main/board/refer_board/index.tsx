import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import TableList from "../../../public/common/table/TableList";
import TableType from "../../../public/common/table/TableType";
import TableSearch from "../../../public/common/table/TableSearch";
import TablePagination from "../../../public/common/table/TablePagination";
import { BoardMainContainer, BoardInnerContainer } from "../notice_board";
import useAxios from "../../../../hooks/useAxios";
import queryString from "query-string";

const ReferBoardMain = () => {
  const [loading, setLoading] = useState(true);
  const [referList, setReferList] = useState<any>();
  const { search } = useLocation();

  const getReferList = async () => {
    try {
      const res = await useAxios.get(`/reference`, {
        params: {
          title: queryString.parse(search).des,
        },
      });
      setReferList(res.data);
      setLoading(false);
      console.log("data", res.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getReferList();
  }, []);

  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    if (referList !== undefined) {
      setTotalPage(Math.trunc((referList.length - 1) / 5 + 1));
    }
  }, [referList]);
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
            <TableType title="자료실" route="referRegi" />
            {referList &&
              referList
                .slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5)
                .map((list: any, index: number) => (
                  <Link
                    to={`/eachRefer?id=${list._id}`}
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
            <TableSearch type="referb" />
          </>
        )}
      </BoardInnerContainer>
    </BoardMainContainer>
  );
};

export default ReferBoardMain;
