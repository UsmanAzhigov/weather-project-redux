import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCities = createAsyncThunk("cities/fetchCities", async () => {
  try {
    const response = await axios.get(
      "https://76e7bf6bc395f60b.mokky.ru/cities"
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
});

const citySlice = createSlice({
  name: "cities",
  initialState: {
    data: [],
    searchCity: "",
    searchResults: [],
    cities: [],
  },
  reducers: {
    setCities: (state, action) => {
      state.data = action.payload;
    },
    setSearchCity: (state, action) => {
      state.searchCity = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchCity, setSearchResults, setCities } = citySlice.actions;

export default citySlice.reducer;
