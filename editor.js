const STORAGE_KEY = "pinterest-affiliate-editor-draft";

let state = {
  collection: structuredClone(COLLECTION),
  blog: structuredClone(BLOG),
  looks: structuredClone(LOOKS),
};

const previewRoot = document.querySelector(".preview-page");

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function setStatus(text, isDraft = false) {
  const el = document.getElementById("save-status");
  el.textContent = text;
  el.classList.toggle("draft", isDraft);
}

function saveDraft() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  setStatus("Draft saved", true);
}

function loadDraft() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return false;
  try {
    const parsed = JSON.parse(saved);
    if (parsed.looks) {
      state = parsed;
      return true;
    }
    if (parsed.items) {
      state = {
        collection: parsed.collection || deepClone(COLLECTION),
        blog: parsed.blog || deepClone(BLOG),
        looks: [{ id: 1, name: "Look 1", description: "", items: parsed.items }],
      };
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

function updatePreview() {
  renderPage(state.collection, state.blog, state.looks, previewRoot);
}

function bindSimpleFields() {
  document.querySelectorAll("[data-field]").forEach((el) => {
    const path = el.dataset.field.split(".");
    const [group, key] = path;

    el.value = state[group][key] ?? "";

    el.addEventListener("input", () => {
      state[group][key] = el.value;
      updatePreview();
      saveDraft();
    });
  });
}

function renderBlogEditor() {
  const container = document.getElementById("blog-sections");
  container.innerHTML = state.blog.sections
    .map((section, sIdx) => {
      const paragraphs = section.paragraphs
        .map(
          (p, pIdx) => `
          <div class="paragraph-row" data-section="${sIdx}" data-paragraph="${pIdx}">
            <textarea data-action="paragraph">${escapeHtml(p)}</textarea>
            <button type="button" class="icon-btn" data-action="remove-paragraph" title="Remove paragraph">&times;</button>
          </div>
        `
        )
        .join("");

      return `
        <div class="section-card" data-section="${sIdx}">
          <div class="section-card-header">
            <span class="section-card-title">Section ${sIdx + 1}</span>
            <button type="button" class="editor-btn editor-btn-small editor-btn-danger" data-action="remove-section">Remove</button>
          </div>
          <div class="field-group">
            <label>Section heading <span style="font-weight:300;text-transform:none;letter-spacing:0">(optional)</span></label>
            <input type="text" data-action="heading" value="${section.heading ? escapeHtml(section.heading) : ""}" placeholder="Leave blank for intro paragraphs">
          </div>
          <div class="paragraph-list">${paragraphs}</div>
          <div class="card-actions">
            <button type="button" class="editor-btn editor-btn-small editor-btn-ghost" data-action="add-paragraph">+ Add paragraph</button>
          </div>
        </div>
      `;
    })
    .join("");

  container.querySelectorAll("[data-action='heading']").forEach((input) => {
    const sIdx = Number(input.closest("[data-section]").dataset.section);
    input.addEventListener("input", () => {
      const value = input.value.trim();
      state.blog.sections[sIdx].heading = value || null;
      updatePreview();
      saveDraft();
    });
  });

  container.querySelectorAll("[data-action='paragraph']").forEach((textarea) => {
    const row = textarea.closest("[data-section]");
    const sIdx = Number(row.dataset.section);
    const pIdx = Number(row.dataset.paragraph);
    textarea.addEventListener("input", () => {
      state.blog.sections[sIdx].paragraphs[pIdx] = textarea.value;
      updatePreview();
      saveDraft();
    });
  });

  container.querySelectorAll("[data-action='add-paragraph']").forEach((btn) => {
    const sIdx = Number(btn.closest("[data-section]").dataset.section);
    btn.addEventListener("click", () => {
      state.blog.sections[sIdx].paragraphs.push("");
      renderBlogEditor();
      updatePreview();
      saveDraft();
    });
  });

  container.querySelectorAll("[data-action='remove-paragraph']").forEach((btn) => {
    const row = btn.closest(".paragraph-row");
    const sIdx = Number(row.dataset.section);
    const pIdx = Number(row.dataset.paragraph);
    btn.addEventListener("click", () => {
      if (state.blog.sections[sIdx].paragraphs.length <= 1) return;
      state.blog.sections[sIdx].paragraphs.splice(pIdx, 1);
      renderBlogEditor();
      updatePreview();
      saveDraft();
    });
  });

  container.querySelectorAll("[data-action='remove-section']").forEach((btn) => {
    const sIdx = Number(btn.closest("[data-section]").dataset.section);
    btn.addEventListener("click", () => {
      if (state.blog.sections.length <= 1) return;
      state.blog.sections.splice(sIdx, 1);
      renderBlogEditor();
      updatePreview();
      saveDraft();
    });
  });
}

function renderItemFields(lookIdx, item, itemIdx) {
  return `
    <div class="item-card item-card-nested" data-look="${lookIdx}" data-item="${itemIdx}">
      <div class="item-card-header">
        <span class="item-card-title">${escapeHtml(item.title || `Product ${itemIdx + 1}`)}</span>
        <button type="button" class="editor-btn editor-btn-small editor-btn-danger" data-action="remove-item">Remove</button>
      </div>
      <div class="field-group">
        <label>Title</label>
        <input type="text" data-key="title" value="${escapeHtml(item.title)}">
      </div>
      <div class="field-row">
        <div class="field-group">
          <label>Category</label>
          <input type="text" data-key="category" value="${escapeHtml(item.category)}">
        </div>
        <div class="field-group">
          <label>Price</label>
          <input type="text" data-key="price" value="${escapeHtml(item.price)}">
        </div>
      </div>
      <div class="field-group">
        <label>Description</label>
        <textarea data-key="description" rows="3">${escapeHtml(item.description)}</textarea>
      </div>
      <div class="field-group">
        <label>Image URL</label>
        <input type="url" data-key="image" value="${escapeHtml(item.image)}">
      </div>
      <div class="field-group">
        <label>Amazon affiliate URL</label>
        <input type="url" data-key="affiliateUrl" value="${escapeHtml(item.affiliateUrl)}">
      </div>
      <div class="field-group">
        <label>Badge <span style="font-weight:300;text-transform:none;letter-spacing:0">(optional)</span></label>
        <input type="text" data-key="badge" value="${item.badge ? escapeHtml(item.badge) : ""}" placeholder="e.g. Best Find">
      </div>
    </div>
  `;
}

function renderLooksEditor() {
  const container = document.getElementById("look-items");
  container.innerHTML = state.looks
    .map((look, lookIdx) => {
      const total = calcLookTotal(look.items);
      const totalClass = "look-total-ok";

      const items = look.items
        .map((item, itemIdx) => renderItemFields(lookIdx, item, itemIdx))
        .join("");

      return `
        <div class="look-card" data-look="${lookIdx}">
          <div class="look-card-header">
            <span class="look-card-title">${escapeHtml(look.name || `Look ${lookIdx + 1}`)}</span>
            <button type="button" class="editor-btn editor-btn-small editor-btn-danger" data-action="remove-look">Remove look</button>
          </div>
          <div class="look-total-bar ${totalClass}">
            Look total: $${total}
          </div>
          <div class="field-group">
            <label>Look name</label>
            <input type="text" data-look-key="name" value="${escapeHtml(look.name)}">
          </div>
          <div class="field-group">
            <label>Look description</label>
            <textarea data-look-key="description" rows="2">${escapeHtml(look.description)}</textarea>
          </div>
          <div class="nested-items">${items}</div>
          <div class="card-actions">
            <button type="button" class="editor-btn editor-btn-small editor-btn-ghost" data-action="add-item">+ Add product to this look</button>
          </div>
        </div>
      `;
    })
    .join("");

  container.querySelectorAll(".look-card").forEach((lookCard) => {
    const lookIdx = Number(lookCard.dataset.look);

    lookCard.querySelectorAll("[data-look-key]").forEach((input) => {
      const key = input.dataset.lookKey;
      input.addEventListener("input", () => {
        state.looks[lookIdx][key] = input.value;
        if (key === "name") {
          lookCard.querySelector(".look-card-title").textContent =
            input.value || `Look ${lookIdx + 1}`;
        }
        updatePreview();
        saveDraft();
      });
    });

    lookCard.querySelector("[data-action='remove-look']").addEventListener("click", () => {
      if (state.looks.length <= 1) return;
      state.looks.splice(lookIdx, 1);
      renderLooksEditor();
      updatePreview();
      saveDraft();
    });

    lookCard.querySelector("[data-action='add-item']").addEventListener("click", () => {
      state.looks[lookIdx].items.push({
        id: state.looks[lookIdx].items.length + 1,
        title: "New Product",
        category: "Category",
        description: "Why you love this piece...",
        price: "$0",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop",
        affiliateUrl: "https://www.amazon.com/dp/EXAMPLE?tag=yourtag-20",
      });
      renderLooksEditor();
      updatePreview();
      saveDraft();
    });

    lookCard.querySelectorAll(".item-card-nested").forEach((card) => {
      const itemIdx = Number(card.dataset.item);

      card.querySelectorAll("[data-key]").forEach((input) => {
        const key = input.dataset.key;
        input.addEventListener("input", () => {
          const value = input.value.trim();
          if (key === "badge") {
            state.looks[lookIdx].items[itemIdx][key] = value || undefined;
          } else {
            state.looks[lookIdx].items[itemIdx][key] = input.value;
          }
          if (key === "title") {
            card.querySelector(".item-card-title").textContent =
              input.value || `Product ${itemIdx + 1}`;
          }
          if (key === "price") {
            const total = calcLookTotal(state.looks[lookIdx].items);
            const bar = lookCard.querySelector(".look-total-bar");
            bar.className = "look-total-bar look-total-ok";
            bar.textContent = `Look total: $${total}`;
          }
          updatePreview();
          saveDraft();
        });
      });

      card.querySelector("[data-action='remove-item']").addEventListener("click", () => {
        if (state.looks[lookIdx].items.length <= 1) return;
        state.looks[lookIdx].items.splice(itemIdx, 1);
        renderLooksEditor();
        updatePreview();
        saveDraft();
      });
    });
  });
}

function serializeItem(item, idx) {
  const formatString = (str) => JSON.stringify(str);
  const badge = item.badge ? `\n        badge: ${formatString(item.badge)},` : "";
  return `      {
        id: ${idx + 1},
        title: ${formatString(item.title)},
        category: ${formatString(item.category)},
        description:
          ${formatString(item.description)},
        price: ${formatString(item.price)},
        image:
          ${formatString(item.image)},
        affiliateUrl: ${formatString(item.affiliateUrl)},${badge}
      }`;
}

function serializeItemsJs() {
  const formatString = (str) => JSON.stringify(str);

  const collection = `const COLLECTION = {
  siteName: ${formatString(state.collection.siteName)},
  copyrightName: ${formatString(state.collection.copyrightName || state.collection.siteName)},
  eyebrow: ${formatString(state.collection.eyebrow)},
  title: ${formatString(state.collection.title)},
  lead:
    ${formatString(state.collection.lead)},
  shopHeading: ${formatString(state.collection.shopHeading)},
  shopSubheading: ${formatString(state.collection.shopSubheading)},
};`;

  const sections = state.blog.sections
    .map((section) => {
      const heading = section.heading
        ? `      heading: ${formatString(section.heading)},`
        : "      heading: null,";
      const paragraphs = section.paragraphs
        .map((p) => `        ${formatString(p)},`)
        .join("\n");
      return `    {
${heading}
      paragraphs: [
${paragraphs}
      ],
    }`;
    })
    .join(",\n");

  const blog = `const BLOG = {
  date: ${formatString(state.blog.date)},
  readTime: ${formatString(state.blog.readTime)},
  sections: [
${sections}
  ],
};`;

  const looks = state.looks
    .map((look, lookIdx) => {
      const items = look.items
        .map((item, itemIdx) => serializeItem(item, itemIdx))
        .join(",\n");
      return `  {
    id: ${lookIdx + 1},
    name: ${formatString(look.name)},
    description:
      ${formatString(look.description)},
    items: [
${items}
    ],
  }`;
    })
    .join(",\n");

  return `/**
 * Collection data — edit this file to update your Pinterest landing page.
 *
 * Each section is a mix-and-match group of Amazon fashion finds.
 *
 * Replace image URLs with your own product photos.
 * Replace affiliateUrl with your actual Amazon affiliate links.
 */

${collection}

${blog}

const LOOKS = [
${looks}
];
`;
}

function exportItemsJs() {
  const blob = new Blob([serializeItemsJs()], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "items.js";
  a.click();
  URL.revokeObjectURL(url);
  setStatus("Exported items.js — replace the file in your project", true);
}

function resetToDefault() {
  if (!confirm("Reset all changes and reload from items.js? Your draft will be cleared.")) return;
  localStorage.removeItem(STORAGE_KEY);
  state = {
    collection: deepClone(COLLECTION),
    blog: deepClone(BLOG),
    looks: deepClone(LOOKS),
  };
  initEditor();
  setStatus("Reset to items.js");
}

function initTabs() {
  document.querySelectorAll(".editor-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".editor-tab").forEach((t) => t.classList.remove("active"));
      document.querySelectorAll(".editor-tab-panel").forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`[data-panel="${tab.dataset.tab}"]`).classList.add("active");
    });
  });
}

