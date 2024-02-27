import React from "react";
import styles from "./navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBar}
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Search..."
        />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className={styles.menuItems}>
        <p className={styles.menuItem}>Categories</p>
        <p className={styles.menuItem}>Website Builder</p>
        <p className={styles.menuItem}>Today's deals</p>
      </div>
    </div>
  );
};

export default Navbar;
