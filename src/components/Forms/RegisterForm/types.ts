export interface iRegisterValues {
  name: string;
  email: string;
  password: string;
}

export interface iRegisterFormValues extends iRegisterValues {
  passwordConfirmation: string;
}
