const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa itu AI Mr Ferdy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI Mr Ferdy adalah platform AI Indonesia yang menyediakan berbagai AI Tools, solusi otomatisasi, teknologi SEO, pembuatan konten, dan layanan digital untuk membantu meningkatkan produktivitas individu maupun bisnis."
      }
    },
    {
      "@type": "Question",
      "name": "Apa saja layanan yang tersedia di AI Mr Ferdy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI Mr Ferdy menyediakan AI Tools, Prompt Generator, AI Humanizer, solusi SEO, automasi digital, artikel edukasi, serta berbagai produk digital yang terus dikembangkan."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah AI Mr Ferdy dapat digunakan secara gratis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beberapa fitur AI Mr Ferdy dapat digunakan secara gratis, sementara fitur atau layanan tertentu mungkin tersedia dalam paket premium sesuai kebutuhan pengguna."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah AI Mr Ferdy aman digunakan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. AI Mr Ferdy dikembangkan dengan memperhatikan keamanan, performa, dan pengalaman pengguna sehingga layanan dapat digunakan secara nyaman melalui website resmi."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah AI Mr Ferdy dapat digunakan di perangkat mobile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. Website dan AI Tools AI Mr Ferdy dirancang menggunakan pendekatan mobile-first sehingga dapat diakses melalui smartphone, tablet, maupun desktop."
      }
    },
    {
      "@type": "Question",
      "name": "Di mana website resmi AI Mr Ferdy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website resmi AI Mr Ferdy adalah https://aimrferdy.com yang menyediakan informasi terbaru, AI Tools, artikel, produk digital, dan layanan resmi AI Mr Ferdy."
      }
    }
  ]
};

const homeWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://aimrferdy.com/#webpage",
  "url": "https://aimrferdy.com/",
  "name": "AI Mr Ferdy | Website Resmi Platform AI Indonesia",
  "description": "Website resmi AI Mr Ferdy yang menyediakan AI Tools, SEO, automation, dan solusi digital modern.",
  "isPartOf": {
    "@id": "https://aimrferdy.com/#website"
  },
  "about": {
    "@id": "https://aimrferdy.com/#organization"
  },
  "primaryImageOfPage": {
    "@id": "https://aimrferdy.com/#primaryimage"
  },
  "inLanguage": "id-ID"
};

const homeImageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": "https://aimrferdy.com/#primaryimage",
  "contentUrl": "https://aimrferdy.com/images/og-cover.jpg",
  "url": "https://aimrferdy.com/images/og-cover.jpg",
  "caption": "AI Mr Ferdy"
};

const homeNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://aimrferdy.com/#navigation",
  "itemListElement": [
    {
      "@type": "SiteNavigationElement",
      "name": "Home",
      "url": "https://aimrferdy.com/"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Blog",
      "url": "https://aimrferdy.com/blog"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Tools",
      "url": "https://aimrferdy.com/tools"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Product",
      "url": "https://aimrferdy.com/product"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "About",
      "url": "https://aimrferdy.com/about"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Contact",
      "url": "https://aimrferdy.com/contact"
    }
  ]
};

export const homeSchemas = [
  homeFaqSchema,
  homeWebPageSchema,
  homeImageSchema,
  homeNavigationSchema
];
