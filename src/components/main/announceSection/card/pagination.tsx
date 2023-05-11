"use client"
import { useRouter } from "next/router";
import React from "react";

const Pagination = (totalProduct) => {
  const nbrPage = Math.ceil(totalProduct["totalProduct"] / 4);
  const listOfNumber = [];
  const router = useRouter();
  {
    for (let index = 1; index <= nbrPage; index++) {
      listOfNumber.push(index);
    }
  }

  return (
    <div className="flex justify-center justify-items-center ">
      {listOfNumber.map((nbr) => (
        <div
          key={nbr}
          className="mx-2 h-[50px] w-[50px] rounded-xl border-2 border-primary bg-primary p-3 text-center text-white "
          onClick={() => {
            router.query.page = nbr.toString();
            router.push(router);
          }}
        >
          {nbr}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
