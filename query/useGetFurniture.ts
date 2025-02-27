import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

const useGetFurniture = () => {
  return useQuery({
    queryKey: ["furniture"],
    queryFn: () => instance.get("/nh/furniture"),
  });
};

export default useGetFurniture;
