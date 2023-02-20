import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  iUserProviderProps,
  iUserInformation,
  iUserLoginInformation,
  iUserRegisterInformation,
  iDefaultErrorResponse,
} from "./types";
import { iChildren } from "../../interfaces/global";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export const UserContext = createContext({} as iUserProviderProps);

export const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState({
    id: 0,
    name: "",
    email: "",
  } as iUserInformation);
  const [loading, setLoading] = useState(false);
  const [loadingHomePage, setLoadingHomePage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@Kenziehub:token");
    const userId = localStorage.getItem("@Kenziehub:userid");
    async function loadUser() {
      if (!token) {
        setLoadingHomePage(false);
        return;
      } else {
        try {
          setLoadingHomePage(true);
          const { data } = await api.get(`/users/${userId}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          navigate("/homepage");
        } catch (error) {
          localStorage.clear();
          navigate("/");
          console.error(error);
        } finally {
          setLoadingHomePage(false);
        }
      }
    }

    loadUser();
  }, []);

  const signInUser = async (formData: iUserLoginInformation) => {
    try {
      setLoading(true);
      const response = await api.post("/login", formData);
      toast.success("Usuário logado com sucesso");
      const { accessToken, user: userResponse } = response.data;
      window.localStorage.clear();
      window.localStorage.setItem("@Kenziehub:token", accessToken);
      window.localStorage.setItem("@Kenziehub:userid", userResponse.id);
      setUser(userResponse);
      navigate("/homepage");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${currentError.response?.data}`);
    } finally {
      setLoading(false);
    }
  };

  async function registerUser(
    formData: iUserRegisterInformation,
    reset: () => void
  ) {
    try {
      const response = await api.post("/users", formData);
      response.statusText === "Created" &&
        toast.success("Conta criada com sucesso");
      navigate("/");
      setLoading(false);
      reset();
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(error);
      toast.error(`Ops! Algo deu errado: ${currentError.response?.data}`);
    } finally {
      setLoading(false);
      reset();
    }
  }
  const logoutUser = () => {
    window.localStorage.clear();
    setUser({
      id: 0,
      name: "",
      email: "",
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        signInUser,
        loading,
        setLoading,
        loadingHomePage,
        registerUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
