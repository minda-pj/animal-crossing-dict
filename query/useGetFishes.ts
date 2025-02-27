import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

const useGetFishes = () => {
  return useQuery({
    queryKey: ["fishes"],
    queryFn: () => instance.get("/nh/fish"),
  });
};

export default useGetFishes;
