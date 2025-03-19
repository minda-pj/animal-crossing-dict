import { useQuery } from "@tanstack/react-query";
import instance from "@/api";
import { TUseGetVillagers } from "@/types";

const useGetFossil = (fossilId: string, { enabled }: TUseGetVillagers) => {
  return useQuery({
    queryKey: ["fossil", fossilId],
    queryFn: () => instance.get(`/nh/fossils/all/${fossilId}`),
    enabled,
  });
};

export default useGetFossil;
