import React from "react";
import styles from "./Search.module.scss";

function Search({ searchCity, handleSearchCity }) {
  return (
    <div className={styles.searchInput}>
      <input
        value={searchCity}
        onChange={handleSearchCity}
        className={styles.input}
        type="text"
        placeholder="Введите город..."
      />
    </div>
  );
}

export default Search;
