import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

const useGetFossil = () => {
  return useQuery({
    queryKey: ["fossil"],
    queryFn: () => instance.get("/nh/fossils/all"),
  });
};

export default useGetFossil;
