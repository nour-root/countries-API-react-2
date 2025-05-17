import { createContext, useContext } from "react";
export const CountryNameContext = createContext();
const useCountryName = () => useContext(CountryNameContext);
export default useCountryName;
