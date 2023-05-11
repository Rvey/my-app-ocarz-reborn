import AutoCompleteV2 from "@/components/forms/AutoCompleteV2";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function SortFilter({ setSort, setManaged }: any) {
  const searchParams = useSearchParams();
  const [checked, setChecked] = React.useState(false);

  let data = [
    { id: "&order[price]=asc", name: "Prix croissant" },
    { id: "&order[price]=desc", name: "Prix décroissant" },
    { id: "&order[year]=asc", name: "Les plus récents" },
    { id: "&order[year]=desc", name: "Les plus anciens" },
  ];

  useEffect(() => {
    if (checked) {
      setManaged("&by=ocarz");
    } else {
      setManaged("");
    }
  }, [checked]);

  return (
    <div className="w-full flex items-center gap-7 my-3">
      <div className="flex items-center h-full w-60">
        <AutoCompleteV2
          setSelectedOption={setSort}
          param={searchParams.get("sort")}
          data={data}
          placeholder="Trier par"
        />
      </div>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          onChange={() => setChecked(!checked)}
          className="w-5 h-5"
        />
        <label>Managed Ocarz</label>
      </div>
    </div>
  );
}
