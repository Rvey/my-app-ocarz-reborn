"use client";

import AutoComplete from "@/components/forms/AutoComplete";
import AutoCompleteV2 from "@/components/forms/AutoCompleteV2";
import Input from "@/components/forms/Input";
import { checkFilter, checkPriceFilter } from "@/helpers/filterHanler";
import getData, { getDataById } from "@/helpers/getData";
import getQueryClient from "@/utils/getQueryClient";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SideFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [model, setModel] = useState(searchParams.get("model") || "");
  const [brand, setBrand] = useState(searchParams.get("brand") || "");
  const [city, setCity] = useState(searchParams.get("city") || "");
  // ============== input data ==============
  const {
    data: brands,
    isLoading: isLoadingBrands,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: () => getData(`brands`),
  });

  const {
    data: cities,
    isLoading: isLoadingCities,
    isFetching: isFetchingCities,
    error: errorCities,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: () => getData(`cities`),
  });

  const {
    data: models,
    isLoading: isLoadingModels,
    isFetching: isFetchingModels,
    error: errorModels,
    refetch,
  } = useQuery({
    queryKey: ["models"],
    queryFn: () => getData(`models?brand=${brand}`),
  });
  const dataTransmission = [
    { id: "manuelle", name: "manuelle" },
    { id: "automatique", name: "automatique" },
  ];
  const dataCarburant = [
    { id: "diesel", name: "diesel" },
    { id: "essence", name: "essence" },
  ];

  // ============== filter states ==============

  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [transmission, setTransmission] = useState(
    searchParams.get("transmission") || ""
  );
  const [carburant, setCarburant] = useState(
    searchParams.get("carburant") || ""
  );

  // ============== filter handlers ==============
  useEffect(() => {
    refetch();
  }, [brand, refetch]);

  return (
    <div className="mt-5">
      <div className="flex justify-between p-2 ">
        <h2 className="text-3xl font-bold">FILTERS</h2>
        <button
          className="text-[14px] font-bold text-red"
          onClick={() => {
            setModel("");
            setBrand("");
            setCity("");
            setTransmission("");
            setCarburant("");
            setMaxPrice(0);
            setMinPrice(0);
            router.push("/announces");
          }}
        >
          Tout Effacer ()
        </button>
      </div>
      <button
        className="bg-primary text-[14px] text-white w-[150px] h-[50px]"
        onClick={() => {
          // check if the user has selected a brand or a model or transmission or carburant and add it to the url
          const brandFilter = checkFilter(brand, "brand");
          const modelFilter = checkFilter(model, "model");
          const PriceFilter = checkPriceFilter(minPrice, maxPrice);
          const CityFilter = checkFilter(city, "city");
          const transmissionFilter = checkFilter(transmission, "transmission");
          const carburantFilter = checkFilter(carburant, "fuel");
          router.push(
            `/announces?${brandFilter}${modelFilter}${transmissionFilter}${carburantFilter}${PriceFilter}${CityFilter}`
          );
        }}
      >
        search
      </button>
      <AutoCompleteV2
        data={brands}
        title="Marque"
        selectedOption={setBrand}
        setSelectedOption={setBrand}
        param={searchParams.get("brand")}
      />
      <AutoCompleteV2
        data={models}
        title="Modèle"
        selectedOption={model}
        setSelectedOption={setModel}
        param={searchParams.get("model")}
      />
      <AutoCompleteV2
        data={cities}
        title="Ville"
        selectedOption={city}
        setSelectedOption={setCity}
        param={searchParams.get("city")}
      />
      <AutoCompleteV2
        data={dataCarburant}
        title="Motorisation"
        selectedOption={carburant}
        setSelectedOption={setCarburant}
        param={searchParams.get("fuel")}
      />
      <AutoCompleteV2
        data={dataTransmission}
        title="Transmission"
        selectedOption={transmission}
        setSelectedOption={setTransmission}
        param={searchParams.get("transmission")}
      />

      <div className="flex justify-between p-2 flex-col">
        <p className="mt-2 text-[14px] font-bold text-secondary">Price</p>
        <div className="flex flex-col ">
          <Input
            title="Min"
            type="number"
            setInputValue={setMinPrice}
            value={minPrice}
            placeholder="Min"
          />
          <Input
            title="Max"
            type="number"
            setInputValue={setMaxPrice}
            value={maxPrice}
            placeholder="Max"
          />
        </div>
      </div>
    </div>
  );
}
