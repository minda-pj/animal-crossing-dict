import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

const useGetFurniture = (furnitureId: string) => {
  return useQuery({
    queryKey: ["furniture", furnitureId],
    queryFn: () => instance.get(`/nh/furniture/${furnitureId}`),
  });
};

export default useGetFurniture;
