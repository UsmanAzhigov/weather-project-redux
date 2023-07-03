import React from "react";
import styles from "../City/City.module.scss";

const City = ({ city }) => {
  console.log(city);

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <div className={styles.nameCity}>
            <h3>{city.cityName}</h3>
            <p>{city.typeWeather}</p>
          </div>
          <div className={styles.infoCity}>
            <h2>{city.degree}°</h2>
            <h2> {city.icon}</h2>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default City;
