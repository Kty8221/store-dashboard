import "./LoginPage.css";

function LoginPage({ onLogin }) {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">편의점 운영자 로그인</h1>
        <p className="login-text">ID와 비밀번호를 입력하세요.</p>

        <input className="login-input" type="text" placeholder="아이디" />
        <input className="login-input" type="password" placeholder="비밀번호" />

        <button className="login-button" onClick={onLogin}>
          로그인
        </button>
      </div>
    </div>
  );
}

export default LoginPage;