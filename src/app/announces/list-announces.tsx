"use client";

import DisclaimerCard from "@/components/main/announceSection/adv/Disclaimer";
import AnnounceSection from "@/components/main/announceSection/main";
import SideFilter from "@/components/main/filters/SideFilter";
import SortFilter from "@/components/main/filters/SortFilter";
import getData from "@/helpers/getData";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Logo from "@/assets/logo/logo_ocarz.png";
import { Transition } from "@headlessui/react";
import CreateAlert from "@/components/main/announceSection/card/newAlert";
import Pagination from "@/components/main/announceSection/card/pagination";
import PaginationNavPresentation from "@/components/main/announceSection/card/pagination";

export default function ListAnnounces() {
  const searchParams = useSearchParams();
  const strParams = searchParams.toString();
  const [sort, setSort] = React.useState("");
  const [managed, setManaged] = React.useState("");
  const [page, setPage] = React.useState<number>(
    Number(searchParams.get("p") || 1)
  );
  const router = useRouter();
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["announces"],
    queryFn: () =>
      getData(
        `products?${searchParams.toString()}${managed}${sort}&page=${page}&itemsPerPage=14`
      ),
    keepPreviousData: true,
  });

  React.useEffect(() => {
    refetch();
  }, [strParams, refetch, managed, sort]);

  return (
    <div className="mb-6 grid grid-cols-5">
      <div className="col-span-1 h-screen bg-primary-light">
        <SideFilter page={page} />
      </div>
      <div className="col-span-4 bg-white p-4">
        <Pagination
          page={Number(searchParams.get("p")) || 1}
          itemCount={24}
          perPage={2}
          setPage={setPage}
        />

        <DisclaimerCard />
        <SortFilter setManaged={setManaged} setSort={setSort} />
        {isLoading || isFetching ? (
          <div className="flex justify-center w-full">
            <Image
              loader={({ src }) => src}
              src={Logo}
              className="animate-pulse bg-primary p-3 m-10"
              width={200}
              height={200}
              alt=""
            />
          </div>
        ) : (
          <AnnounceSection productsData={data} />
        )}
        <div className="my-5">
          {/* <Pagination totalProduct={data.length}/> */}
        </div>

        <div className="my-5">
          <CreateAlert />
        </div>
      </div>
    </div>
  );
}
