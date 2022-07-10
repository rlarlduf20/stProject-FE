import styled from "styled-components";

const EditPwBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 250px;
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
      border: 0.125rem solid #8fbc8f;
      box-sizing: border-box;
    }
  }
  p {
    margin-bottom: 1.875rem;
  }
  .newPw {
    display: block;
    margin-bottom: 0.8rem;
  }
  .confirmNewPw {
    display: block;
  }
`;

const EditPw = () => {
  return (
    <EditPwBox>
      <p>*비밀번호 변경하기</p>
      <input placeholder="new password" className="newPw" type="password" />
      <input
        placeholder="confirm new password"
        className="confirmNewPw"
        type="password"
      />
    </EditPwBox>
  );
};

export default EditPw;
