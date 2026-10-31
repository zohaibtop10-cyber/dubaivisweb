import { getProperties, parseFilters } from "@/lib/properties";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const params: Record<string, string> = {};
  url.searchParams.forEach((value, key) => {
    params[key] = value;
  });
  const properties = await getProperties(parseFilters(params));
  return Response.json({ ok: true, count: properties.length, properties });
}
