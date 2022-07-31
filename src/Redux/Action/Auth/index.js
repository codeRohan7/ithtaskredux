import { GET_LOGIN,ADD_PRODUCT,LOGOUT } from "./AuthConstant";

export const userLoginSubmit = (value) => {
    const type = GET_LOGIN;
    return { type,value };
  };

  export const addProductList = (value) => {
    const type = ADD_PRODUCT;
    return { type,value };
  };

  export const LogoutAction = () => {
    const type = LOGOUT;
    return { type };
  };

