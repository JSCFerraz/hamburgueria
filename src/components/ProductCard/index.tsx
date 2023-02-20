import { StyledProduct } from "./style";
import { StyledText } from "../../styles/typography";
import { StyledButton } from "../../styles/buttons";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { iProduct } from "./types";

export const Product = ({ id, name, category, price, image }: iProduct) => {
  const { addProductToCart } = useContext(CartContext);

  const localCurrencyPrice = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <StyledProduct>
      <img src={image} alt="" />
      <StyledText tag="h3" textStyle="title1">
        {name}
      </StyledText>
      <StyledText tag="p" textStyle="title3">
        {category}
      </StyledText>
      <StyledText tag="span" textStyle="title2" textColor="primary">
        {localCurrencyPrice}
      </StyledText>
      <StyledButton
        buttonSize="addToCart"
        onClick={() => {
          addProductToCart(id, name, category, price, image);
        }}
      >
        Adicionar
      </StyledButton>
    </StyledProduct>
  );
};
