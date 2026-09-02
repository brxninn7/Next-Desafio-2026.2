"use client";

import Image from "next/image";

export function CardItem() {
  return (
    <div id="card-item" className="flex flex-col bg-[#0E141F] border border-[#262E3D] w-80 rounded-sm">
      <div id="image-product" className="">
        <Image src="/Dark_Souls_3_capa.png" alt="Game Image" width={320} height={200} />
      </div>
        
      <div id="informations-product" className="flex flex-col gap-4 p-4">
        <div
          id="gender-product"
          className="font-poppins opacity-50 mt-4 text-lg"
        >
          <p>RPG / Soulslike</p>
        </div>

        <div id="title-product" className="font-space-grotesk text-4xl">
          <h1>Dark Souls III</h1>
        </div>

        <div
          id="price-product"
          className="font-poppins text-3xl font-bold text-[#5400AE]"
        >
          <p>R$160,93</p>
        </div>
      </div>
    </div>
  );
}
