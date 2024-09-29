import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postCountry";
import Loader from "./Loader";
import './countryDetails.css';
import { FaArrowLeft } from "react-icons/fa";


export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }

      console.log(Object.keys(res.data[0].name.nativeName));
    });
  }, []);

  if (isPending) return <Loader />;

  // console.log(params);
  return (
    <section className="commonMrgin w70">
      <div className="flex colomn">
        {country && (
          <div className="flex wrap detailSection ">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="countryLogoBig"
            />
            <div className="flex  colomn center details">
              <p className="card-title"> {country.name.official} </p>

              <div className=" flex colomn infoContainer">
                <p>
                  <span className="spn fwait'"> Native Names: </span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="spn fwait"> Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="spn fwait"> Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="spn fwait'"> Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span className="spn fwait"> Capital: </span>
                  {country.capital}
                </p>

                <p>
                  <span className="spn fwait">Top Level Domain: </span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="spn fwait"> Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="spn fwait">Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn decorationNone">
            <button className="btn flex"><FaArrowLeft /> Go Back </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};