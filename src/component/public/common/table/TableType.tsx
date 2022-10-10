import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";

const TableTypeHeader = styled.div`
  margin-top: 9.375rem;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  .title_text {
    color: white;
    font-size: 1.5rem;
    display: inline-block;
    background: #8fbc8f;
    padding: 1.25rem;
    border-radius: 1.25rem 1.25rem 0 0;
  }
  .none {
    flex-grow: 1;
  }
  .post {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 26px;
    overflow: auto;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    cursor: pointer;
    transition: width 0.2s;
    .create {
      display: inline-block;
      position: absolute;
      width: 100%;
      top: 5px;
    }
    &:hover {
      width: 67px;
    }
  }
`;

const TableTypeTitle = styled.div`
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
interface TableTypeType {
  title: string;
}
const TableType = ({ title }: TableTypeType) => {
  return (
    <>
      <TableTypeHeader>
        <p className="title_text">{title}</p>
        <div className="none"></div>

        <div className="post">
          <CreateIcon />
          <div className="create">글쓰기</div>
        </div>
      </TableTypeHeader>
      <TableTypeTitle>
        <div className="th">
          <div className="th_indexNo">No.</div>
          <div className="th_title">제목</div>
          <div className="th_writer">작성자</div>
          <div className="th_date">날짜</div>
          <div className="th_view">조회</div>
        </div>
      </TableTypeTitle>
    </>
  );
};

export default TableType;
