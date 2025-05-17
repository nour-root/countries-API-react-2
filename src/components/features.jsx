import GetAllCountries from "../services/getAllCountries";
import { useEffect, useState } from "react";
import Card from "./card";
export default function Features() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    GetAllCountries().then((data) => {
      console.log(data);
      setCountries(data);
    });
    return () => {
      setCountries([]);
    };
  }, []);
  return (
    <section className="grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
      {countries.map((c) => (
        <Card key={c.name.common + "-" + c.name.official} country={c} />
      ))}
    </section>
  );
}
