import axios from "axios";

export const FETCH_ASTEROIDS = "fetch_asteroids";
export const FETCH_DAILY_IMAGE = "fetch_daily_image";

const ROOT_URL = "https://api.nasa.gov/neo/rest/v1/feed?";
const ROOT_URL_IMAGE = "https://api.nasa.gov/planetary/apod";
const API_KEY = "?api_key=ogDlZiQab5aU06lgFuCkvuSR3TRoVRI1Qd4Ior9X";

export function fetchAsteroids(startDate, endDate) {

  const request = axios.get(`${ROOT_URL}${startDate}${endDate}${API_KEY}`);

  return {
    type: FETCH_ASTEROIDS,
    payload: request
  };
}

export function fetchDailyImage() {

  const request = axios.get(`${ROOT_URL_IMAGE}${API_KEY}`);

  return {
    type: FETCH_DAILY_IMAGE,
    payload: request
  };
}