import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./Layout";
import { UseToken } from "../services";
import { Dashboard, Login, Users } from "../components";
export const App = () => {
  const { setToken, token } = UseToken();
  if (!token) return <Login setToken={setToken} />;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
