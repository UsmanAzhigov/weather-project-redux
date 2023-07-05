import React from "react";
import { Link } from "react-router-dom";
import City from "../../components/City/City";
import styles from "../Main/Main.module.scss";
import Search from "../../components/Search/Search";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchCities,
  setSearchCity,
  setSearchResults,
} from "../../redux/slice/citySlice";

const Main = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.data);
  const searchCity = useSelector((state) => state.cities.searchCity);
  const searchResults = useSelector((state) => state.cities.searchResults);

  React.useEffect(() => {
    dispatch(fetchCities());
  }, []);

  const handleSearchCity = (event) => {
    const value = event.target.value;
    dispatch(setSearchCity(value));

    const filteredCities = cities.filter((city) =>
      city.cityName.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(setSearchResults(filteredCities));
  };
  console.log(cities);

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
