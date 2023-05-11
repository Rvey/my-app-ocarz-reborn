"use client";

import DisclaimerCard from "@/components/main/announceSection/adv/Disclaimer";
import AnnounceSection from "@/components/main/announceSection/main";
import SideFilter from "@/components/main/filters/SideFilter";
import SortFilter from "@/components/main/filters/SortFilter";
import getData from "@/helpers/getData";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function ListAnnounces() {
  const searchParams = useSearchParams();
  const strParams = searchParams.toString();
  const [filter, setFilter] = React.useState("");
  const [sort, setSort] = React.useState(searchParams.get("sort") || "asc");
  const [managed, setManaged] = React.useState("");
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["announces"],
    queryFn: () =>
      getData(`products?${searchParams.toString()}${managed}${sort}`),
  });

  React.useEffect(() => {
    refetch();
  }, [strParams, refetch, managed, sort]);

  return (
    <div className="mb-6 grid grid-cols-5">
      <div className="col-span-1 h-screen bg-primary-light">
        <SideFilter />
      </div>
      <div className="col-span-4 bg-white p-4">
        <DisclaimerCard />
        <SortFilter setManaged={setManaged} setSort={setSort} />
        {isLoading ? "loading" : <AnnounceSection productsData={data} />}
      </div>
    </div>
  );
}
