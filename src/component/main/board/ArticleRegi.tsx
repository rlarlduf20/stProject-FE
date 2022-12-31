import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import useAxios from "../../../hooks/useAxios";
import axios from "axios";

export const Form = styled.div`
  width: 1050px;
  height: 690px;
  margin: 140px auto 0;
  position: relative;
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
        font-size: 18px;
        padding: 10px 0 10px 10px;
        border: none;
        outline: none;
        border-bottom: 1px solid #c4c4c4;
        width: 900px;
        &::placeholder {
          color: #e2e2e2;
        }
      }
    }
    .fileInput {
      display: flex;
      margin-bottom: 70px;
      p {
        margin-right: 41.5px;
      }
    }
    .contentInput {
      p {
        margin-bottom: 30px;
      }
      .content {
        width: 91.5%;
        height: 200px;
        padding: 30px;
        outline: none;
        border: none;
        border: 1px solid #c4c4c4;
        font-size: 20px;
        border-radius: 15px;
      }
    }
    p {
      font-size: 20px;
      font-weight: bold;
      color: #999;
    }
  }
  .regibtn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 15px;
    border-bottom: 1px solid #8fbc8f;
    border-radius: 8px;
    color: #999;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: 0.2s;
    &:hover {
      background-color: #8fbc8f;
      color: white;
      transition: 0.2s;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ArticleRegi = ({
  type,
  api,
  ret,
}: {
  type: string;
  api: string;
  ret?: string;
}) => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [file, setFile] = useState<any>();
  const onFileRegi = async (e: any) => {
    const formData = new FormData();
    formData.append("files", e.target.files[0]);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_FILE_SERVER}`,
        formData
      );
      console.log(res.data);
      setFile(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  const onRegi = async () => {
    if (title === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    let data = {
      title,
      content: des,
      imageUrl: file,
    };
    try {
      await useAxios.post(`/${api}`, data);
      alert("글이 등록되었습니다.");
      window.location.replace(`/client/${ret}`);
    } catch (e) {
      console.error(e);
      alert("다시 시도해주세요.");
    }
  };

  return (
    <>
      <Form>
        <div className="title">{type} 글쓰기</div>
        <div className="content">
          <div className="titleInput">
            <p>
              제목 <span style={{ color: "red" }}>*</span>
            </p>
            <input
              value={title}
              type="text"
              placeholder="제목은 필수입력란입니다."
              onChange={(e: any) => setTitle(e.target.value)}
            />
          </div>
          <div className="fileInput">
            <p>파일첨부</p>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={onFileRegi}
            />
          </div>
          <div className="contentInput">
            <p>내용</p>
            <textarea
              value={des}
              className="content"
              onChange={(e: any) => setDes(e.target.value)}
            />
          </div>
        </div>
        <div className="regibtn" onClick={onRegi}>
          <CreateIcon />
          <div className="regitext">글쓰기</div>
        </div>
      </Form>
    </>
  );
};

export default ArticleRegi;
