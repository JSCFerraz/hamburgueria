export interface iProductItem {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iProductProviderValue {
  products: iProductItem[];
  filteredProducts: iProductItem[];
  showSearchInput: boolean;
  loadingProducts: boolean;
  setShowSearchInput: React.Dispatch<React.SetStateAction<boolean>>;
  filterSearchedProducts: (data: string) => void;
}

export interface iDefaultProductErrorResponse {
  error: string;
}
