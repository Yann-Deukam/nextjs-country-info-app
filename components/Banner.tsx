import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="py-4 px-24 flex justofy-center">
      <div className="flex flex-col justify-center items-center -mt-10">
        <h1 className="text-7xl font-bold text-purple-700 my-4">
          Explore the world&apos;s diversity
        </h1>
        <h3 className="text-2xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ad
          voluptas inventore velit minus. Laborum!
        </h3>
      </div>
      <div>
        <Image src="/map-2.png" alt="world-map" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default Banner;
