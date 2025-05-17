import Header from "../components/header";
import Main from "../components/main";
import useStatePage from "../Context/stateContext";
import DetailsPage from "./detailsPage";
import { CountryNameContext } from "../Context/countryNameContext";
import { useState } from "react";
import { LoadingContext } from "../Context/loadingContext";

export default function MainPage() {
  const { state } = useStatePage();
  const [CountryName, setCountryName] = useState("");
  const [loading, setLoading] = useState(true);
  return (
    <>
      <CountryNameContext.Provider value={{ CountryName, setCountryName }}>
        <Header />
        <LoadingContext.Provider value={{ loading, setLoading }}>
          {state ? <DetailsPage /> : <Main />}
        </LoadingContext.Provider>
      </CountryNameContext.Provider>
    </>
  );
}