function initPanelToggle() {
  const panel = document.getElementById("editor-panel");
  const layout = document.querySelector(".editor-layout");
  const fab = document.getElementById("btn-show-panel");
  const toggleBtn = document.getElementById("btn-toggle-panel");

  toggleBtn.addEventListener("click", () => {
    panel.classList.add("hidden");
    layout.classList.add("panel-hidden");
    fab.hidden = false;
    toggleBtn.textContent = "Show editor";
  });

  fab.addEventListener("click", () => {
    panel.classList.remove("hidden");
    panel.classList.add("open");
    layout.classList.remove("panel-hidden");
    fab.hidden = true;
    toggleBtn.textContent = "Hide editor";
  });
}

function initEditor() {
  bindSimpleFields();
  renderBlogEditor();
  renderLooksEditor();
  updatePreview();
}

document.getElementById("btn-add-section").addEventListener("click", () => {
  state.blog.sections.push({ heading: "New section", paragraphs: [""] });
  renderBlogEditor();
  updatePreview();
  saveDraft();
});

document.getElementById("btn-add-look").addEventListener("click", () => {
  state.looks.push({
    id: state.looks.length + 1,
    name: "New Look",
    description: "A complete summer outfit...",
    items: [
      {
        id: 1,
        title: "New Product",
        category: "Category",
        description: "Why you love this piece...",
        price: "$0",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop",
        affiliateUrl: "https://www.amazon.com/dp/EXAMPLE?tag=yourtag-20",
      },
    ],
  });
  renderLooksEditor();
  updatePreview();
  saveDraft();
});

document.getElementById("btn-export").addEventListener("click", exportItemsJs);
document.getElementById("btn-reset").addEventListener("click", resetToDefault);
document.getElementById("btn-preview-page").addEventListener("click", () => {
  window.open("index.html", "_blank");
});

initTabs();
initPanelToggle();

const hadDraft = loadDraft();
initEditor();
setStatus(hadDraft ? "Draft restored from last session" : "Synced with items.js", hadDraft);
