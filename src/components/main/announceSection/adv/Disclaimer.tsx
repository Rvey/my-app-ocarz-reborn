"use client";
import getQueryClient from "@/utils/getQueryClient";
import { useParams, useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

const DisclaimerCard = ({ setFilter, filter, refetch }: any) => {
  const queryClient = getQueryClient();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div>
      <div>
        path
        {JSON.stringify(pathname)}
      </div>
      <div>
        searchParams
        {JSON.stringify(searchParams.toString())}
      </div>
      Si vous ne pouvez pas vous déplacer,nous restons disponibles au 0522 983
      283
      <button
        onClick={() => {
          router.refresh();
          router.push(`${pathname}?brand=/brands/12`);
        }}
      >
        filter test
      </button>
      <button
      className="mx-2"
        onClick={() => {
          router.refresh();
          router.push(`${pathname}?model=/brands/1`);
        }}
      >
        filter samsung
      </button>
    </div>
  );
};
export default DisclaimerCard;
