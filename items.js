/**
 * Collection data — edit this file to update your Pinterest landing page.
 *
 * Each section is a mix-and-match group of Amazon fashion finds.
 * Replace image URLs with your own product photos.
 * Replace affiliateUrl with your actual Amazon affiliate links.
 */

const COLLECTION = {
  siteName: "Summer Fashion Finds",
  copyrightName: "Vine Social",
  eyebrow: "Amazon Finds",
  title: "Summer Fashion Finds",
  lead:
    "A mix-and-match summer edit of Amazon pieces I would actually wear — matching sets, easy separates, and accessories that all work together in warm neutral tones.",
  shopHeading: "Shop the Edit",
  shopSubheading:
    "Mix and match these summer pieces — tap any find to shop on Amazon",
};

const BLOG = {
  date: "June 2026",
  readTime: "4 min read",
  sections: [
    {
      heading: null,
      paragraphs: [
        "This is less of a strict outfit formula and more of a summer closet edit. I wanted pieces you can mix and match without overthinking it — matching sets for easy days, separates that pair with what you already own, and accessories that make everything feel styled.",
        "The color story is warm and wearable: brown, cream, olive, raffia, tortoiseshell, and gold. Everything feels natural together, so you can build a few different looks from the same handful of Amazon finds.",
      ],
    },
    {
      heading: "The matching sets",
      paragraphs: [
        "Sets are my favorite summer shortcut because half the styling is already done. The brown striped pant set feels relaxed and vacation-ready, the olive strapless set has that easy resort look, and the brown gingham short set is perfect for hot days when you still want to look pulled together.",
        "I would wear any of these with the jelly flats or a simple sandal, then add the raffia bag and sunglasses. They each stand alone, but they also fit into the same neutral summer palette.",
      ],
    },
    {
      heading: "The mix-and-match separates",
      paragraphs: [
        "The white cotton-linen skort is one of those pieces that can go with almost anything here. Pair it with the brown polka dot off-shoulder top for a more styled going-out look, or throw it on with a basic tank for errands, vacation, or lunch outside.",
        "The polka dot top adds a little Y2K energy without feeling too trendy. I love it with white, denim, raffia, and gold jewelry — basically all the pieces already in this edit.",
      ],
    },
    {
      heading: "The accessories that pull it together",
      paragraphs: [
        "The raffia shoulder bag, tortoiseshell sunglasses, pearl huggie earrings, and tan jelly flats are the pieces that make the edit feel cohesive. They add texture, shine, and that summer vacation feeling without introducing a totally new color story.",
        "Everything linked below goes straight to Amazon. I only share items I would actually buy and wear myself, and I will keep adding more finds as I spot them.",
      ],
    },
  ],
};

