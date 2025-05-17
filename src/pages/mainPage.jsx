import Header from "../components/header";
import Main from "../components/main";
import useStatePage from "../Context/stateContext";
import DetailsPage from "./detailsPage";
import { CountryNameContext } from "../Context/countryNameContext";
import { useState } from "react";

export default function MainPage() {
  const { state } = useStatePage();
  const [CountryName, setCountryName] = useState("");
  return (
    <>
      <CountryNameContext.Provider value={{ CountryName, setCountryName }}>
        <Header />
        {state ? <DetailsPage /> : <Main />}
      </CountryNameContext.Provider>
    </>
  );
}
