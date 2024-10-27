"use client";

import ICountry from "@/interfaces/Country";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";
import Fade from "react-awesome-reveal";

const CountryList = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const c = await response.json();

      setCountries(c);
      setFilteredCountries(c);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter((c) => {
      return c.name.common.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredCountries(filtered);
  }, [search, countries]);

  const filterCountries = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <section className="flex flex-col gap-6 py-4 px-24 my-10">
      <input
        type="search"
        value={search}
        className="w-80 px-6 py-4 bg-zinc-800/50 backdrop-blur-lg rounded-lg outline-none border border-white/20"
        placeholder="Type a country's name"
        onChange={filterCountries}
      />
      <h3 className="text-5xl font-semibold">Countries List</h3>
      <div className="grid grid-cols-3 gap-5 justify-between">
        {filteredCountries &&
          filteredCountries.map((c, k) => {
            return (
              <Fade triggerOnce={true} key={k}>
                <div className="country-card bg-zinc-800/50">
                  <Image
                    src={c.flags.svg}
                    width={100}
                    height={200}
                    alt={`${c.name.common} flag`}
                    className="shadow-lg w-36 h-24 rounded-md"
                  />

                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold">{c.name.common}</h3>
                    <p className="text-gray-400 text-sm">{c.region}</p>
                  </div>

                  <Link
                    href={`/country/${c.ccn3}`}
                    className="p-2 rounded-lg text-zinc-400 text-xs border border-white/40 hover:bg-zinc-300/20 transition-all ease-in-out duration-200"
                  >
                    view details
                  </Link>
                </div>
              </Fade>
            );
          })}
      </div>
    </section>
  );
};

export default CountryList;
