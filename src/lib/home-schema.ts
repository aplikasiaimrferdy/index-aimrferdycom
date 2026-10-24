// src/lib/home-schema.ts

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": "https://aimrferdy.com/#organization",
      "name": "AI Mr Ferdy",
	  "description": "Platform AI Indonesia yang menyediakan AI Tools, SEO, automation, dan solusi digital modern.",
      "url": "https://aimrferdy.com/",
      "logo": {
        "@id": "https://aimrferdy.com/images/og-cover.jpg"
      },
      "image": {
        "@id": "https://aimrferdy.com/images/og-cover.jpg"
      },
	  "knowsAbout": [
  "Artificial Intelligence",
  "SEO",
  "Automation",
  "Cloudflare Workers",
  "Astro",
  "Web Development"
],
      "sameAs": [
    "https://www.youtube.com/@aimrferdy",
	"https://chat.aimrferdy.com/",
    "https://medium.com/@aimrferdy",
    "https://github.com/aimrferdy",
    "https://facebook.com/ai.mr.ferdy",
	"https://www.linkedin.com/in/aimrferdy",
	"https://aimrferdy.net/",
	"https://aimrferdy.org/",
	"https://www.instagram.com/aimrferdycom",
	"https://www.tiktok.com/@aimrferdy",	
    "https://id.pinterest.com/aimrferdy",	
    "https://heylink.me/mrferdy"
      ]
    },

    // Person
    {
      "@type": "Person",
      "@id": "https://aimrferdy.com/about#person",
      "name": "AI Mr Ferdy",
	  "description": "Founder dan pengembang AI Mr Ferdy.",
      "url": "https://aimrferdy.com/",
      "image": {
        "@id": "https://aimrferdy.com/images/og-cover.jpg"
      },
      "worksFor": {
        "@id": "https://aimrferdy.com/#organization"
      },
	  "mainEntityOfPage": {
  "@id": "https://aimrferdy.com/#webpage"
}
    },

    // Website
    {
      "@type": "WebSite",
      "@id": "https://aimrferdy.com/#website",
      "url": "https://aimrferdy.com/",
      "name": "AI Mr Ferdy | Website Resmi Platform AI Indonesia",
	  "alternateName": "AI Mr Ferdy",
      "publisher": {
        "@id": "https://aimrferdy.com/#organization"
      },
      "inLanguage": "id-ID",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://aimrferdy.com/searchresult/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    // Image
    {
      "@type": "ImageObject",
      "@id": "https://aimrferdy.com/images/og-cover.jpg",
      "url": "https://aimrferdy.com/images/og-cover.jpg",
      "contentUrl": "https://aimrferdy.com/images/og-cover.jpg",
      "caption": "AI Mr Ferdy",
	  "width": 1200,
      "height": 630
    },

    // Breadcrumb
    {
      "@type": "BreadcrumbList",
      "@id": "https://aimrferdy.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aimrferdy.com/"
        }
      ]
    },

    // WebPage
    {
      "@type": "WebPage",
      "@id": "https://aimrferdy.com/#webpage",
      "url": "https://aimrferdy.com/",
      "name": "AI Mr Ferdy | Website Resmi Platform AI Indonesia",
      "description": "Website resmi AI Mr Ferdy yang menyediakan AI Tools, SEO, automation, dan solusi digital modern.",
      "isPartOf": {
        "@id": "https://aimrferdy.com/#website"
      },
      "publisher": {
        "@id": "https://aimrferdy.com/#organization"
      },
      "about": {
        "@id": "https://aimrferdy.com/#person"
      },
      "breadcrumb": {
        "@id": "https://aimrferdy.com/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://aimrferdy.com/images/og-cover.jpg"
      },
	  "mainEntity": {
     "@id": "https://aimrferdy.com/#organization"
     },
      "inLanguage": "id-ID"
    },

    // Navigation
    {
  "@type": "SiteNavigationElement",
  "@id": "https://aimrferdy.com/#navigation",
  "name": "Main Navigation",
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Home",
      "url": "https://aimrferdy.com/"
    },
    {
      "@type": "WebPage",
      "name": "Blog",
      "url": "https://aimrferdy.com/blog"
    },
    {
      "@type": "WebPage",
      "name": "Tools",
      "url": "https://aimrferdy.com/tools"
    },
    {
      "@type": "WebPage",
      "name": "Product",
      "url": "https://aimrferdy.com/product"
    },
    {
      "@type": "WebPage",
      "name": "About",
      "url": "https://aimrferdy.com/about"
    },
    {
      "@type": "WebPage",
      "name": "Contact",
      "url": "https://aimrferdy.com/contact"
    }
  ]
},
	// Service
	{
  "@type": "Service",
  "@id": "https://aimrferdy.com/#service",
  "name": "AI Tools & Digital Solutions",
  "provider": {
    "@id": "https://aimrferdy.com/#organization"
  },
  "serviceType": [
    "AI Tools",
    "Prompt Generator",
    "AI Humanizer",
    "SEO",
    "Automation",
    "Web Development"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  }
},
// WebApplication
{
  "@type": "WebApplication",
  "@id": "https://aimrferdy.com/#app",
  "name": "AI Mr Ferdy App",
  "url": "https://app.aimrferdy.workers.dev/",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "applicationSubCategory": "AI Tools",
  "browserRequirements": "Requires JavaScript",
},

// FAQ
{
  "@type": "FAQPage",
  "@id": "https://aimrferdy.com/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa itu AI Mr Ferdy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI Mr Ferdy adalah platform digital yang menyediakan berbagai AI Tools dan panduan praktis untuk membantu pembuatan konten, pengembangan website, optimasi SEO, serta otomatisasi pekerjaan digital bagi individu maupun bisnis."
      }
    },
    {
      "@type": "Question",
      "name": "Apa saja fitur dan layanan AI Mr Ferdy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI Mr Ferdy menghadirkan berbagai alat bantu AI, seperti generator konten, AI Article Writer, AI Humanizer, prompt generator, serta tools dan panduan seputar website, SEO, dan otomatisasi digital. Ketersediaan fitur dapat berbeda sesuai layanan yang tersedia di website."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah AI Mr Ferdy gratis untuk digunakan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beberapa AI Tools di AI Mr Ferdy dapat digunakan secara gratis. Ketentuan penggunaan, batas pemakaian, atau biaya tambahan dapat berbeda pada setiap layanan. Periksa informasi pada halaman tools yang ingin Anda gunakan untuk mengetahui ketentuannya."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah AI Mr Ferdy aman digunakan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gunakan website resmi https://aimrferdy.com dan baca ketentuan serta kebijakan privasi yang berlaku. Hindari memasukkan kata sandi, data keuangan, atau informasi pribadi yang sensitif ke dalam prompt AI. Keamanan juga bergantung pada jenis layanan dan informasi yang Anda bagikan."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah AI Mr Ferdy bisa diakses melalui HP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, website AI Mr Ferdy dapat diakses melalui smartphone, tablet, maupun komputer menggunakan browser yang kompatibel. Tampilan dan fungsi tertentu dapat berbeda bergantung pada perangkat, browser, dan layanan yang digunakan."
      }
    },
    {
      "@type": "Question",
      "name": "Di mana alamat website resmi AI Mr Ferdy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website resmi AI Mr Ferdy dapat dikunjungi melalui https://aimrferdy.com/. Di sana, Anda dapat menjelajahi AI Tools, membaca artikel dan panduan digital, serta melihat produk dan layanan yang tersedia."
      }
    }
  ]
}

  ]
};
