import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Bishong from "../../../image/bishong.jpeg";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";
import axios from "axios";

const EachArticleSection = styled.section`
  width: 800px;
  background-color: white;
  position: relative;
  /* box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5); */
  margin: 150px auto;
  padding: 30px;
  /* border: 1px solid black; */
  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .subTitle {
    display: flex;
    gap: 30px;
    color: #c4c4c4;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: 14px;
    .email {
      color: black;
    }
    .view {
      position: relative;
      span {
        position: absolute;
        top: 4px;
        left: 28px;
      }
    }
  }
  .imgBox {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  .des {
    padding: 20px 20px 80px 20px;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 24px;
    word-spacing: 2px;
    border-bottom: 1px solid #e2e2e2;
  }
  .etc {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    .delete {
      transition: 0.4s;
      &:hover {
        transition: 0.4s;
        transform: scale(1.2);
      }
    }
    .edit {
      transition: 0.4s;
      &:hover {
        transition: 0.4s;
        transform: scale(1.2);
      }
    }
  }
  .back {
    position: absolute;
    top: 45px;
    right: 25px;
    overflow: hidden;
    text-overflow: clip;
    transition: 0.4s;
    cursor: pointer;
    &:hover {
      transition: 0.4s;
      transform: scale(1.5);
    }
  }
`;

interface EachType {
  each?: any;
  type?: string;
  editRoute?: string;
  ret?: string;
}

const EachArticle = ({ each, type, editRoute, ret }: EachType) => {
  const onClickDel = async () => {
    try {
      await useAxios.delete(`/${type}/${each._id}`);
      alert("해당 게시글이 삭제되었습니다.");
      window.location.replace(`/client/${ret}`);
    } catch (error) {
      console.error(error);
      alert("해당 글에 대한 삭제 권한이 없습니다.");
    }
  };
  return (
    <EachArticleSection>
      <div className="title">{each.title}</div>
      <div className="subTitle">
        <div className="email">{each.author.email}</div>
        <div className="date">{each.updatedAt.slice(2, 10)}</div>
        <div className="view">
          <VisibilityIcon color="action" />
          <span>{each.viewCount}</span>
        </div>
      </div>
      <div className="imgBox">
        <img src={each.imageUrl} alt="이미지 파일이 유효하지 않습니다." />
      </div>
      <div className="des">{each.content}</div>
      <div className="etc">
        <div className="delete" onClick={onClickDel}>
          <DeleteIcon
            color="action"
            fontSize="large"
            style={{ marginRight: "10px", cursor: "pointer" }}
          />
        </div>
        <div className="edit">
          <Link to={`${editRoute}?id=${each._id}`}>
            <EditIcon
              color="action"
              fontSize="large"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
    </EachArticleSection>
  );
};

export default EachArticle;
