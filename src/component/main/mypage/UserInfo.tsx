import styled from "styled-components";

const UserInfoDiv = styled.div`
  line-height: 30px;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 100px;
  }
`;

const UserInfo = () => {
  return (
    <UserInfoDiv>
      <h1>**김기열님 환영합니다.**</h1>
      <p>이메일 : kky8274@naver.com</p>
      <p>전화번호 : 010-1111-2222</p>
      <p>거주도시 : 서울시</p>
      <p>주소 : 공릉동 해오름 가동</p>
    </UserInfoDiv>
  );
};

export default UserInfo;
