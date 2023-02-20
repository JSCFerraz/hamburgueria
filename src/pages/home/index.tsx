import { CartModal } from "../../components/CartModal";
import { InputSearch } from "../../components/Forms/InputSearch";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { CartProvider } from "../../contexts/CartContext/CartContext";
import { ProductProvider } from "../../contexts/ProductContext/ProductContext";
import { Container } from "../../styles/containers";
import { StyledMainContainer, StyledProductListSection } from "./style";

export const HomePage = () => {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <Header />
          <main>
            <Container page="homepage">
              <StyledMainContainer>
                {window.screen.width < 500 ? <InputSearch /> : <></>}
                <StyledProductListSection>
                  <ProductList />
                </StyledProductListSection>
              </StyledMainContainer>
            </Container>
          </main>
          <CartModal />
        </CartProvider>
      </ProductProvider>
    </>
  );
};
