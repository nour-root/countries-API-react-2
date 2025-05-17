import GetAllCountries from "../services/getAllCountries";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Card from "./card";
export default function Features() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetAllCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    return () => {
      setCountries([]);
    };
  }, []);
  return (
    <section className="grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin  text-[100px] absolute transform -translate-1/2 left-1/2 top-1/2" />
      ) : (
        countries.map((c) => (
          <Card key={c.name.common + "-" + c.name.official} country={c} />
        ))
      )}
    </section>
  );
}
