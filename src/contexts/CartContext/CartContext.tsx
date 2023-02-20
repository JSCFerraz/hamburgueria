import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { iChildren } from "../../interfaces/global";
import { iCartProviderValue, iCartCurrentSale } from "./types";

export const CartContext = createContext({} as iCartProviderValue);

export const CartProvider = ({ children }: iChildren) => {
  const [currentSale, setCurrentSale] = useState<iCartCurrentSale[]>([]);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [totalQuantityCart, setTotalQuantityCart] = useState(0);

  const addProductToCart = (
    prodId: number,
    prodName: string,
    prodCategory: string,
    prodPrice: number,
    prodImage: string
  ): void => {
    if (currentSale.length === 0) {
      const newItem = {
        prodId: prodId,
        prodName: prodName,
        prodCategory: prodCategory,
        prodPrice: prodPrice,
        prodImage: prodImage,
        prodQuantity: 1,
      };
      const newCartItem = [...currentSale, newItem];
      setCurrentSale(newCartItem);
      toast.success("Item adicionado com sucesso");
    } else {
      const itemInCart = currentSale.find((item) => item.prodId === prodId);
      if (itemInCart) {
        const itemInCartIndex = currentSale.indexOf(itemInCart);
        let cartItems = [...currentSale];
        cartItems[itemInCartIndex].prodQuantity += 1;
        setCurrentSale(cartItems);
        toast.success("Mais um item adicionado com sucesso");
      } else {
        const newItem = {
          prodId: prodId,
          prodName: prodName,
          prodCategory: prodCategory,
          prodPrice: prodPrice,
          prodImage: prodImage,
          prodQuantity: 1,
        };
        const newCartItem = [...currentSale, newItem];
        setCurrentSale(newCartItem);
        toast.success("Item adicionado com sucesso");
      }
    }
  };

  const addOneMoreProdToCart = (prodId: number): void => {
    const itemInCartIndex = currentSale.findIndex(
      (item) => item.prodId === prodId
    );
    let cartItems = [...currentSale];
    cartItems[itemInCartIndex].prodQuantity += 1;
    setCurrentSale(cartItems);
    toast.success("Mais um item adicionado com sucesso");
  };

  const removeOneProdFromCart = (prodId: number) => {
    const itemInCartIndex = currentSale.findIndex(
      (item) => item.prodId === prodId
    );
    let cartItems = [...currentSale];
    if (cartItems[itemInCartIndex].prodQuantity > 1) {
      cartItems[itemInCartIndex].prodQuantity -= 1;
      setCurrentSale(cartItems);

      toast.success("Um item reduzido com sucesso");
    } else {
      toast.info("Há um item apenas. Clique em Remover.");
    }
    calculateTotalCart();
  };

  const removeProductFromCart = (prodId: number) => {
    let newCurrentSale = currentSale.filter((item) => item.prodId !== prodId);
    setCurrentSale(newCurrentSale);
  };

  const removeAllItems = () => {
    setCurrentSale([]);
    setTotalQuantityCart(0);
    toast.success("Itens removidos com sucesso");
  };

  const calculateTotalCart = () => {
    const totalCart = currentSale.reduce((accumulator, currentValue) => {
      return currentValue.prodPrice * currentValue.prodQuantity + accumulator;
    }, 0);

    const totalQuantity = currentSale.reduce((accumulator, currentValue) => {
      return currentValue.prodQuantity + accumulator;
    }, 0);
    setTotalQuantityCart(totalQuantity);

    const localCurrencyTotal = totalCart.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    return localCurrencyTotal;
  };

  useEffect(() => {
    calculateTotalCart();
  }, [currentSale]);

  return (
    <CartContext.Provider
      value={{
        currentSale,
        openCartModal,
        totalQuantityCart,
        setOpenCartModal,
        addProductToCart,
        addOneMoreProdToCart,
        removeOneProdFromCart,
        removeProductFromCart,
        removeAllItems,
        calculateTotalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
