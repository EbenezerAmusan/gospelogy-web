import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useMinistries() {
  return useQuery({
    queryKey: [api.ministries.list.path],
    queryFn: async () => {
      const res = await fetch(api.ministries.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch ministries");
      return api.ministries.list.responses[200].parse(await res.json());
    },
  });
}
