import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

const useGetVillagers = () => {
  return useQuery({
    queryKey: ["villagers"],
    queryFn: () => instance.get("/villagers"),
  });
};

export default useGetVillagers;
