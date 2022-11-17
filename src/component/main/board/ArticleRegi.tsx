import styled from "styled-components";
import { Link } from "react-router-dom";

const Form = styled.div`
  width: 1050px;
  margin: 140px auto 0;
  .title {
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 91px;
  }
  .content {
    height: 400px;
    .titleInput {
      display: flex;
      margin-bottom: 70px;
      p {
        margin-right: 76px;
      }
      input {
        padding: 10px 0 10px 10px;
        border: none;
        outline: none;
        border-bottom: 1px solid #c4c4c4;
        width: 900px;
      }
    }
    .fileInput {
      display: flex;
      margin-bottom: 70px;
      p {
        margin-right: 41.5px;
      }
    }
    p {
      font-size: 20px;
      font-weight: bold;
      color: #999;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ArticleRegi = ({ type }: { type: string }) => {
  return (
    <>
      <Form>
        <div className="title">{type} 글쓰기</div>
        <div className="content">
          <div className="titleInput">
            <p>제목</p>
            <input type="text" />
          </div>
          <div className="fileInput">
            <p>파일첨부</p>
            <input type="file" />
          </div>
          <div className="contentInput">
            <p>내용</p>
          </div>
        </div>
      </Form>
    </>
  );
};

export default ArticleRegi;
