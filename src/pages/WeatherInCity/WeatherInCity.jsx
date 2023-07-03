import React from "react";
import axios from "axios";
import clsx from "clsx";
import styles from "./WeatherInCity.module.scss";
import { useParams } from "react-router-dom";

const WeatherInCity = () => {
  const [cities, setCities] = React.useState([]);
  const { cityName, degree, typeWeather } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://76e7bf6bc395f60b.mokky.ru/cities"
        );

        setCities(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={clsx(
          styles.weatherBlock,
          typeWeather === "Облачно" ? styles.weatherCloudy : "",
          typeWeather === "Жарко" ? styles.weatherHot : "",
          typeWeather === "Снег" ? styles.weatherSnowy : "",
          typeWeather === "Дождливо" ? styles.weatherRainy : ""
        )}
      >
        <div className={styles.iconWeather}>
          <h1>{degree}°</h1>
          <h2>{typeWeather}</h2>
          <h3>{cityName}</h3>
        </div>
      </div>
      <div className={styles.weatherDay}>
        {cities.map((city) => (
          <div key={city.id}>
            <ul>
              <li>
                <div className={styles.nameCity}>
                  <h3>{city.dayOfWeek}</h3>
                  <p>{city.typeWeather}</p>
                </div>
                <div className={styles.infoCity}>
                  <h2>{city.degree}°</h2>
                  <h2> {city.icon}</h2>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WeatherInCity;
