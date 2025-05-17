import { createContext, useContext } from "react";
export const CountryContext = createContext();
const useCountry = () => useContext(CountryContext);
export default useCountry;
