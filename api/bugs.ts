import { createQueryKeys } from "@lukemorales/query-key-factory";

export const bugsKeys = createQueryKeys("bugs", {
  detail: (bugId: string) => [bugId],
  list: (bugId: string) => ({
    queryKey: ["bugs", bugId],
  }),
});
