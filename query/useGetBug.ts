import { useQuery } from "@tanstack/react-query";
import instance from "@/api";
import { TUseGetVillagers } from "@/types";

const useGetBug = (bugId: string, { enabled }: TUseGetVillagers) => {
  return useQuery({
    queryKey: ["bug", bugId],
    queryFn: () => instance.get(`/nh/bugs/${bugId}`),
    enabled,
  });
};

export default useGetBug;
