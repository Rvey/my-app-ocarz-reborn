"use client";

import DisclaimerCard from "@/components/main/announceSection/adv/Disclaimer";
import AnnounceSection from "@/components/main/announceSection/main";
import SideFilter from "@/components/main/filters/SideFilter";
import SortFilter from "@/components/main/filters/SortFilter";
import getData from "@/helpers/getData";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import Logo from "@/assets/logo/logo_ocarz.png";
import { Transition } from "@headlessui/react";
import CreateAlert from "@/components/main/announceSection/card/newAlert";

export default function ListAnnounces() {
  const searchParams = useSearchParams();
  const strParams = searchParams.toString();
  const [sort, setSort] = React.useState("");
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
          <Transition
            show={!isLoading}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <AnnounceSection productsData={data} />
          </Transition>
        )}
        <div className="my-5">
          {/* <Pagination totalProduct={totalProduct}/> */}
        </div>

        <div className="my-5">
          <CreateAlert />
        </div>
      </div>
    </div>
  );
}
