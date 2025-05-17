import axios from "axios";
export default async function GetCountryByRegion(region) {
  const response = await axios.get(
    `https://restcountries.com/v3.1/region/${region}`
  );
  return response;
}
