function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderBlogHtml(sections) {
  return sections
    .map((section) => {
      const heading = section.heading
        ? `<h2 class="blog-heading">${escapeHtml(section.heading)}</h2>`
        : "";
      const paragraphs = section.paragraphs
        .map((p) => `<p>${escapeHtml(p)}</p>`)
        .join("");
      return `${heading}${paragraphs}`;
    })
    .join("");
}

function renderProductsHtml(items) {
  return items
    .map((item) => {
      const badge = item.badge
        ? `<span class="product-badge">${escapeHtml(item.badge)}</span>`
        : "";
      const productClass = item.productId
        ? ` product-image--${escapeHtml(item.productId)}`
        : "";

      return `
        <article class="product-card" role="listitem">
          <a href="${escapeHtml(item.affiliateUrl)}" target="_blank" rel="noopener noreferrer sponsored" class="product-image-wrap${productClass}" aria-label="Shop ${escapeHtml(item.title)} on Amazon">
            <img
              src="${escapeHtml(item.image)}"
              alt="${escapeHtml(item.title)}"
              loading="lazy"
              width="600"
              height="800"
            >
            ${badge}
          </a>
          <div class="product-body">
            <span class="product-category">${escapeHtml(item.category)}</span>
            <h3 class="product-title">${escapeHtml(item.title)}</h3>
            <p class="product-description">${escapeHtml(item.description)}</p>
            <div class="product-footer">
              <span class="product-price">${escapeHtml(item.price)}</span>
              <a
                href="${escapeHtml(item.affiliateUrl)}"
                class="btn-shop"
                target="_blank"
                rel="noopener noreferrer sponsored"
              >Shop on Amazon</a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderLooksHtml(looks) {
  return looks
    .map((look) => {
      return `
        <section class="look" id="look-${look.id}">
          <div class="look-header">
            <h3 class="look-name">${escapeHtml(look.name)}</h3>
            <p class="look-description">${escapeHtml(look.description)}</p>
            <div class="look-meta">
              <span class="look-count">${look.items.length} find${look.items.length !== 1 ? "s" : ""}</span>
            </div>
          </div>
          <div class="product-grid" role="list">
            ${renderProductsHtml(look.items)}
          </div>
        </section>
      `;
    })
    .join("");
}

function getEl(id, scope) {
  if (!scope || scope === document) return document.getElementById(id);
  return scope.querySelector(`#${id}`);
}

function renderPage(collection, blog, looks, scope = document) {
  const siteName = getEl("site-name", scope);
  const footerSiteName = getEl("footer-site-name", scope);
  const heroEyebrow = getEl("hero-eyebrow", scope);
  const heroTitle = getEl("hero-title", scope);
  const heroLead = getEl("hero-lead", scope);
  const heroMeta = getEl("hero-meta", scope);
  const shopHeading = getEl("shop-heading", scope);
  const shopSubheading = getEl("shop-subheading", scope);
  const blogContent = getEl("blog-content", scope);
  const looksContainer = getEl("looks-container", scope);
  const year = getEl("year", scope);

  if (siteName) siteName.textContent = collection.siteName;
  if (footerSiteName) {
    footerSiteName.textContent = collection.copyrightName || collection.siteName;
  }
  if (heroEyebrow) heroEyebrow.textContent = collection.eyebrow;
  if (heroTitle) heroTitle.textContent = collection.title;
  if (heroLead) heroLead.textContent = collection.lead;
  if (heroMeta) heroMeta.textContent = `${blog.date} · ${blog.readTime}`;
  if (shopHeading) shopHeading.textContent = collection.shopHeading;
  if (shopSubheading) shopSubheading.textContent = collection.shopSubheading;
  if (blogContent) blogContent.innerHTML = renderBlogHtml(blog.sections);
  if (looksContainer) looksContainer.innerHTML = renderLooksHtml(looks);

  if (year) year.textContent = new Date().getFullYear();

  if (scope === document) {
    document.title = `${collection.title} — Amazon Summer Style`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", collection.lead);
  }
}
