import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const TableSearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  .search_type {
    display: inline-block;
    border: 1px solid #e2e2e2;
    font-size: 14px;
    display: flex;
    padding: 0 5px 0 5px;
    align-items: center;
    margin-bottom: 48px;
  }
  .search_input {
    padding: 10px 0 10px 10px;
    border: 1px solid #e2e2e2;
    outline: none;
    margin-bottom: 48px;
  }
  .search_button {
    background: #e2e2e2;
    cursor: pointer;
    border: 1px solid #e2e2e2;
    margin-bottom: 48px;
    &:hover {
      background: #8fbc8f;
    }
  }
`;

const TableSearch = () => {
  return (
    <TableSearchBox>
      <div className="search_type">제목</div>
      <input
        type="text"
        className="search_input"
        placeholder="검색어를 입력하세요"
      />
      <button className="search_button">
        <SearchIcon />
      </button>
    </TableSearchBox>
  );
};

export default TableSearch;
