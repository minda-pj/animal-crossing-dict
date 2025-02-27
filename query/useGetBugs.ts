import { useQuery } from "@tanstack/react-query";
import instance from "@/api";

const useGetBugs = () => {
  return useQuery({
    queryKey: ["bugs"],
    queryFn: () => instance.get("/nh/bugs"),
  });
};

export default useGetBugs;
