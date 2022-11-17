import styled from "styled-components";
import { Link } from "react-router-dom";

const Head = styled.header`
  width: 1250px;
  margin: 0 auto;
  height: 94px;
  .logoBox {
    display: flex;
    width: 183px;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid #8fbc8f;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: bold;
  }
`;
const Form = styled.div`
  width: 1250px;
  margin: 86px auto 0;
  padding-left: 68px;
  .title {
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 91px;
  }
  .content {
    border: 1px solid black;
    height: 400px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ArticleRegi = () => {
  return (
    <>
      <Head>
        <StyledLink to="/user">
          <div className="logoBox">환경서비스 플랫폼</div>
        </StyledLink>
      </Head>
      <Form>
        <div className="title">자유게시판 글쓰기</div>
        <div className="content"></div>
      </Form>
    </>
  );
};

export default ArticleRegi;
