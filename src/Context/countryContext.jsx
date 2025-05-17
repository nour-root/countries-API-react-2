import { createContext, useContext } from "react";
export const CountryContext = createContext(false);
const useCountry = () => useContext(CountryContext);
export default useCountry;
