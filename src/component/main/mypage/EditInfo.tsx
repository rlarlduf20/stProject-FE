import { useState } from "react";
import styled from "styled-components";

const EditInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .checkpw {
    line-height: 70vh;
  }
  .edittext {
    margin-top: 200px;
  }
  input {
    width: 17.8125rem;
    padding: 1.125rem 0 1.125rem 0.9375rem;
    outline: none;
    border: 0.0625rem solid #e2e2e2;
    border-radius: 0.625rem;
    box-sizing: border-box;
    &:focus {
      outline: none;
      border: 2px solid #8fbc8f;
      box-sizing: border-box;
    }
  }
  span {
    margin-bottom: 3.125rem;
    font-size: 1.5rem;
  }
  button {
    margin: 0 0 50px 20px;
    border: 0.0313rem solid green;
    color: green;
    background: white;
    border-radius: 10px;
    font-size: 1rem;
    padding: 0.6rem 0.875rem 0.6rem 0.875rem;
    cursor: pointer;
    &:hover {
      color: white;
      cursor: pointer;
      background: #8fbc8f;
      border: 0.0313rem solid white;
    }
  }
  .pw {
    margin-right: 0.625rem;
  }
  .submit {
    border: 0.125rem solid green;
    color: green;
    background: white;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.875rem 0.875rem 0.875rem 0.875rem;
    cursor: pointer;
    &:hover {
      color: white;
      cursor: pointer;
      background: #8fbc8f;
      border: 0.125rem solid white;
    }
  }
  .row1 {
    display: flex;
    gap: 0.625rem;
    margin-bottom: 1.25rem;
  }
  .row2 {
    display: flex;
    gap: 0.625rem;
    margin-bottom: 1.25rem;
  }
  .row3 {
    display: flex;
    gap: 0.625rem;
  }
`;

const EditInfo = () => {
  const [isAuthToEdit, setIsAuthToEdit] = useState(false);
  const [password, setPassword] = useState("");
  const onChangePw = (e: any) => {
    setPassword(e.target.value);
  };
  const onClick = () => {
    if (password === "1111") {
      setIsAuthToEdit(true);
    } else {
      alert("비밀번호가 틀립니다.");
    }
  };
  return (
    <EditInfoBox>
      {isAuthToEdit ? (
        <>
          <div className="edittext">
            <span>*내 정보 수정</span>
            <button>수정하기</button>
          </div>
          <div className="row1">
            <input
              type="email"
              value="kky8274@naver.com"
              className="email"
              placeholder="이메일"
              disabled
            />
            <input
              type="text"
              value="010-1111-2222"
              className="phone"
              placeholder="전화번호"
            />
          </div>
          <div className="row2">
            <input
              type="text"
              value="김"
              className="lastname"
              placeholder="성"
            />
            <input
              type="text"
              value="기열"
              className="firstname"
              placeholder="이름"
            />
          </div>
          <div className="row3">
            <input
              type="text"
              value="서울"
              className="city"
              placeholder="거주도시"
            />
            <input
              type="text"
              value="공릉동 해오름 가동"
              className="address"
              placeholder="주소"
            />
          </div>
        </>
      ) : (
        <div className="checkpw">
          <input
            type="password"
            placeholder="비밀번호"
            onChange={onChangePw}
            className="pw"
          />
          <button onClick={onClick} className="submit">
            확인하기
          </button>
        </div>
      )}
    </EditInfoBox>
  );
};

export default EditInfo;
