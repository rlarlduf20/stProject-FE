import RegisterText from "./RegisterText";
import RegisterBox from "./RegisterBox";

const RegisterMain = () => {
  return (
    <main style={{ marginTop: "5.9375rem", padding: 0 }}>
      <RegisterText />
      <div
        style={{
          width: "100vw",
          height: "auto",
          background: "#f2f2f2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1.5rem",
        }}
      >
        <RegisterBox />
      </div>
    </main>
  );
};

export default RegisterMain;
