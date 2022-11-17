import styled from "styled-components";

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

const EditPw = () => {
  return (
    <EditPwBox>
      <p>*비밀번호 변경하기</p>
      <input
        placeholder="current password"
        className="currPw"
        type="password"
      />
      <input placeholder="new password" className="newPw" type="password" />
      <input
        placeholder="confirm new password"
        className="confirmNewPw"
        type="password"
      />
      <div className="editBtn">변경하기</div>
    </EditPwBox>
  );
};

export default EditPw;
