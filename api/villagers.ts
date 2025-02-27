import { createQueryKeys } from "@lukemorales/query-key-factory";

export const villagersKeys = createQueryKeys("villagers", {
  detail: (villagerId: string) => [villagerId],
  list: (villagerId: string) => ({
    queryKey: ["villagers", villagerId],
  }),
});
