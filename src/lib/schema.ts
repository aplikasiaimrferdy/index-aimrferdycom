import { SITE } from "./site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url()}#organization`,
  name: SITE.name,
  url: SITE.url(),
  logo: {
    "@type": "ImageObject",
    url: SITE.url("/img/logo.png")
  },
  image: SITE.imageUrl(SITE.image)
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url()}#website`,
  name: SITE.title,
  url: SITE.url(),
  publisher: {
    "@id": `${SITE.url()}#organization`
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url("search")}?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export function articleSchema(post) {
  const url = SITE.blog(post.slug);
  const image = SITE.imageUrl(
    post.image || SITE.image
  );

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [image],
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    author: {
      "@type": "Person",
      name: SITE.author
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url(),
      logo: {
        "@type": "ImageObject",
        url: SITE.url("/img/logo.png")
      }
    }
  };
}

