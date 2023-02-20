import { RoutesMain as Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/Usercontext/UserContext";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <Routes />
      </UserProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
