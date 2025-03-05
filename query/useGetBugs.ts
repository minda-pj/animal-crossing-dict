import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

interface TUseGetBugs {
  enabled: boolean;
}

const useGetBugs = ({ enabled }: TUseGetBugs) => {
  return useQuery({
    queryKey: ["bugs"],
    queryFn: () => instance.get("/nh/bugs"),
    enabled,
  });
};

export default useGetBugs;
