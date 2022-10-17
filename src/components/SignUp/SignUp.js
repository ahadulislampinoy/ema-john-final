import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (password !== confirm) {
      setError("Password didn't matched");
      return;
    }
    // ! create user
    createUser(email, confirm)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(null);
        form.reset();
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className={styles.formContainer}>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>
          <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" required />
          </div>
          <p className={styles.errorMsg}>{error}</p>
          <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account?<span> </span>
          <Link to="/login" className="signup-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
