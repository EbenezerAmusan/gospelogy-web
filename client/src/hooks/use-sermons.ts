import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

export function useSermons() {
  return useQuery({
    queryKey: [api.sermons.list.path],
    queryFn: async () => {
      const res = await fetch(api.sermons.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch sermons");
      return api.sermons.list.responses[200].parse(await res.json());
    },
  });
}

export function useSermon(id: number) {
  return useQuery({
    queryKey: [api.sermons.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.sermons.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch sermon");
      return api.sermons.get.responses[200].parse(await res.json());
    },
  });
}
