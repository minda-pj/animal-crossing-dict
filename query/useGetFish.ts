import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

const useGetFishes = (fishId: string) => {
  return useQuery({
    queryKey: ["fish", fishId],
    queryFn: () => instance.get(`/nh/fish/${fishId}`),
  });
};

export default useGetFishes;
