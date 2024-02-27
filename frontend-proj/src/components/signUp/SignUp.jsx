import React from "react";
import styles from "./signUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.body}>
      <h1>Sign up and get exclusive special deals</h1>
      <div className={styles.signupInput}>
        <input
          className={styles.signUpBar}
          type="text"
          name=""
          id=""
          placeholder="Enter Email"
        />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
