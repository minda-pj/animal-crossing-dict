import { useQuery } from "@tanstack/react-query";
import instance from "@/api";
import { TUseGetVillagers } from "@/types";

const useGetVillagers = ({ enabled }: TUseGetVillagers) => {
  return useQuery({
    queryKey: ["villagers"],
    queryFn: () => instance.get("/villagers"),
    enabled,
  });
};

export default useGetVillagers;
