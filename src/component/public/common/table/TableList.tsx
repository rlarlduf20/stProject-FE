import styled from "styled-components";

const BoardListBox = styled.div`
  display: flex;
  padding: 0.9375rem;
  border-bottom: 0.0625rem solid #e2e2e2;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  @media (max-width: 37.5rem) {
    font-size: 0.75rem;
  }
  @media (max-width: 25rem) {
    font-size: 0.625rem;
  }
  .tr_indexNo {
    flex-basis: 3.125rem;
  }
  .tr_title {
    flex-basis: 31.25rem;
  }
  .tr_writer {
    flex-basis: 18.75rem;
  }
  .tr_date {
    flex-basis: 6.25rem;
  }
  .tr_view {
    flex-basis: 3.125rem;
  }
`;

interface ListType {
  list: {
    indexNo: number;
    title: string;
    author: any;
    updatedAt: string;
    viewCount: number;
  };
  index: number;
}

const TableList = ({ list, index }: ListType) => {
  return (
    <BoardListBox>
      <div className="tr_indexNo">{index + 1}</div>
      <div className="tr_title">{list.title}</div>
      <div className="tr_writer">{list.author.email}</div>
      <div className="tr_date">{list.updatedAt.slice(5, 10)}</div>
      <div className="tr_view">{list.viewCount}</div>
    </BoardListBox>
  );
};

export default TableList;
