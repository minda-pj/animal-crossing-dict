import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

const useGetBug = (bugId: string) => {
  return useQuery({
    queryKey: ["bug", bugId],
    queryFn: () => instance.get(`/nh/bugs/${bugId}`),
  });
};

export default useGetBug;
