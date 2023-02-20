import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { StyledText } from "../styles/typography";
import { UserContext } from "../contexts/Usercontext/UserContext";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { HomePage } from "../pages/home";

export const RoutesMain = () => {
  const { loadingHomePage } = useContext(UserContext);
  if (loadingHomePage) {
    return (
      <StyledText tag="h2" textStyle="title1" textColor="primary">
        Carregando...
      </StyledText>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/homepage" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
