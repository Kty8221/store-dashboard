import { useState } from "react";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";

function App() {
  // 로그인 상태를 저장하는 state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 성공 시 대시보드로 넘어가기 위한 함수
  const handleLogin = ({ id, password}) => {
    // 지금은 백엔드와 연결을 안했으므로,
    // 아이디와 비밀번호가 비어있지 않으면 로그인 성공처럼 처리
    if (id.trim() && password.trim()) {
      setIsLoggedIn(true)
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <DashboardPage />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </>
  )
}

export default App;