import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

const useGetFurnitures = () => {
  return useQuery({
    queryKey: ["furnitures"],
    queryFn: () => instance.get("/nh/furniture"),
  });
};

export default useGetFurnitures;
