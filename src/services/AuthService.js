import http from "./HttpCommon";
const Login = async (data) => await http.post("/auth/login", data);
export const AuthService = {
  Login,
};
