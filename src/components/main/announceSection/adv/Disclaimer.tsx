"use client";
import getQueryClient from "@/utils/getQueryClient";
import { useParams, useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

const DisclaimerCard = () => {
  return (
    <div className="w-full h-20 bg-warning text-primary flex justify-center items-center font-bold">
      Si vous ne pouvez pas vous déplacer,nous restons disponibles au 0522 983
      283
    </div>
  );
};
export default DisclaimerCard;
