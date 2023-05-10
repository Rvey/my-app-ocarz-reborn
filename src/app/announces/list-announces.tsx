"use client";

import DisclaimerCard from "@/components/main/announceSection/adv/Disclaimer";
import AnnounceSection from "@/components/main/announceSection/main";
import SideFilter from "@/components/main/filterSection/SideFilter";
import getData from "@/helpers/getData";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function ListAnnounces() {
  const searchParams = useSearchParams();

  const brand = searchParams.get("brand");
  const model = searchParams.get("model");
  const maxPrice = searchParams.get("MaxPrice");
  const minPrice = searchParams.get("minPrice");
  const year = searchParams.get("year");

  const [filter, setFilter] = React.useState(brand);
  const pathname = usePathname();
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["announces"],
    queryFn: () => getData(`products`),
  });

  React.useEffect(() => {
    refetch();
  }, [brand, refetch]);

  return (
          <div className="mb-6 grid grid-cols-5">
            <div className="col-span-1 h-screen bg-[#e9f1ff]">
              <SideFilter />
            </div>
            <div className="col-span-4 bg-white p-4">
              <DisclaimerCard
                setFilter={setFilter}
                filter={filter}
                refetch={refetch}
              />
              {isLoading ? "loading" : <AnnounceSection productsData={data} />}
            </div>
          </div>
  );
}
