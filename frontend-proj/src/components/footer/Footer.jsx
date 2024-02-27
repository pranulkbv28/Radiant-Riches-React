import styles from "./footer.module.css";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Footer = () => {
  return (
    <div className={styles.body}>
      <div>
        <div className={styles.categories}>
          <h3>CATEGORIES</h3>
          <ul>
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>CONTACT</h3>
          <ul>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div>
        United States <KeyboardArrowDownIcon />
      </div>
    </div>
  );
};

export default Footer;
