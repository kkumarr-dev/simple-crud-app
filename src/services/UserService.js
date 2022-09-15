import http from "./HttpCommon";

const Users = async () => await http.get("/users");

export const UserService = {
  Users,
};
