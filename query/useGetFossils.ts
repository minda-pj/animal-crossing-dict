import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

const useGetFossils = () => {
  return useQuery({
    queryKey: ["fossils"],
    queryFn: () => instance.get("/nh/fossils/all"),
  });
};

export default useGetFossils;
