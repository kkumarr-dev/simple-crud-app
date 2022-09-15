import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { LoaderContext } from "../Contexts";
import { removeToken } from "../services";
import { AppLoader } from "./AppLoader";
const outLetStyle = {
  marginTop: "80px",
};
const Layout = () => {
  const [loader, setLoader] = useState(0);
  const initLoader = (e) => {
    setLoader(e);
  };
  return (
    <>
      <LoaderContext.Provider
        value={{ loader: loader, initLoader: initLoader }}
      >
        <nav className="navbar navbar-expand-sm bg-light navbar-light fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              REACT
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="dashboard" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="users" className="nav-link">
                    Users
                  </Link>
                </li>
              </ul>
              <div className="flex-grow-1 "></div>
              <div className="me-3">
                <i
                  className="fa fa-power-off"
                  aria-hidden="true"
                  onClick={() => removeToken()}
                ></i>
              </div>
            </div>
          </div>
        </nav>
        <div className="container-fluid" style={outLetStyle}>
          <div className="row">
            {loader ? <AppLoader /> : ""}
            <Outlet />
          </div>
        </div>
      </LoaderContext.Provider>
    </>
  );
};

export default Layout;
