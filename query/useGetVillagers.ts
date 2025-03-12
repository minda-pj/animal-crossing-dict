import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

interface TUseGetVillagers {
  enabled: boolean;
}

const useGetVillagers = ({ enabled }: TUseGetVillagers) => {
  return useQuery({
    queryKey: ["villagers"],
    queryFn: () => instance.get("/villagers"),
    enabled,
  });
};

export default useGetVillagers;
