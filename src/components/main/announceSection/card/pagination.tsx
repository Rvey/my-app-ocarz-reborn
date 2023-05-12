// TODO : add memo to the pagination component to prevent unnecessary re-renders

import usePagination from "@lucasmogari/react-pagination";
import cn from "classnames";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, PropsWithChildren } from "react";

type Props = {
  page: number;
  itemCount: number;
  perPage: number;
  setPage: (page: number) => void;
};

export default function Pagination({
  page,
  itemCount,
  perPage,
  setPage,
}: Props) {
  // use the usePagination hook
  // getPageItem - function that returns the type of page based on the index.
  // size - the number of pages
  const { getPageItem, totalPages } = usePagination({
    totalItems: itemCount,
    page: page,
    itemsPerPage: perPage,
    maxPageItems: 7,
  });

  const firstPage = 1;
  // calculate the next page
  const nextPage = Math.min(page + 1, totalPages);
  // calculate the previous page
  const prevPage = Math.max(page - 1, firstPage);
  // create a new array based on the total pages
  const arr = new Array(totalPages);

  return (
    <div className="flex gap-2 items-center">
      {[...arr].map((_, i) => {
        // getPageItem function returns the type of page based on the index.
        // it also automatically calculates if the page is disabled.
        const { page, disabled, current } = getPageItem(i);

        if (page === "previous") {
          return (
            <PaginationLink
              page={prevPage}
              disabled={disabled}
              key={page}
              setPage={setPage}
            >
              {`<`}
            </PaginationLink>
          );
        }

        if (page === "gap") {
          return <span key={`${page}-${i}`}>...</span>;
        }

        if (page === "next") {
          return (
            <PaginationLink
              page={nextPage}
              disabled={disabled}
              key={page}
              setPage={setPage}
            >
              {`>`}
            </PaginationLink>
          );
        }

        return (
          <PaginationLink
            active={current}
            key={page}
            page={page!}
            setPage={setPage}
          >
            {page}
          </PaginationLink>
        );
      })}
    </div>
  );
}

type PaginationLinkProps = {
  page?: number | string;
  active?: boolean;
  disabled?: boolean;
  setPage?: (page: any) => void;
} & PropsWithChildren;

function PaginationLink({
  page,
  setPage,
  children,
  ...props
}: PaginationLinkProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  // we use existing data from router query, we just modify the page.
  return (
    <button
      // only use the query for the url, it will only modify the query, won't modify the route.
      onClick={() => {
        if (searchParams.has("p")) {
          let newParams = searchParams.toString().replace(/p=\d+/, ``);
          router.push(`announces?&p=${page}${newParams}`);
          //@ts-ignore
          setPage(page);
          console.log("param exist");
        } else {
          // check if the url contains the page param and delete it
          router.push(`announces?&p=${page}${searchParams.toString()}`);
          //@ts-ignore
          setPage(page);
          console.log("param not exist shouldnt delete");
        }
      }}
      // toggle the appropriate classes based on active, disabled states.
      className={cn({
        "p-2": true,
        "font-bold text-indigo-700": props.active,
        "text-indigo-400": !props.active,
        "pointer-events-none text-gray-200": props.disabled,
      })}
    >
      {children}
    </button>
  );
}
