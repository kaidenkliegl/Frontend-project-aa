import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.message) {
          setErrors(data);
        }
      });
  };


  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <h1 className="formItem">Log In</h1>
      <br />
      {errors && <p className="error-text">{errors.message}</p>}
      <input
        type="text"
        placeholder="Username or Email"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
        className="formItem"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="formItem"
      />

      {errors.credential && <p>{errors.credential}</p>}
      <button type="submit" className="formItem" disabled={password.length < 6 || credential < 4}
      >
        Log In
      </button>
    </form>
  );
}

export default LoginFormModal;
