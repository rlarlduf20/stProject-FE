import styled from "styled-components";

const UserInfoDiv = styled.div`
  line-height: 50px;
  letter-spacing: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 1.5rem;
    margin: 9.375rem 0 4.5rem 0;
    font-weight: 700;
  }
  label {
    display: inline-block;
    width: 4.2112rem;
    margin-right: 1.25rem;
  }
  input {
    border: none;
    background: white;
    font-size: 1.125rem;
    letter-spacing: 0.1875rem;
    word-spacing: 0.3125rem;
    width: 13.75rem;
    color: grey;
  }
`;

const UserInfo = () => {
  return (
    <UserInfoDiv>
      <div className="title">
        <h1>김기열님 환영합니다</h1>
      </div>
      <div className="content">
        <div className="email">
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            type="text"
            value="kky8274@naver.com"
            disabled
          />
        </div>
        <div className="phone">
          <label htmlFor="phone">전화번호</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value="010-1111-2222"
            disabled
          />
        </div>
        <div className="city">
          <label htmlFor="city">거주도시</label>
          <input id="city" name="city" type="text" value="서울시" disabled />
        </div>
        <div className="address">
          <label htmlFor="address">주소</label>
          <input
            id="address"
            name="address"
            type="text"
            value="공릉동 해오름 가동"
            disabled
          />
        </div>
      </div>
    </UserInfoDiv>
  );
};

export default UserInfo;
