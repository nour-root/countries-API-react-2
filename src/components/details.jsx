import axios from "axios";
import { useEffect, useState } from "react";
import useCountryName from "../Context/countryNameContext";

export default function Details({ country }) {
  const [borderCountries, setBorderCountries] = useState([]);
  const { setCountryName } = useCountryName();
  function handleClick(c) {
    setCountryName(c.name.common);
  }
  useEffect(() => {
    if (
      country !== "undefined" &&
      country.borders &&
      country.borders.length > 0
    ) {
      const fetchBorderCountries = async () => {
        try {
          const codes = country.borders.join(",");
          const response = await axios.get(
            `https://restcountries.com/v3.1/alpha?codes=${codes}`
          );
          setBorderCountries(response.data);
        } catch (error) {
          console.error("Error fetching border countries", error);
        }
      };
      fetchBorderCountries();
    } else {
      setBorderCountries([]);
    }
  }, [country]);
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 w-full py-10 gap-10  dark:text-white">
      <img
        src={`${country.flags.png}`}
        className="w-full h-full border  border-Text"
        alt={`${country.flags.alt}`}
      />
      <div className="space-y-8">
        <h2 className=" text-2xl font-bold">{country.name.common}</h2>
        <div className="grid grid-cols-2 gap-10">
          <div className="text-lg flex-col space-y-3 ">
            <p>
              Native Name:
              <span className="text-Text">
                {" " +
                  Object.values(country.name.nativeName).map(
                    (n) => `${n.common}`
                  )}
              </span>
            </p>
            <p>
              Population:
              <span className="text-Text">
                {" " + parseInt(country.population).toLocaleString()}
              </span>
            </p>
            <p>
              Region:
              <span className="text-Text">{" " + country.region}</span>
            </p>
            <p>
              Sub Region:
              <span className="text-Text">{" " + country.subregion}</span>
            </p>
            <p>
              Capital:
              <span className="text-Text">{" " + country.capital}</span>
            </p>
          </div>
          <div className="space-y-1 ">
            <div className="text-lg flex-col space-y-3">
              <p>
                Top Level Domain:
                <span className="text-Text"> {country.tld[0]}</span>
              </p>
              <p>
                Currencies:
                <span className="text-Text">
                  {" "}
                  {Object.values(country.currencies).map((c) => `${c.symbol}`)}
                </span>
              </p>
              <p>
                Language:
                <span className="text-Text">
                  {" " + Object.values(country.languages).map((l) => ` ${l} `)}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full max-md:flex-wrap">
          <h2 className="text-xl font-semibold max-md:mb-4 ">
            Border Countries :
          </h2>
          <div className="flex gap-3 ml-1 max-md:w-full justify-center flex-wrap">
            {borderCountries.length > 0 ? (
              borderCountries.map((borderCountry) => (
                <div
                  onClick={() => handleClick(borderCountry)}
                  className="cursor-pointer"
                  key={
                    borderCountry.name.common +
                    "-" +
                    borderCountry.name.official
                  }
                  to={`/${borderCountry.name.common}`}
                >
                  <span className="border border-slate-300 hover:bg-slate-200 duration-150 px-5 py-1 text-center h-fit text-Text">
                    {borderCountry.name.common}
                  </span>
                </div>
              ))
            ) : (
              <p className=""> &nbsp; No border countries</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
