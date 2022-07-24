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
    width: 26px;
    height: 26px;
    overflow: auto;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    cursor: pointer;
    transition: width 0.2s;
    .create {
      display: inline-block;
    }
    &:hover {
      width: 67px;
    }
  }
`;
interface TableTypeType {
  title: string;
}
const TableType = ({ title }: TableTypeType) => {
  return (
    <TableTypeHeader>
      <p className="title_text">{title}</p>
      <div className="none"></div>

      <div className="post">
        <CreateIcon />
        <span className="create">글쓰기</span>
      </div>
    </TableTypeHeader>
  );
};

export default TableType;
