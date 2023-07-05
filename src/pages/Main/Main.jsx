import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import City from "../../components/City/City";
import Search from "../../components/Search/Search";
import styles from "../Main/Main.module.scss";

const Main = () => {
  const [cities, setCities] = React.useState([]);
  const [searchCity, setSearchCity] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

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

  const handleSearchCity = (event) => {
    const value = event.target.value;
    setSearchCity(value);

    const filteredCities = cities.filter((city) =>
      city.cityName.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredCities);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBlock}>
        <Search searchCity={searchCity} handleSearchCity={handleSearchCity} />
      </div>
      <div className={styles.cities}>
        {searchCity
          ? searchResults.map((city) => (
              <div key={city.id}>
                <Link
                  className={styles.nav}
                  to={`/city/${city.cityName}/${city.degree}/${city.typeWeather}`}
                >
                  <City city={city} />
                </Link>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};
export default Main;
