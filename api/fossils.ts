import { createQueryKeys } from "@lukemorales/query-key-factory";

export const fossilsKeys = createQueryKeys("fossils", {
  detail: (fossilId: string) => [fossilId],
  list: (fossilId: string) => ({
    queryKey: ["fossils", fossilId],
  }),
});
