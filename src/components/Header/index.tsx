import logo from "./../../assets/img/logo.svg";
import {
  StyledHeader,
  StyledHeaderContents,
  StyledIconDiv,
  StyledRightColumn,
} from "./style";
import { InputSearch } from "../Forms/InputSearch";
import { Container } from "../../styles/containers";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { Button } from "../Button";
import { CartContext } from "../../contexts/CartContext/CartContext";

export const Header = () => {
  const { totalQuantityCart } = useContext(CartContext);

  return (
    <StyledHeader>
      <Container page="homepage">
        <StyledHeaderContents>
          <img src={logo} alt="Imagem do logo" />
          <StyledRightColumn>
            {window.screen.width > 500 ? <InputSearch /> : <></>}
            <StyledIconDiv>
              <Button type="modal" buttonStyle="icon">
                <FaShoppingCart />
              </Button>
              <span>{totalQuantityCart}</span>
            </StyledIconDiv>
            <Button type="logout" buttonStyle="icon">
              <FiLogOut />
            </Button>
          </StyledRightColumn>
        </StyledHeaderContents>
      </Container>
    </StyledHeader>
  );
};
