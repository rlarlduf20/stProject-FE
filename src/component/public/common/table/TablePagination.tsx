import Pagination from "@mui/material/Pagination";
import styled from "styled-components";

const TablePage = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 0 0;
`;

interface PageType {
  totalPage: number;
  pageChange: (e: number) => void;
}
const TablePagination = ({ totalPage, pageChange }: PageType) => {
  const onChangePage = (e: any) => {
    const nowPageInt = parseInt(e.target.outerText);
    pageChange(nowPageInt);
  };
  return (
    <TablePage>
      <Pagination
        count={totalPage}
        defaultPage={1}
        color="primary"
        shape="rounded"
        size="large"
        // showFirstButton
        // showLastButton
        hidePrevButton
        hideNextButton
        onChange={(e) => onChangePage(e)}
      />
    </TablePage>
  );
};

export default TablePagination;
