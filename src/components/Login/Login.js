import { useState } from "react";
import { AuthService } from "../../services";
import "./Login.css";
export const Login = ({ setToken }) => {
  const [username, setUserName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let params = {
      username,
      password,
    };
    await AuthService.Login(params)
      .then((res) => {
        if (res.status === 200) {
          setToken(res.data.token);
          window.location.reload();
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err);
      });
  };
  return (
    <>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h2 class="text-center">Log in</h2>
          <div class="form-group mb-3">
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
              required="required"
            />
          </div>
          <div class="form-group mb-3">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required="required"
            />
          </div>
          <div class="form-group d-grid mb-3">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
