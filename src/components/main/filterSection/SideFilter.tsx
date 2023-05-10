"use client";

import AutoComplete from "@/components/forms/AutoComplete";
import Input from "@/components/forms/Input";
import getData from "@/helpers/getData";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SideFilter() {
  const router = useRouter();
  const pathname = usePathname();
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
  const [showMore, setShowMore] = useState(true);
  const [queryBrand, setQueryBrand] = useState<string>("");
  const [queryModel, setQueryModel] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [queryVille, setQueryVille] = useState<string>("");
  const [queryTransmission, setQueryTransmission] = useState<string>("");
  const [queryCarburant, setQueryCarburant] = useState<string>("");

  const [brand, setBrand] = useState({
    id: searchParams.get("brand"),
    name: sessionStorage.brand,
  });
  const [model, setModel] = useState({
    id: searchParams.get("model"),
    name: sessionStorage.model,
  });
  const [transmission, setTransmission] = useState({
    id: searchParams.get("transmission"),
    name: searchParams.get("transmission"),
  });
  const [carburant, setCarburant] = useState({
    id: searchParams.get("carburant"),
    name: searchParams.get("carburant"),
  });
  const [ville, setVille] = useState({
    id: searchParams.get("ville"),
    name: searchParams.get("ville"),
  });
  useEffect(() => {
    refetch();
  }, [brand.id, refetch]);

  const checkFilter = (filter: string | null, key: string) => {
    if (filter || filter !== "0") {
      return `&${key}=${filter}`;
    } else {
      return "";
    }
  };

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
        value={ville}
        setValue={setVille}
        data={[]}
        searchQuery={queryVille}
        setSearchQuery={setQueryVille}
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
        onClick={() => {
          sessionStorage.setItem("brand", brand.name);
          sessionStorage.setItem("model", model.name);
          // check if the user has selected a brand or a model or transmission or carburant and add it to the url
          const brandFilter = checkFilter(brand.id, "brand");
          const modelFilter = checkFilter(model.id, "model");
          const maxPriceFilter = checkFilter(maxPrice?.toString(), "price[lt]");
          const minPriceFilter = checkFilter(minPrice?.toString(), "price[gt]");
          const transmissionFilter = checkFilter(
            transmission.name,
            "transmission"
          );
          const carburantFilter = checkFilter(carburant.name, "carburant");
          
          router.push(
            `/announces?${brandFilter}${modelFilter}${transmissionFilter}${carburantFilter}${maxPriceFilter}${minPriceFilter}}`
          );
        }}
      >
        search
      </button>
    </div>
  );
}
