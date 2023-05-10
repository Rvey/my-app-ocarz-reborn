import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/query-core";
import ListAnnounces from "./list-announces";
import getData from "@/helpers/getData";


export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["announces"],
    queryFn: () => getData("products"),
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <ListAnnounces />
    </Hydrate>
  );
}
