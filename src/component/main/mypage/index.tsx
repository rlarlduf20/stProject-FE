import styled from "styled-components";
import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import EditInfo from "./EditInfo";
import EditPw from "./EditPw";
import useAxios from "../../../hooks/useAxios";

const MypageContainer = styled.div`
  margin-top: 5.9375rem;
`;
const MyPageInnerBox = styled.div`
  width: 78.125rem;
  margin: 0 auto;
  min-height: calc(100vh - 7.3125rem - 5.9375rem);
  display: flex;
  .right_side {
    display: flex;
    margin: 0 auto;
    align-items: center;
  }
`;

const MypageSideBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
export const StyledLabel = styled.label`
  display: block;
  font-size: 2.1875rem;
  color: #e2e2e2;
  height: 100%;
  cursor: pointer;
  width: 12.5rem;
`;
export const StyledRadio = styled.input`
  display: none;

  &:checked + ${StyledLabel} {
    color: #8fbc8f;
    height: 100%;
  }
`;

const MyPageMain = () => {
  const [loading, setLoading] = useState(true);
  const [radioValue, setRadioValue] = useState("default");
  const onChangeRadio = (e: any) => {
    setRadioValue(e.target.value);
  };

  const [myInfo, setMyInfo] = useState({
    _id: "",
    email: "",
    first_name: "",
    last_name: "",
    gender: "",
    phone: "",
    password: "",
    city: "",
    adress: "",
  });
  const getMe = async () => {
    try {
      const res = await useAxios.get("/user/me");
      console.log("me", res.data);
      setMyInfo(res.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getMe();
  }, []);
  return (
    <>
      {loading ? null : (
        <MypageContainer>
          <MyPageInnerBox>
            <MypageSideBtn>
              <div className="default">
                <StyledRadio
                  onChange={onChangeRadio}
                  name="sidebtn"
                  id="default"
                  type="radio"
                  value="default"
                  checked={radioValue === "default" ? true : false}
                />
                <StyledLabel htmlFor="default">내정보</StyledLabel>
              </div>
              <div className="edit_info">
                <StyledRadio
                  onChange={onChangeRadio}
                  name="sidebtn"
                  id="info"
                  type="radio"
                  value="editInfo"
                  onClick={() =>
                    alert("정보 수정을 위해 비밀번호 입력이 필요합니다.")
                  }
                />
                <StyledLabel htmlFor="info">정보수정</StyledLabel>
              </div>
              <div className="edit_pw">
                <StyledRadio
                  onChange={onChangeRadio}
                  name="sidebtn"
                  id="pw"
                  type="radio"
                  value="editPw"
                />
                <StyledLabel htmlFor="pw">비밀번호 변경</StyledLabel>
              </div>
            </MypageSideBtn>
            <div className="right_side">
              {radioValue === "default" ? (
                <UserInfo myInfo={myInfo} />
              ) : radioValue === "editInfo" ? (
                <EditInfo myInfo={myInfo} />
              ) : (
                <EditPw />
              )}
            </div>
          </MyPageInnerBox>
        </MypageContainer>
      )}
    </>
  );
};

export default MyPageMain;
