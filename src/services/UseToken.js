import { useEffect, useState } from "react";

export const UseToken = () => {
  const getToken = () => localStorage.getItem("token");
  const [token, setToken] = useState(getToken());
  useEffect(() => {}, [token]);
  const saveToken = (tkn) => {
    localStorage.setItem("token", JSON.stringify(tkn));
    setToken(tkn.token);
  };
  return {
    setToken: saveToken,
    token,
  };
};

export const removeToken = () => {
  localStorage.removeItem("token");
  window.location.reload();
};
