export interface iUserContextProps {
  children: React.ReactNode;
}

export interface iUserLoginInformation {
  email: string;
  password: string;
}

export interface iUserInformation {
  name: string;
  email: string;
  id: number;
}

export interface iUserRegisterInformation extends iUserLoginInformation {
  password: string;
}

export interface iUserProviderProps {
  user: iUserInformation;
  signInUser: (formData: iUserLoginInformation) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingHomePage: boolean;
  registerUser: (formData: iUserRegisterInformation, reset: () => void) => void;
  logoutUser: () => void;
}

export interface iDefaultErrorResponse {
  error: string;
}
