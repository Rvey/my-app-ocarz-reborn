import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import React, { Suspense } from "react";

export default function AnnounceCard({ product }: { product: any }) {
  const date = dayjs(product?.dateCreated).format("DD/MM/YYYY");
  return (
    <div className=" bg-[#e9f1ff] shadow" key={product.id}>
      <div className="w-[290px] h-[170px] relative">
        <Image
          loader={({ src }) => src}
          src={product?.images["0"]?.contentUrl}
          fill={true}
          alt=""
        />
      </div>
      <div className="">
        <div className="grid grid-cols-10 gap-2">
          <div className="col-span-7 px-2 pt-4">
            {" "}
            <div>
              <h1 className="mb-[10px] text-[14px] font-bold">
                {" "}
                <Link rel="stylesheet" href={`${product["@id"]}`}>
                  {product?.title}
                </Link>{" "}
                <p className="text-[12px] font-bold">{product?.engine}</p>
              </h1>
            </div>
            <hr className="border-y-1 border-gray-300 border-solid border-primary-normal w-[175px] h-[1px]" />
            <div>
              <p className="text-[10px] font-bold italic py-2">
                Diesel | {product?.mileage} Km | {product?.transmission}{" "}
              </p>
            </div>
            <hr className="border-y-1 border-gray-300 border-solid border-primary-normal w-[175px] h-[1px]" />
            <div>
              <span className="text-[10px] font-bold">Prix</span>

              <div className="flex">
                <strong className="text-[27px] text-primary">
                  {product?.price},
                </strong>
                <div className="flex flex-col ">
                  <span className="text-[11px] font-bold">dhs</span>
                  <span className="text-primary">00</span>
                </div>
              </div>
            </div>
            <hr className="border-y-1 border-gray-300 border-solid border-primary-normal w-[175px] h-[1px]" />
            <div>
              <p className="text-[9px] font-bold text-[#999999]">
                Réf. : <strong className="text-black">YY17NHM</strong> Le
                {date}
              </p>
            </div>
          </div>
          <div className="col-span-3  ">
            <div className="grid grid-rows-3 py-2 gap-2">
              <div className="row-span-1">
                <div className="w-[80px] h-[50px] relative">
                  <Image
                    loader={({ src }) => src}
                    src={product?.images["0"]?.contentUrl}
                    fill={true}
                    alt=""
                  />
                </div>
              </div>
              <div className="row-span-1">
                <div className="w-[80px] h-[50px] relative">
                  <Image
                    loader={({ src }) => src}
                    src={product?.images["0"]?.contentUrl}
                    fill={true}
                    alt=""
                  />
                </div>
              </div>
              <div className="row-span-1">
                <div className="w-[80px] h-[50px] relative">
                  <Image
                    loader={({ src }) => src}
                    src={product?.images["0"]?.contentUrl}
                    fill={true}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
