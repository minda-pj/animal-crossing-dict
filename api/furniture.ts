import { createQueryKeys } from "@lukemorales/query-key-factory";

export const furnitureKeys = createQueryKeys("furniture", {
  detail: (furnitureId: string) => [furnitureId],
  list: (furnitureId: string) => ({
    queryKey: ["furniture", furnitureId],
  }),
});
