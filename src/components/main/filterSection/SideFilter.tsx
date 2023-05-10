"use client";

import AutoComplete from "@/components/forms/AutoComplete";
import Input from "@/components/forms/Input";
import { checkFilter, checkPriceFilter } from "@/helpers/filterHanler";
import getData from "@/helpers/getData";
import getQueryClient from "@/utils/getQueryClient";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SideFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  // ============== input data ==============
  const {
    data: brands,
    isLoading,
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
    queryFn: () => getData(`models?brand=${brand.id}`),
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
  const [queryBrand, setQueryBrand] = useState<string>("");
  const [queryModel, setQueryModel] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [queryCity, setQueryCity] = useState<string>("");
  const [queryTransmission, setQueryTransmission] = useState<string>("");
  const [queryCarburant, setQueryCarburant] = useState<string>("");

  const [brand, setBrand] = useState({
    id: searchParams.get("brand") || "",
    name: sessionStorage.brand && sessionStorage.brand !== undefined ? sessionStorage.brand : "",
  });
  const [model, setModel] = useState({
    id: searchParams.get("model") || "",
    name: sessionStorage.model && sessionStorage.model !== undefined ? sessionStorage.model : "",
  });
  const [transmission, setTransmission] = useState({
    id: searchParams.get("transmission"),
    name: searchParams.get("transmission"),
  });
  const [carburant, setCarburant] = useState({
    id: searchParams.get("carburant"),
    name: searchParams.get("carburant"),
  });
  const [city, setCity] = useState({
    id: searchParams.get("city"),
    name: sessionStorage.city === undefined ? sessionStorage.city : "",
  });
  useEffect(() => {
    refetch();
  }, [brand.id, refetch]);

  return (
    <div className="mt-5">
      <div className="flex justify-between p-2 ">
        <h2 className="text-3xl font-bold">FILTERS</h2>
        <button
          className="text-[14px] font-bold text-red"
          onClick={() => {
            router.push("/announces");
            sessionStorage.clear();
            setModel({ id: "", name: "" });
            setBrand({ id: "", name: "" });
            setCity({ id: "", name: "" });
            setTransmission({ id: "", name: "" });
            setCarburant({ id: "", name: "" });
            setMaxPrice(0);
            setMinPrice(0);
            console.log(maxPrice?.toString() !== "0");
          }}
        >
          Tout Effacer (1)
        </button>
      </div>
      <AutoComplete
        value={brand}
        setValue={setBrand}
        data={brands}
        searchQuery={queryBrand}
        setSearchQuery={setQueryBrand}
        title="Marque"
      />
      <AutoComplete
        value={model}
        setValue={setModel}
        data={models}
        searchQuery={queryModel}
        setSearchQuery={setQueryModel}
        title="Modèle"
      />
      <AutoComplete
        value={transmission}
        setValue={setTransmission}
        data={dataTransmission}
        searchQuery={queryTransmission}
        setSearchQuery={setQueryTransmission}
        title="Transmission"
      />
      <AutoComplete
        value={carburant}
        setValue={setCarburant}
        data={dataCarburant}
        searchQuery={queryCarburant}
        setSearchQuery={setQueryCarburant}
        title="Motorisation"
      />
      <AutoComplete
        value={city}
        setValue={setCity}
        data={cities}
        searchQuery={queryCity}
        setSearchQuery={setQueryCity}
        title="Ville"
      />
      <div className="flex justify-between p-2">
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

      <button
        className="bg-primary text-[14px] text-white w-[150px] h-[50px]"
        onClick={() => {
          sessionStorage.setItem("brand", brand.name);
          sessionStorage.setItem("model", model.name);
          sessionStorage.setItem("city", city.name);

          // check if the user has selected a brand or a model or transmission or carburant and add it to the url
          const brandFilter = checkFilter(brand.id, "brand");
          const modelFilter = checkFilter(model.id, "model");
          const PriceFilter = checkPriceFilter(minPrice, maxPrice);
          const CityFilter = checkFilter(city.id, "city");
          const transmissionFilter = checkFilter(
            transmission.name,
            "transmission"
          );
          const carburantFilter = checkFilter(carburant.name, "fuel");
          router.push(
            `/announces?${brandFilter}${modelFilter}${transmissionFilter}${carburantFilter}${PriceFilter}${CityFilter}`
          );
        }}
      >
        search
      </button>
    </div>
  );
}
