import { createQueryKeys } from "@lukemorales/query-key-factory";

export const fishesKeys = createQueryKeys("fishes", {
  detail: (fishId: string) => [fishId],
  list: (fishId: string) => ({
    queryKey: ["fishes", fishId],
  }),
});
