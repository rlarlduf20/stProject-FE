import styled from "styled-components";

const EditPwBox = styled.div`
  input {
    width: 17.8125rem;
    padding: 1.125rem 0 1.125rem 0.9375rem;
    &:focus {
      outline: none;
      border: 1px solid #8fbc8f;
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
      <input placeholder="new password" className="newPw" />
      <input placeholder="confirm new password" className="confirmNewPw" />
    </EditPwBox>
  );
};

export default EditPw;
