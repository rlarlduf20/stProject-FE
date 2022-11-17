import { useState } from "react";
import styled from "styled-components";
import useAxios from "../../../hooks/useAxios";

const EditInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .checkpw {
    line-height: 70vh;
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

const EditInfo = ({ myInfo }: { myInfo: any }) => {
  const [isAuthToEdit, setIsAuthToEdit] = useState(false);
  const [password, setPassword] = useState("");
  const onChangePw = (e: any) => {
    setPassword(e.target.value);
  };
  const onClickPw = async () => {
    try {
      await useAxios.post("/auth/login", {
        email: myInfo.email,
        password,
      });
      setIsAuthToEdit(true);
    } catch (e) {
      alert("비밀번호를 확인해주세요.");
    }
  };

  const [first, setFirst] = useState(myInfo.first_name);
  const [last, setLast] = useState(myInfo.last_name);
  const [email, setEmail] = useState(myInfo.email);
  const [phone, setPhone] = useState(myInfo.phone);
  const [city, setCity] = useState(myInfo.city);
  const [address, setAddress] = useState(myInfo.address);
  const onClickEdit = async () => {
    if (
      first === null ||
      last === null ||
      phone === null ||
      city === null ||
      address === null
    ) {
      alert("모든 입력란을 채워주세요.");
      return;
    }
    try {
      const res = await useAxios.patch(`/user/${myInfo._id}`, {
        first_name: first,
        last_name: last,
        email,
        password,
        phone,
        city,
        address,
        gender: myInfo.gender,
      });
      console.log(res.data);
      alert("수정 성공");
      window.location.reload();
    } catch (e) {
      alert("정보 수정 실패");
    }
  };
  return (
    <EditInfoBox>
      {isAuthToEdit ? (
        <>
          <div className="edittext">
            <span>*내 정보 수정</span>
            <button onClick={onClickEdit}>수정하기</button>
          </div>
          <div className="row1">
            <input
              type="email"
              value={email}
              className="email"
              placeholder="이메일"
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
            <input
              type="text"
              value={phone}
              className="phone"
              placeholder="전화번호"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="row2">
            <input
              type="text"
              value={last}
              className="lastname"
              placeholder="성"
              onChange={(e) => setLast(e.target.value)}
            />
            <input
              type="text"
              value={first}
              className="firstname"
              placeholder="이름"
              onChange={(e) => setFirst(e.target.value)}
            />
          </div>
          <div className="row3">
            <input
              type="text"
              value={city}
              className="city"
              placeholder="거주도시"
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              value={address}
              className="address"
              placeholder="주소"
              onChange={(e) => setAddress(e.target.value)}
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
          <button onClick={onClickPw} className="submit">
            확인하기
          </button>
        </div>
      )}
    </EditInfoBox>
  );
};

export default EditInfo;
