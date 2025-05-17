import { createContext, useContext } from "react";
export const RegionContext = createContext(false);
const useRegion = () => useContext(RegionContext);
export default useRegion;
