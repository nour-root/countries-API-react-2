export default function Card({ country }) {
  return (
    <div className="bg-primary h-[400px] rounded flex overflow-hidden flex-col gap-4 shadow transform transition-all duration-200 cursor-pointer hover:shadow-lg hover:-translate-y-1">
      <img
        src={`${country.flags.png}`}
        className="h-1/2"
        alt={country.flags.alt}
      />
      <div className="flex flex-col gap-4 px-6 py-2">
        <h2 className="text-xl font-semibold ">{country.name.common}</h2>
        <div className="space-y-2">
          <div className="flex gap-2">
            <p className="capitalize ">population:</p>
            <span className="text-Text">
              {parseFloat(country.population).toLocaleString()}
            </span>
          </div>
          <div className="flex gap-2">
            <p className="capitalize ">Region:</p>
            <span className="text-Text">{country.region}</span>
          </div>
          <div className="flex gap-2">
            <p className="capitalize ">Capital:</p>
            <span className="text-Text">{country.capital}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
