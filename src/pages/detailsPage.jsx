import useStatePage from "../Context/stateContext";
import Details from "../components/details";
import useCountryName from "../Context/countryNameContext";
import { useEffect, useState } from "react";
import GetCountryByName from "../services/getCountryByName";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";

export default function DetailsPage() {
  const { setState } = useStatePage();
  const { CountryName } = useCountryName();
  const [city, setCity] = useState();
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setState(false);
  };
  useEffect(() => {
    GetCountryByName(CountryName)
      .then((data) => {
        setCity(data.data[0]);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [CountryName]);
  return (
    <div className="p-10">
      <div>
        <button
          onClick={handleClick}
          className="capitalize bg-primary shadow px-4 py-2 flex items-center rounded font-semibold cursor-pointer"
        >
          <GoArrowLeft className="mr-3" />
          Back
        </button>
      </div>
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin  text-[100px] absolute transform -translate-1/2 left-1/2 top-1/2" />
      ) : (
        <Details country={city} />
      )}
    </div>
  );
}
