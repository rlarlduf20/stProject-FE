import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Timer = styled.input`
  color: green;
  background: white;
  font-weight: bold;
  font-size: 1rem;
  width: 4rem;
  border-radius: 0.625rem;
  &:hover {
    color: white;
    cursor: pointer;
    background: #8fbc8f;
    border: 0.125rem solid white;
  }
`;

interface ITimerType {
  active: boolean;
  toggleIsSendMail: () => void;
  changeValue: () => void;
  code: string;
  email: string;
  changeCorrectCode: () => void;
  correctCode: boolean;
  setEmailToken: any;
}
const EmailCodeTimer = ({
  active,
  toggleIsSendMail,
  changeValue,
  code,
  email,
  changeCorrectCode,
  correctCode,
  setEmailToken,
}: ITimerType) => {
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const [stopTimer, setStopTimer] = useState<boolean>(false);

  const sendCode = async () => {
    try {
      const req = await axios
        .post("http://localhost:8000/auth/check-auth-code", {
          code: code,
          email: email,
        })
        .then((res) => res.data);
      alert("코드 확인 완료");
      setEmailToken(req.access_token);
      changeCorrectCode();
      setStopTimer(true);
    } catch (e) {
      alert("잘못된 코드입니다.");
    }
  };
  useEffect(() => {
    let timer: any;
    if (active && !stopTimer) {
      if (stopTimer) clearInterval(timer);
      timer = setInterval(() => {
        if (Number(sec) > 0) {
          setSec(Number(sec) - 1);
        }
        if (Number(sec) === 0) {
          if (Number(min) === 0) {
            clearInterval(timer);
            alert("시간 초과");
            toggleIsSendMail();
            changeValue();
          } else {
            setMin(Number(min) - 1);
            setSec(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [min, sec]);
  return (
    <>
      {correctCode ? null : (
        <Timer
          type="button"
          value={`${min}:${sec < 10 ? `0${sec}` : sec}`}
          onClick={sendCode}
        />
      )}
    </>
  );
};

export default EmailCodeTimer;
