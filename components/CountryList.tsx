"use client";

import React, { useEffect } from "react";

const CountryList = () => {
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const c = await response.json();

      console.log(c);
    };
    fetchCountries();
  }, []);

  return (
    <section className="flex flex-col gap-6 py-4 px-24 my-10">
      <input
        type="search"
        className="w-80 px-6 py-4 bg-zinc-800/50 backdrop-blur-lg rounded-lg outline-none border border-white/20"
        placeholder="Type a country's name"
      />
      <h3 className="text-5xl font-semibold">Countries List</h3>
      <div className="grid grid-cols-3 gap-5 justify-between"></div>
    </section>
  );
};

export default CountryList;
