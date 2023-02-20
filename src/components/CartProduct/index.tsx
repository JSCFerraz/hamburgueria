import {
  StyledCartProduct,
  StyledProductDetails,
  StyledQuantity,
} from "./style";
import { StyledText } from "../../styles/typography";
import { StyledButton } from "../../styles/buttons";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { iCartProducts } from "./types";

export const CartProduct = ({
  id,
  name,
  category,
  image,
  quantity,
}: iCartProducts) => {
  const { addOneMoreProdToCart, removeOneProdFromCart, removeProductFromCart } =
    useContext(CartContext);

  return (
    <StyledCartProduct>
      <img src={image} alt="produto" />
      <StyledProductDetails>
        <StyledText tag="h3" textStyle="title2" textColor="grey">
          {name}
        </StyledText>
        <StyledText tag="p" textStyle="categoryCart">
          {category}
        </StyledText>
        <StyledQuantity>
          <StyledButton
            buttonSize="counter"
            onClick={() => removeOneProdFromCart(id)}
          >
            <SlArrowDown />
          </StyledButton>
          <StyledText tag="span" textStyle="quantity">
            {quantity}
          </StyledText>
          <StyledButton
            buttonSize="counter"
            onClick={() => addOneMoreProdToCart(id)}
          >
            <SlArrowUp />
          </StyledButton>
        </StyledQuantity>
      </StyledProductDetails>
      <StyledButton buttonSize="icon" onClick={() => removeProductFromCart(id)}>
        <FaTrashAlt />
      </StyledButton>
    </StyledCartProduct>
  );
};
