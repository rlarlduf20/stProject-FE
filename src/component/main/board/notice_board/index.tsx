import styled from "styled-components";
import { useEffect, useState } from "react";
import TableList from "../../../public/common/table/TableList";
import TableType from "../../../public/common/table/TableType";
import TableSearch from "../../../public/common/table/TableSearch";
import TablePagination from "../../../public/common/table/TablePagination";
import queryString from "query-string";
import { Link, useLocation } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";

export const BoardMainContainer = styled.main`
  margin-top: 5.9375rem;
`;
export const BoardInnerContainer = styled.div`
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
  const [loading, setLoading] = useState(true);
  const [noticeList, setNoticeList] = useState<any>();
  const { search } = useLocation();

  const getNoticeList = async () => {
    try {
      const res = await useAxios.get(`/notice`, {
        params: {
          title: queryString.parse(search).des,
        },
      });

      setNoticeList(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getNoticeList();
  }, []);

  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    if (noticeList !== undefined) {
      setTotalPage(Math.trunc((noticeList.length - 1) / 5 + 1));
    }
  }, [noticeList]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageChange = (p: number) => {
    setCurrentPage(p);
  };
  return (
    <BoardMainContainer>
      <BoardInnerContainer>
        {loading ? null : (
          <>
            <TableType title="공지사항" route="noticeRegi" />
            {noticeList
              .slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5)
              .map((list: any, index: number) => (
                <Link
                  to={`/eachNotice?id=${list._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                  key={index}
                >
                  <TableList
                    list={list}
                    index={index + (currentPage - 1) * 5}
                  />
                </Link>
              ))}
            <TablePagination
              totalPage={totalPage === 0 ? 1 : totalPage}
              pageChange={pageChange}
            />
            <TableSearch type="noticeb" />
          </>
        )}
      </BoardInnerContainer>
    </BoardMainContainer>
  );
};

export default NoticeBoardMain;
