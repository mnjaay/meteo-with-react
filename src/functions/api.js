// src/weatherApi.js
import axios from 'axios';


export const fetchPosts = async (localite) => {
  try {
    const KEY = "2d6726ad5d2d720c3b0db1b3537c8d9a";

    const API_BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${localite}&units=metric&appid=${KEY}`;

    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
