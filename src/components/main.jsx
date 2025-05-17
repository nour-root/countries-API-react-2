import Features from "./features";
import Search from "./search";
import { useState } from "react";
import { RegionContext } from "../Context/regionContext";
import { CountryContext } from "../Context/countryContext";
export default function Main() {
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      <CountryContext.Provider value={{ name, setName }}>
        <main className="p-10">
          <Search />
          <Features />
        </main>
      </CountryContext.Provider>
    </RegionContext.Provider>
  );
}
