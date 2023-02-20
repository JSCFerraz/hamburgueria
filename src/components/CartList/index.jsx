import { CartProduct } from "../CartProduct";
import { StyledCartList } from "./style";
import { EmptyCart } from "./style";
import { StyledText } from "../../styles/typography";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { useContext } from "react";

export const CartList = () => {
  const { currentSale } = useContext(CartContext);
  const isNotEmpty = currentSale.length;

  return (
    <>
      {isNotEmpty ? (
        <>
          <StyledCartList>
            {currentSale.map((product, index) => (
              <CartProduct
                key={index}
                id={product.prodId}
                name={product.prodName}
                category={product.prodCategory}
                image={product.prodImage}
                quantity={product.prodQuantity}
              ></CartProduct>
            ))}
          </StyledCartList>
        </>
      ) : (
        <EmptyCart>
          <StyledText tag="span" textStyle="emptyCart1">
            Seu carrinho está vazio
          </StyledText>
          <StyledText tag="span" textStyle="emptyCart2">
            Adicione produtos
          </StyledText>
        </EmptyCart>
      )}
    </>
  );
};
