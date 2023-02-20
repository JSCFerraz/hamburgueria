import { LoginForm } from "../../components/Forms/LoginForm";
import {
  StyledBoxIcon,
  StyledEllipsesGroupImg,
  StyledPageSideInfo,
  StyledLoginDiv,
  StyledLoginFormDiv,
  StyledMessageDiv,
} from "./style";
import logo from "./../../assets/img/logo.svg";
import ellipsesGroup from "./../../assets/img/ellipsesGroup.svg";
import { AiOutlineInbox } from "react-icons/ai";

export const Login = () => {
  return (
    <main>
      <StyledLoginDiv>
        <StyledLoginFormDiv>
          <LoginForm />
        </StyledLoginFormDiv>
        <StyledPageSideInfo>
          <img src={logo} alt="Imagem do logo" />
          <StyledMessageDiv>
            <StyledBoxIcon>
              <AiOutlineInbox />
            </StyledBoxIcon>
            <p>
              A vida é como um sanduiche, é preciso recheá-la com os
              <strong> melhores </strong>
              ingredientes
            </p>
          </StyledMessageDiv>
          <StyledEllipsesGroupImg>
            <img src={ellipsesGroup} alt="Imagem elipses" />
          </StyledEllipsesGroupImg>
        </StyledPageSideInfo>
      </StyledLoginDiv>
    </main>
  );
};
