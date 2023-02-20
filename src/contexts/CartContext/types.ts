export interface iCartProduct {
  prodId: number;
  prodName: string;
  prodCategory: string;
  prodPrice: number;
  prodImage: string;
}

export interface iCartCurrentSale extends iCartProduct {
  prodQuantity: number;
}

export interface iCartProviderValue {
  addProductToCart: (
    prodId: number,
    prodName: string,
    prodCategory: string,
    prodPrice: number,
    prodImage: string
  ) => void;
  currentSale: iCartCurrentSale[];
  openCartModal: boolean;
  totalQuantityCart: number;
  setOpenCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  addOneMoreProdToCart: (prodId: number) => void;
  removeOneProdFromCart: (prodId: number) => void;
  removeProductFromCart: (prodId: number) => void;
  removeAllItems: () => void;
  calculateTotalCart: () => string;
}
