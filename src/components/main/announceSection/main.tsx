import DisclaimerCard from "./adv/Disclaimer";
import SortCard from "./adv/SortCard";
import CreateAlert from "./card/newAlert";
import Pagination from "./card/pagination";
import Image from "next/image";
import Link from "next/link";
import AnnounceCard from "./card/AnnounceCard";
import { Fragment } from "react";

export default function AnnounceSection({ productsData }: any) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-3">
        {productsData?.map((product: any) => (
          <Fragment key={product.id}>
            <AnnounceCard product={product} />
          </Fragment>
        ))}
      </div>
      <div className="my-5">
        {/* <Pagination totalProduct={totalProduct}/> */}
      </div>

      <div className="my-5">
        <CreateAlert />
      </div>
    </div>
  );
}
