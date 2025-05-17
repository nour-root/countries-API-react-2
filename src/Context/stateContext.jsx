import { createContext, useContext } from "react";
export const StateContext = createContext(false);
const useStatePage = () => useContext(StateContext);
export default useStatePage;
