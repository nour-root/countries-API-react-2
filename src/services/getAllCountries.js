import axios from "axios";
export default async function GetAllCountries() {
  const response = await axios.get(`https://restcountries.com/v3.1/all`);
  return response.data;
}
