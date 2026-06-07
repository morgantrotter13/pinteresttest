const fs = require("fs");
const path = require("path");

const { products } = require("../data/products");
const { pages, site } = require("../data/pages");

const ROOT = path.resolve(__dirname, "..");
const PRODUCT_BY_ID = new Map(products.map((product) => [product.id, product]));

function js(value) {
  return JSON.stringify(value, null, 2);
}

function normalizePageProduct(product) {
  return {
    title: product.title,
    category: product.category,
    description: product.description,
    price: product.price,
    image: product.image,
    affiliateUrl: product.affiliateUrl,
    ...(product.badge ? { badge: product.badge } : {}),
  };
}

function buildLooks(page) {
  return page.groups.map((group, groupIndex) => ({
    id: groupIndex + 1,
    name: group.name,
    description: group.description,
    items: group.productIds.map((productId, productIndex) => {
      const product = PRODUCT_BY_ID.get(productId);
      if (!product) {
        throw new Error(`Unknown product id "${productId}" in page "${page.slug}"`);
      }

      return {
        id: productIndex + 1,
        ...normalizePageProduct(product),
      };
    }),
  }));
}

function buildItemsJs(page) {
  const collection = {
    siteName: site.siteName,
    copyrightName: site.copyrightName,
    eyebrow: site.eyebrow,
    title: page.title,
    lead: page.lead,
    shopHeading: page.shopHeading,
    shopSubheading: page.shopSubheading,
  };

  const blog = {
    date: site.date,
    readTime: page.readTime,
    sections: page.sections,
  };

  return `/**
 * Generated page data for /${page.slug}.
 * Edit data/products.js or data/pages.js, then run:
 *   node scripts/generate-pages.js
 */

const COLLECTION = ${js(collection)};

const BLOG = ${js(blog)};

const LOOKS = ${js(buildLooks(page))};
`;
}

function buildRouteHtml(page) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(page.metaTitle)}</title>
  <meta name="description" content="${escapeHtml(page.metaDescription)}">

  <!-- Pinterest / social sharing -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(page.metaTitle)}">
  <meta property="og:description" content="${escapeHtml(page.metaDescription)}">
  <meta property="og:image" content="${escapeHtml(page.ogImage)}">
  <meta name="pinterest-rich-pin" content="false">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <main>
    <section class="hero">
      <div class="container hero-inner">
        <p class="hero-eyebrow" id="hero-eyebrow">${escapeHtml(site.eyebrow)}</p>
        <h1 class="hero-title" id="hero-title">${escapeHtml(page.title)}</h1>
        <p class="hero-lead" id="hero-lead"></p>
        <p class="hero-meta" id="hero-meta"></p>
      </div>
    </section>

    <article class="blog container" id="blog">
      <div class="blog-inner" id="blog-content">
        <!-- Blog rendered by app.js -->
      </div>
    </article>

    <section class="collection" id="collection">
      <div class="container">
        <div class="collection-header">
          <h2 id="shop-heading">${escapeHtml(page.shopHeading)}</h2>
          <p class="collection-subheading" id="shop-subheading">${escapeHtml(page.shopSubheading)}</p>
        </div>
        <div id="looks-container">
          <!-- Finds rendered by app.js -->
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p class="disclosure">
        This page contains Amazon affiliate links. As an Amazon Associate I earn from qualifying purchases,
        at no extra cost to you. I only share items I genuinely love and would buy myself.
      </p>
      <p class="copyright">&copy; <span id="year"></span> <span id="footer-site-name">${escapeHtml(site.copyrightName)}</span>. All rights reserved.</p>
    </div>
  </footer>

  <script src="/${page.slug}/items.js"></script>
  <script src="/renderer.js"></script>
  <script src="/app.js"></script>
</body>
</html>
`;
}

function buildHomeHtml() {
  const cards = pages
    .map(
      (page) => `
        <article class="directory-card">
          <p class="directory-eyebrow">${escapeHtml(site.eyebrow)}</p>
          <h2>${escapeHtml(page.title)}</h2>
          <p>${escapeHtml(page.metaDescription)}</p>
          <a class="btn-shop" href="/${page.slug}/">Open Page</a>
        </article>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Authentic Finds — Affiliate Page Directory</title>
  <meta name="description" content="A directory of Vine Social affiliate landing pages for Pinterest traffic.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <main>
    <section class="hero">
      <div class="container hero-inner">
        <p class="hero-eyebrow">Vine Social</p>
        <h1 class="hero-title">Affiliate Page Directory</h1>
        <p class="hero-lead">Internal index of generated Pinterest landing pages. Share the individual page URLs, not this directory.</p>
      </div>
    </section>

    <section class="collection">
      <div class="container directory-grid">
        ${cards}
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p class="copyright">&copy; <span id="year"></span> ${escapeHtml(site.copyrightName)}. All rights reserved.</p>
    </div>
  </footer>

  <script>
    document.getElementById("year").textContent = new Date().getFullYear();
  </script>
</body>
</html>
`;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function writeFile(filePath, contents) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents);
}

function generate() {
  for (const page of pages) {
    const routeDir = path.join(ROOT, page.slug);
    writeFile(path.join(routeDir, "index.html"), buildRouteHtml(page));
    writeFile(path.join(routeDir, "items.js"), buildItemsJs(page));
  }

  writeFile(path.join(ROOT, "index.html"), buildHomeHtml());

  console.log(`Generated ${pages.length} landing pages and homepage directory.`);
}

generate();
