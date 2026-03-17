import { useState } from "react";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <DashboardPage />
      ) : (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;