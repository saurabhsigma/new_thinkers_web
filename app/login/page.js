import React from 'react';
import styles from '../auth.module.css'; // Import the CSS module

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Log In</h1>
        <form className={styles.form}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" className={styles.input} required />

          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" id="password" name="password" className={styles.input} required />

          <button type="submit" className={styles.button}>Log In</button>
        </form>
        <p className={styles.redirect}>
          Don't have an account? <a href="/signup" className={styles.link}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;






