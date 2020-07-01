import React, { Component } from "react";
import styles from "./LogInBox.module.scss";
import Button from "../Button"
import logo from "../../assets/intergr8-logo.jpg";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faUser, faLock);

class LogInBox extends Component {
  render() {
    return (
      <section className={styles.logInPage}>
        <div className={styles.logInWrapper}>
          <div className={styles.box}>
            <div className={styles.welcomePanel}>
              <div className={styles.welcomeContent}>
                <h2>Built by HR professionals,
                  <span className={styles.primaryYellow}>for HR professionals.
                  </span>
                </h2>
                <p>
                  Our <span>Assist</span> portal platform has a wide range of features that seek to enhance HR practices within your organisation and create a centralised repository for employee requests and manage HR staff activity in a simple and easy way.
                </p>
              </div>
            </div>
            <div className={styles.loginPanel}>
              <div className={styles.logInContent}>
                <div className={styles.logInTitle}>
                  <img src={logo} alt="intergr8HRM" />
                </div>
                <div className={styles.formSection}>
                  <form>
                    <div className={styles.inputWrapper}>
                      <input id="email" className={styles.email} type="text" name="username" placeholder="Email" />
                      <label htmlFor="email">
                        <FontAwesomeIcon icon="user" />
                      </label>
                    </div>
                    <div className={styles.inputWrapper}>
                      <input id="password" className={styles.password} type="password" name="password" placeholder="Password" />
                      <label htmlFor="password">
                        <FontAwesomeIcon icon="lock" />
                      </label>
                    </div>
                    <Button text="Sign In" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LogInBox;