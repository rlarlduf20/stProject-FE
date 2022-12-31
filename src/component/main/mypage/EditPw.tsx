import styled from "styled-components";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";

const EditPwBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 17.8125rem;
    padding: 1.125rem 0 1.125rem 0.9375rem;
    outline: none;
    border: 0.0625rem solid #e2e2e2;
    border-radius: 0.625rem;
    box-sizing: border-box;
    &:focus {
      outline: none;
      border: 0.125rem solid #8fbc8f;
      box-sizing: border-box;
    }
  }
  p {
    margin-bottom: 1.875rem;
  }
  .currPw {
    display: block;
    margin-bottom: 0.8rem;
  }
  .newPw {
    display: block;
    margin-bottom: 0.8rem;
  }
  .confirmNewPw {
    display: block;
    margin-bottom: 0.8rem;
  }
  .editBtn {
    background-color: #8fbc8f;
    color: white;
    width: 17.8125rem;
    padding: 1.125rem 0;
    text-align: center;
    border-radius: 0.625rem;
    cursor: pointer;
    &:hover {
      background-color: green;
    }
  }
`;

const EditPw = ({ myInfo }: { myInfo: any }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirm, setNewConfirm] = useState("");

  const onClickEditPw = async () => {
    console.log(oldPassword, newPassword);
    if (newPassword !== newConfirm) {
      alert("비밀번호가 서로 다릅니다.");
      return;
    }
    if (newPassword === "") {
      alert("비밀번호를 입력해주세요");
      return;
    }
    try {
      await useAxios.patch(`/user/password/${myInfo._id}`, {
        oldPassword,
        newPassword,
      });
      alert("비밀번호 변경 성공");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.reload();
    } catch (e) {
      alert("현재 비밀번호가 틀립니다.");
    }
  };
  return (
    <EditPwBox>
      <p>*비밀번호 변경하기</p>
      <input
        placeholder="current password"
        className="currPw"
        type="password"
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <input
        placeholder="new password"
        className="newPw"
        type="password"
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        placeholder="confirm new password"
        className="confirmNewPw"
        type="password"
        onChange={(e) => setNewConfirm(e.target.value)}
      />
      <div className="editBtn" onClick={onClickEditPw}>
        변경하기
      </div>
    </EditPwBox>
  );
};

export default EditPw;
