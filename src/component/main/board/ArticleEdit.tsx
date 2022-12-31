import { useState } from "react";
import { Form } from "./ArticleRegi";
import CreateIcon from "@mui/icons-material/Create";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";

interface EditType {
  each?: any;
  api?: string;
  ret?: string;
}
const ArticleEdit = ({ each, api, ret }: EditType) => {
  const [title, setTitle] = useState(each.title);
  const [content, setContent] = useState(each.content);
  const [file, setFile] = useState<any>();
  console.log(each._id);
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
      content,
      imageUrl: file,
    };
    try {
      await useAxios.patch(`/${api}/${each._id}`, data);
      alert("글이 수정되었습니다.");
      window.location.replace(`/client/${ret}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form>
      <div className="title">수정하기</div>
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
            value={each.imgUrl}
            accept="image/png, image/jpeg"
            onChange={onFileRegi}
          />
          <p style={{ color: "red", fontSize: "12px" }}>
            따로 파일 지정을 하지 않으면 수정하기 전 이미지 파일로 대체됩니다.
          </p>
        </div>
        <div className="contentInput">
          <p>내용</p>
          <textarea
            value={content}
            className="content"
            onChange={(e: any) => setContent(e.target.value)}
          />
        </div>
      </div>
      <div className="regibtn" onClick={onRegi}>
        <CreateIcon />
        <div className="regitext">수정하기</div>
      </div>
    </Form>
  );
};

export default ArticleEdit;
