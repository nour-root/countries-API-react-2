import GetAllCountries from "../services/getAllCountries";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Card from "./card";
import useRegion from "../Context/regionContext";
import GetCountriesByRegion from "../services/getCountriesByRegion";
import useCountry from "../Context/countryContext";
import GetCountryByName from "../services/getCountryByName";
import useLoading from "../Context/loadingContext";

export default function Features() {
  const [countries, setCountries] = useState([]);
  const { region } = useRegion();
  const { name } = useCountry();
  const { loading, setLoading } = useLoading();
  useEffect(() => {
    if (name) {
      GetCountryByName(name)
        .then((data) => {
          setLoading(true);
          setCountries(data.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else if (region) {
      if (region !== "All") {
        GetCountriesByRegion(region)
          .then((data) => {
            setLoading(true);
            setCountries(data.data);
          })
          .catch((err) => console.error(err))
          .finally(() => setLoading(false));
      } else {
        GetAllCountries()
          .then((data) => {
            setCountries(data);
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }
    } else {
      GetAllCountries()
        .then((data) => {
          setCountries(data);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

    return () => {
      setCountries([]);
    };
  }, [region, name]);
  return (
    <section className="grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin  dark:text-white  text-[100px] absolute transform -translate-1/2 left-1/2 top-1/2" />
      ) : (
        countries.map((c) => (
          <Card key={c.name.common + "-" + c.name.official} country={c} />
        ))
      )}
    </section>
  );
}
