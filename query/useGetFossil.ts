import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

const useGetFossil = (fossilId: string) => {
  return useQuery({
    queryKey: ["fossil", fossilId],
    queryFn: () => instance.get(`/nh/fossils/all/${fossilId}`),
  });
};

export default useGetFossil;