const LOOKS = [
  {
    id: 1,
    name: "Matching Sets",
    description:
      "Easy one-and-done summer outfits that still mix with the accessories and separates below.",
    items: [
      {
        id: 1,
        title: "Striped Halter Top & Wide Leg Pant Set",
        category: "2-Piece Set",
        description:
          "Brown and cream stripes, a halter top, and matching wide leg pants in soft cotton. It already looks styled, but still works with the raffia bag, jelly flats, sunglasses, and gold jewelry.",
        price: "$35.99",
        image: "images/striped-set.png",
        affiliateUrl:
          "https://www.amazon.com/dp/B0GBV7933F?tag=mpoulos13-20",
        badge: "Best Find",
      },
      {
        id: 2,
        title: "Olive Strapless Top & Wide Leg Pant Set",
        category: "2-Piece Set",
        description:
          "Olive green matching set with a pleated strapless tube top and flowy wide leg pants. Lightweight, vacation-ready, and easy to dress up with gold jewelry or keep casual with flats.",
        price: "$44.99",
        image: "images/olive-lounge-set.png",
        affiliateUrl:
          "https://www.amazon.com/dp/B0F7XH4WDN?tag=mpoulos13-20",
        badge: "New Find",
      },
      {
        id: 3,
        title: "Brown Gingham Tank & Shorts Set",
        category: "2-Piece Set",
        description:
          "A brown and white checkered tank-and-shorts set in cotton. The pockets and relaxed fit make it easy for travel, beach days, errands, or a casual summer lunch.",
        price: "$31.99",
        image: "images/checkered-short-set.png",
        affiliateUrl:
          "https://www.amazon.com/dp/B0G28VBNYV?tag=mpoulos13-20",
      },
    ],
  },
  {
    id: 2,
    name: "Mix & Match Separates",
    description:
      "Tops and bottoms that can be styled with the sets, accessories, or basics already in your closet.",
    items: [
      {
        id: 1,
        title: "White Cotton Linen A-Line Skort",
        category: "Bottoms",
        description:
          "A crisp white cotton-linen skort with an easy A-line shape. It gives the look of a mini skirt with the comfort of built-in shorts — perfect with the polka dot top, a tank, or a simple tee.",
        price: "$35.99",
        image: "images/white-linen-skort-v3.png",
        affiliateUrl:
          "https://www.amazon.com/dp/B0FC6MCKTJ?tag=mpoulos13-20",
      },
      {
        id: 2,
        title: "Brown Polka Dot Off-Shoulder Top",
        category: "Top",
        description:
          "A fitted brown polka dot crop top with an asymmetrical off-shoulder neckline. It adds a little Y2K going-out energy while still fitting the neutral summer palette.",
        price: "$25.95",
        image: "images/polka-dot-top.png",
        affiliateUrl:
          "https://www.amazon.com/SUUKSESS-Shoulder-Sleeveless-Shirts-Trendy/dp/B0FL77GBHX?tag=mpoulos13-20",
        badge: "Mix & Match",
      },
    ],
  },
  {
    id: 3,
    name: "Accessories",
    description:
      "Neutral add-ons that make the whole edit feel intentional.",
    items: [
      {
        id: 1,
        title: "Jelly Mesh Ballet Flats",
        category: "Shoes",
        description:
          "Tan jelly mesh flats that are perfect for summer. Breathable hollow design, easy slip-on fit, and a neutral tone that works with the sets, skort, and raffia accessories.",
        price: "$29.99",
        image: "images/jelly-flats.png",
        affiliateUrl:
          "https://www.amazon.com/dp/B0DS835VCF?tag=mpoulos13-20",
      },
      {
        id: 2,
        title: "Boho Woven Raffia Shoulder Bag",
        category: "Bag",
        description:
          "Woven raffia in a soft cream tone, with a little gold charm chain and seashell details that feel beachy without being over the top. It adds texture to every look in the edit.",
        price: "$33.99",
        image: "images/straw-bag.png",
        affiliateUrl:
          "https://www.amazon.com/dp/B0GJD3L43F?tag=mpoulos13-20",
      },
      {
        id: 3,
        title: "Retro Oval Tortoiseshell Sunglasses",
        category: "Accessories",
        description:
          "Chic 90s-inspired cat eye sunnies with brown lenses and a tortoiseshell frame. Lightweight, UV protection, and an easy way to make the outfits feel more styled.",
        price: "$13.59",
        image: "images/sunglasses.png",
        affiliateUrl:
          "https://www.amazon.com/dp/B0FJFMP1JF?tag=mpoulos13-20",
        badge: "Deal",
      },
      {
        id: 4,
        title: "Gold Huggie Hoop Earrings with Pearl Charms",
        category: "Jewelry",
        description:
          "Small gold huggie hoops with baroque pearl drops. They add a soft gold-and-pearl detail that ties into the warm browns, cream tones, and raffia textures.",
        price: "$14.49",
        image: "images/hoop-earrings.png",
        affiliateUrl:
          "https://www.amazon.com/dp/B086PMT54H?tag=mpoulos13-20",
      },
    ],
  },
];
