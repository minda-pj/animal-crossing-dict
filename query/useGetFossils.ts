import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

interface TUseGetFossils {
  enabled: boolean;
}

const useGetFossils = ({ enabled }: TUseGetFossils) => {
  return useQuery({
    queryKey: ["fossils"],
    queryFn: () => instance.get("/nh/fossils/all"),
    enabled,
  });
};

export default useGetFossils;
