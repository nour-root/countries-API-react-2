import { createContext, useContext } from "react";
export const LoadingContext = createContext(true);
const useLoading = () => useContext(LoadingContext);
export default useLoading;
