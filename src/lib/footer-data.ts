
import { getCollection } from "astro:content";

export async function getFooterData() {
  const posts = await getCollection("blog");
  const products = await getCollection("product");

  // Ambil halaman tool langsung dari file Astro
  const toolFiles = import.meta.glob(
    "../pages/tools/**/*.astro",
    { eager: true }
  );

  const tools = Object.keys(toolFiles)
    .filter((file) => {
      const path = file.replace("../pages/tools/", "");

      // Abaikan halaman AMP
      if (
        path.includes("/amp/") ||
        path.endsWith("/amp.astro")
      ) {
        return false;
      }

      // Abaikan index kategori
      if (
        path === "index.astro" ||
        path.endsWith("/index.astro")
      ) {
        return false;
      }

      return true;
    })
    .map((file) => {
      const slug = file
        .replace("../pages/tools/", "")
        .replace(/\.astro$/, "");

      const filename = slug.split("/").pop() || slug;

      const title = filename
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

      return {
        slug,
        data: {
          title,
          popular: true,
        },
      };
    });

  const latestPosts = [...posts]
    .sort(
      (a, b) =>
        b.data.pubDate.getTime() -
        a.data.pubDate.getTime()
    )
    .slice(0, 4);

  const featuredProducts = products
    .filter((product) => product.data.featured)
    .slice(0, 4);

  return {
    latestPosts,
    popularTools: tools.slice(0, 4),
    featuredProducts,
  };
}
