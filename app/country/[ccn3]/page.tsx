"use client";

import ICountry from "@/interfaces/Country";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import CountryInfoItem from "@/components/CountryInfoItem";

interface IProps {
  params: {
    ccn3: string;
  };
}

const Country = (props: IProps) => {
  const [country, setCountry] = useState<ICountry | undefined>(undefined); // Make sure to define initial state type
  const ccn3 = props.params.ccn3;

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countries: ICountry[] = await response.json(); // Define type of countries array
      const foundCountry = countries.find((c: ICountry) => c.ccn3 === ccn3); // Type for 'c'
      setCountry(foundCountry);
    };
    fetchCountry();
  }, [ccn3]);

  return (
    country && (
      <section className="flex flex-col py-4 px-24 my-20 gap-2">
        <div className="flex items-center justify-center gap-3">
          <div className="backdrop-blur-lg border bg-zinc-800/20 p-5 rounded-lg flex items-center border-white/40 cursor-pointer hover:bg-zinc-100/20 hover:shadow-lg transition-all ease-in-out duration-100">
            <Link
              href={country.maps.googleMaps}
              target="_blank"
              className="flex w-fit"
            >
              <h1 className="text-4xl font-bold">{country.name.common}</h1>
              <MapPin width={40} height={40} className="ml-5 items-center" />
            </Link>
          </div>
        </div>
        <div className="text-zinc-100/50 italic text-center mb-10 text-sm">
          {country.altSpellings.join(", ")}
        </div>
        <div className="flex justify-evenly">
          <Image
            src={country.flags.svg}
            width={240}
            height={130}
            alt={country.flags.alt}
          />
          <div>
            <CountryInfoItem
              label="Official name"
              content={country.name.official}
            />
            <CountryInfoItem
              label="Surface area"
              content={`${country.area} km²`}
            />
            <CountryInfoItem
              label="Population"
              content={country.population.toString()}
            />
            <CountryInfoItem label="Capital" content={country.capital} />
            <CountryInfoItem
              label="Region/subregion"
              content={`${country.region}/${country.subregion}`}
            />
            <CountryInfoItem
              label="Languages"
              content={
                country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"
              }
            />
            <CountryInfoItem
              label="Currency"
              content={
                country.currencies
                  ? Object.values(country.currencies)
                      .map((curr) => `${curr.name} (${curr.symbol})`)
                      .join(", ")
                  : "N/A"
              }
            />
          </div>
        </div>
      </section>
    )
  );
};

export default Country;
