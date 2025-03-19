import { useQuery } from "@tanstack/react-query";
import instance from "@/api";
import { TUseGetVillagers } from "@/types";

const useGetFishes = (fishId: string, { enabled }: TUseGetVillagers) => {
  return useQuery({
    queryKey: ["fish", fishId],
    queryFn: () => instance.get(`/nh/fish/${fishId}`),
    enabled,
  });
};

export default useGetFishes;
