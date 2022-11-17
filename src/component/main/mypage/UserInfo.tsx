import styled from "styled-components";

const UserInfoDiv = styled.div`
  line-height: 50px;
  letter-spacing: 3px;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 4.5rem;
    font-weight: 600;
    text-align: center;
    span {
      color: green;
      font-weight: 900;
    }
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

const UserInfo = ({ myInfo }: { myInfo: any }) => {
  return (
    <UserInfoDiv>
      <div className="title">
        <h1>
          <span>
            {myInfo.last_name}
            {myInfo.first_name}
          </span>
          님 환영합니다
        </h1>
      </div>
      <div className="content">
        <div className="email">
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            type="text"
            value={myInfo.email}
            disabled
          />
        </div>
        <div className="phone">
          <label htmlFor="phone">전화번호</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={myInfo.phone}
            disabled
          />
        </div>
        <div className="city">
          <label htmlFor="city">거주도시</label>
          <input
            id="city"
            name="city"
            type="text"
            value={myInfo.city}
            disabled
          />
        </div>
        <div className="address">
          <label htmlFor="address">주소</label>
          <input
            id="address"
            name="address"
            type="text"
            value={myInfo.address}
            disabled
          />
        </div>
      </div>
    </UserInfoDiv>
  );
};

export default UserInfo;
