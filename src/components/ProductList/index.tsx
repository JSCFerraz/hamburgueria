import { StyledProductList, StyledNoProductsFound } from "./style";
import { StyledText } from "../../styles/typography";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext/ProductContext";
import { Product } from "../ProductCard";

export const ProductList = () => {
  const { filteredProducts } = useContext(ProductContext);
  const isEmpty = filteredProducts.length;

  return (
    <>
      {isEmpty ? (
        <>
          <StyledProductList>
            {filteredProducts.map((product, index) => (
              <Product
                key={index}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                image={product.img}
              ></Product>
            ))}
          </StyledProductList>
        </>
      ) : (
        <StyledNoProductsFound>
          <StyledText tag="span">Nenhum produto encontrado...</StyledText>
        </StyledNoProductsFound>
      )}
    </>
  );
};
