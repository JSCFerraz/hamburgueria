import { AiOutlineInbox } from "react-icons/ai";
import {
  StyledRegDiv,
  StyledRegPageSideInfo,
  StyledMessageDiv,
  StyledBoxIcon,
  StyledEllipsesGroupImg,
  StyledRegFormDiv,
} from "./style";
import logo from "./../../assets/img/logo.svg";
import ellipsesGroup from "./../../assets/img/ellipsesGroup.svg";
import { RegisterForm } from "../../components/Forms/RegisterForm";

export const Register = () => {
  return (
    <main>
      <StyledRegDiv>
        <StyledRegPageSideInfo>
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
        </StyledRegPageSideInfo>
        <StyledRegFormDiv>
          <RegisterForm />
        </StyledRegFormDiv>
      </StyledRegDiv>
    </main>
  );
};
