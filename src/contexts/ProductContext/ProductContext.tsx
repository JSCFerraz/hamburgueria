import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { iChildren } from "../../interfaces/global";
import { api } from "../../services/api";
import {
  iProductProviderValue,
  iProductItem,
  iDefaultProductErrorResponse,
} from "./types";

export const ProductContext = createContext({} as iProductProviderValue);

export const ProductProvider = ({ children }: iChildren) => {
  const [products, setProducts] = useState([] as iProductItem[]);
  const [filteredProducts, setFilteredProducts] = useState(
    [] as iProductItem[]
  );
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@Kenziehub:token");
    const getProducts = async () => {
      try {
        setLoadingProducts(true);
        const response = await api.get(`/products`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error(error);
        const currentError = error as AxiosError<iDefaultProductErrorResponse>;
        toast.error(`Ops! Algo deu errado: ${currentError.response?.data}`);
      } finally {
        setLoadingProducts(false);
      }
    };
    getProducts();
  }, []);

  const filterSearchedProducts = (data: string) => {
    const searchedProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(data.toLowerCase()) ||
        product.category.toLowerCase().includes(data.toLowerCase())
    );
    setFilteredProducts(searchedProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        showSearchInput,
        loadingProducts,
        setShowSearchInput,
        filterSearchedProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
