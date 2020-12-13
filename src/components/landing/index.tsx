import { Font, FontType } from "fonts";
import React from "react";
import styles from "./styles.module.css";

const onContactClick = () => {
  window.location.href = "mailto:hello@9.agency";
};

const LandingPage = () => (
  <div className={styles.container}>
    <div className={styles.content_container}>
      <Font fontType={FontType.headline1}>web development and design</Font>
    </div>
  </div>
);

export default LandingPage;
