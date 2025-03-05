import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

interface TUseGetFishes {
  enabled: boolean;
}

const useGetFishes = ({ enabled }: TUseGetFishes) => {
  return useQuery({
    queryKey: ["fishes"],
    queryFn: () => instance.get("/nh/fish"),
    enabled,
  });
};

export default useGetFishes;
