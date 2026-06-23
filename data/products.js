const products = [
  {
    id: "striped-halter-pant-set",
    title: "Striped Halter Top & Wide Leg Pant Set",
    category: "2-Piece Set",
    price: "$35.99",
    image: "/images/striped-set.png",
    affiliateUrl: "https://www.amazon.com/dp/B0GBV7933F?tag=mpoulos13-20",
    badge: "Best Find",
    colors: ["brown", "cream"],
    tags: ["matching-set", "vacation", "neutral", "pants", "cotton", "summer"],
    description:
      "Brown and cream stripes, a halter top, and matching wide leg pants in soft cotton. It already looks styled, but still works with the raffia bag, jelly flats, sunglasses, and gold jewelry.",
  },
  {
    id: "olive-strapless-pant-set",
    title: "Olive Strapless Top & Wide Leg Pant Set",
    category: "2-Piece Set",
    price: "$44.99",
    image: "/images/olive-lounge-set.png",
    affiliateUrl: "https://www.amazon.com/dp/B0F7XH4WDN?tag=mpoulos13-20",
    badge: "New Find",
    colors: ["olive", "green"],
    tags: ["matching-set", "vacation", "resort", "pants", "lounge", "summer"],
    description:
      "Olive green matching set with a pleated strapless tube top and flowy wide leg pants. Lightweight, vacation-ready, and easy to dress up with gold jewelry or keep casual with flats.",
  },
  {
    id: "brown-gingham-short-set",
    title: "Brown Gingham Tank & Shorts Set",
    category: "2-Piece Set",
    price: "$31.99",
    image: "/images/checkered-short-set.png",
    affiliateUrl: "https://www.amazon.com/dp/B0G28VBNYV?tag=mpoulos13-20",
    colors: ["brown", "white"],
    tags: ["matching-set", "shorts", "gingham", "cotton", "casual", "summer"],
    description:
      "A brown and white checkered tank-and-shorts set in cotton. The pockets and relaxed fit make it easy for travel, beach days, errands, or a casual summer lunch.",
  },
  {
    id: "butter-yellow-striped-short-set",
    title: "Butter Yellow Striped Tank & Shorts Set",
    category: "2-Piece Set",
    price: "$37.99",
    image: "/images/butter-yellow-striped-set.png",
    affiliateUrl:
      "https://www.amazon.com/SENSERISE-Striped-Outfits-Spaghetti-Waisted/dp/B0GXQ4K4SP?tag=mpoulos13-20",
    badge: "Butter Yellow",
    colors: ["yellow", "white"],
    tags: ["matching-set", "shorts", "striped", "butter-yellow", "lounge", "summer"],
    description:
      "A butter yellow striped tank-and-shorts set that feels bright but still soft. Easy for lounging, beach mornings, coffee runs, or mixing into a warm-weather capsule when you want a little color.",
  },
  {
    id: "navy-spaghetti-strap-workout-set",
    title: "Navy Spaghetti Strap Workout Set",
    category: "Activewear Set",
    price: "$39.95",
    image: "/images/suuksess-navy-workout-set.png",
    affiliateUrl:
      "https://www.amazon.com/SUUKSESS-Pieces-Workout-Spaghetti-Matching/dp/B0G433SS8G?tag=mpoulos13-20",
    badge: "Active Set",
    colors: ["navy", "white"],
    tags: ["activewear", "matching-set", "biker-shorts", "workout", "summer", "navy"],
    description:
      "A navy two-piece activewear set with a padded spaghetti strap cami and high waist biker shorts. Sporty enough for workouts, but still easy for errands, walks, travel days, or casual summer layering.",
  },
  {
    id: "blue-gingham-underwire-bikini",
    title: "Blue Gingham Underwire Bikini Set",
    category: "Swimwear",
    price: "$26.72",
    image: "/images/blue-gingham-bikini.png",
    affiliateUrl: "https://www.amazon.com/dp/B0FC2MVPXP?tag=mpoulos13-20",
    badge: "Swim Pick",
    colors: ["blue", "white"],
    tags: ["swimwear", "bikini", "gingham", "vacation", "beach", "summer"],
    description:
      "A blue gingham two-piece bikini with an underwire top, tie details, and a soft ruffle trim. It adds a little beachy color to the edit and works perfectly under the white linen cover-up pants.",
  },
  {
    id: "white-crochet-swim-cover-up",
    title: "White Crochet Swim Cover-Up Dress",
    category: "Swim Cover-Up",
    price: "$29.99",
    image: "/images/white-crochet-cover-up.png",
    affiliateUrl: "https://www.amazon.com/dp/B0BYSXZKTN?tag=mpoulos13-20",
    badge: "Beach Layer",
    colors: ["white", "cream"],
    tags: ["cover-up", "crochet", "swimwear", "beach", "vacation", "summer"],
    description:
      "A white crochet mesh swim cover-up dress with long sleeves and an easy beachy fit. It layers perfectly over the blue gingham bikini and adds texture to vacation outfits with raffia accessories.",
  },
  {
    id: "white-linen-skort",
    title: "White Cotton Linen A-Line Skort",
    category: "Bottoms",
    price: "$35.99",
    image: "/images/white-linen-skort-v3.png",
    affiliateUrl: "https://www.amazon.com/dp/B0FC6MCKTJ?tag=mpoulos13-20",
    colors: ["white", "cream"],
    tags: ["separates", "skort", "linen", "cotton", "white", "minimal"],
    description:
      "A crisp white cotton-linen skort with an easy A-line shape. It gives the look of a mini skirt with the comfort of built-in shorts — perfect with the polka dot top, a tank, or a simple tee.",
  },
  {
    id: "white-linen-wide-leg-pants",
    title: "White Linen Wide Leg Cover-Up Pants",
    category: "Bottoms",
    price: "$36.99",
    image: "/images/white-linen-pants.png",
    affiliateUrl:
      "https://www.amazon.com/RoseSeek-Swimsuit-Coverup-Vacation-Outfits/dp/B0G7DXWS1F?tag=mpoulos13-20",
    badge: "Capsule Pick",
    colors: ["white", "cream"],
    tags: ["separates", "linen", "pants", "cover-up", "vacation", "capsule"],
    description:
      "Loose white linen-style wide leg pants with an easy drawstring waist. They work as a swimsuit cover-up, vacation pant, or breezy capsule piece with tanks, tube tops, and raffia accessories.",
  },
  {
    id: "striped-barrel-drawstring-pants",
    title: "Striped Barrel Drawstring Pants",
    category: "Bottoms",
    price: "$29.99",
    image: "/images/striped-barrel-pants.png",
    affiliateUrl:
      "https://www.amazon.com/ANRABESS-Striped-Elastic-Drawstring-Trousers/dp/B0G2XJN66S?tag=mpoulos13-20",
    badge: "Capsule Pick",
    colors: ["beige", "black", "cream"],
    tags: ["separates", "pants", "striped", "barrel", "drawstring", "capsule"],
    description:
      "Relaxed striped barrel pants with an elastic drawstring waist and casual wide leg shape. They feel like an easy upgrade from lounge pants and pair well with tanks, button-downs, raffia slides, and simple summer accessories.",
  },
  {
    id: "brown-polka-dot-top",
    title: "Brown Polka Dot Off-Shoulder Top",
    category: "Top",
    price: "$25.95",
    image: "/images/polka-dot-top.png",
    affiliateUrl:
      "https://www.amazon.com/SUUKSESS-Shoulder-Sleeveless-Shirts-Trendy/dp/B0FL77GBHX?tag=mpoulos13-20",
    badge: "Mix & Match",
    colors: ["brown", "white"],
    tags: ["separates", "top", "going-out", "polka-dot", "y2k", "neutral"],
    description:
      "A fitted brown polka dot crop top with an asymmetrical off-shoulder neckline. It adds a little Y2K going-out energy while still fitting the neutral summer palette.",
  },
  {
    id: "yellow-pleated-babydoll-top",
    title: "Yellow Pleated Babydoll Tank Top",
    category: "Top",
    price: "$28.99",
    image: "/images/yellow-pleated-babydoll-top.png",
    affiliateUrl: "https://www.amazon.com/dp/B0F26MRS7Q?tag=mpoulos13-20",
    badge: "New Top",
    colors: ["yellow", "butter-yellow"],
    tags: ["separates", "top", "tank", "babydoll", "pleated", "summer"],
    description:
      "A soft yellow sleeveless babydoll top with pleated detail, a round neckline, and an easy peplum shape. It adds a light pop of color while still pairing with denim, white linen pants, skorts, and neutral summer accessories.",
  },
  {
    id: "white-ribbed-racerback-tank",
    title: "White Ribbed High Neck Racerback Tank",
    category: "Top",
    price: "$9.99",
    image: "/images/white-ribbed-tank.png",
    affiliateUrl:
      "https://www.amazon.com/GKBK-Womens-Sleeveless-Ribbed-Racerback/dp/B0D3LNZX2V?tag=mpoulos13-20",
    badge: "Capsule Basic",
    colors: ["white"],
    tags: ["top", "tank", "ribbed", "basic", "capsule", "white"],
    description:
      "A fitted white ribbed tank with a high neck and racerback shape. This is the simple capsule basic that works with linen pants, skorts, denim, shorts, and layered button-downs.",
  },
  {
    id: "jelly-mesh-flats",
    title: "Jelly Mesh Ballet Flats",
    category: "Shoes",
    price: "$29.99",
    image: "/images/jelly-flats.png",
    affiliateUrl: "https://www.amazon.com/dp/B0DS835VCF?tag=mpoulos13-20",
    colors: ["tan", "neutral"],
    tags: ["shoes", "flats", "beach", "summer", "neutral", "jelly"],
    description:
      "Tan jelly mesh flats that are perfect for summer. Breathable hollow design, easy slip-on fit, and a neutral tone that works with the sets, skort, and raffia accessories.",
  },
  {
    id: "raffia-platform-slides",
    title: "Raffia Platform Espadrille Slides",
    category: "Shoes",
    price: "$39.98",
    image: "/images/raffia-platform-slides.png",
    affiliateUrl:
      "https://www.amazon.com/Monrovia-Platform-Espadrilles-Vacation-Comfortable/dp/B0FJS1R2ZG?tag=mpoulos13-20",
    colors: ["raffia", "tan", "neutral"],
    tags: ["shoes", "slides", "raffia", "espadrille", "vacation", "summer"],
    description:
      "Woven raffia platform slides with an easy slip-on shape. They add texture and height while still feeling casual enough for vacation outfits, linen pants, and summer sets.",
  },
  {
    id: "adidas-earth-strata-trainers",
    title: "Adidas Originals Earth Strata Trainers",
    category: "Shoes",
    price: "$150",
    image: "/images/adidas-earth-strata-trainers.png",
    affiliateUrl:
      "https://www.amazon.com/adidas-Handball-Spezial-Earth-Strata/dp/B0CZDY6YHS?tag=mpoulos13-20",
    badge: "Splurge Pick",
    colors: ["brown", "cream", "gum"],
    tags: ["shoes", "sneakers", "adidas", "brown", "casual", "capsule"],
    description:
      "Brown suede Adidas Originals trainers with cream stripes and a gum sole. They add a sporty casual finish to the capsule and work especially well with barrel pants, denim layers, simple tanks, and neutral summer outfits.",
  },
  {
    id: "white-ruffle-ankle-socks",
    title: "White Ruffle Ankle Socks",
    category: "Accessories",
    price: "$9.99",
    image: "/images/white-ruffle-socks.png",
    affiliateUrl:
      "https://www.amazon.com/AniKigu-Women-Ruffle-Frilly-Womens/dp/B0GGR87313?tag=mpoulos13-20",
    badge: "4-Pack",
    colors: ["white"],
    tags: ["socks", "ruffle", "white", "accessories", "sneakers", "capsule"],
    description:
      "A 4-pack of white ruffle ankle socks that adds a soft, feminine detail to sneakers, flats, and casual summer outfits. They are an easy add-on for styling the Adidas trainers or making simple looks feel more intentional.",
  },
  {
    id: "denim-button-down-shirt",
    title: "Oversized Denim Button-Down Shirt",
    category: "Layer",
    price: "$38.99",
    image: "/images/denim-button-down.png",
    affiliateUrl:
      "https://www.amazon.com/Astylish-Western-Shacket-Chambray-Oversized/dp/B0D14B39P3?tag=mpoulos13-20",
    colors: ["denim", "blue"],
    tags: ["layer", "button-down", "denim", "capsule", "oversized", "casual"],
    description:
      "An oversized denim button-down that works as a lightweight summer layer. Wear it open over a white tank, half-tucked with shorts, or thrown over linen pants for an easy capsule outfit.",
  },
  {
    id: "raffia-shoulder-bag",
    title: "Boho Woven Raffia Shoulder Bag",
    category: "Bag",
    price: "$33.99",
    image: "/images/straw-bag.png",
    affiliateUrl: "https://www.amazon.com/dp/B0GJD3L43F?tag=mpoulos13-20",
    colors: ["cream", "raffia", "gold"],
    tags: ["bag", "raffia", "woven", "vacation", "beach", "neutral"],
    description:
      "Woven raffia in a soft cream tone, with a little gold charm chain and seashell details that feel beachy without being over the top. It adds texture to every look in the edit.",
  },
  {
    id: "quilted-puffer-tote-bag",
    title: "Quilted Puffer Tote Bag",
    category: "Bag",
    price: "$31.88",
    image: "/images/quilted-puffer-tote.png",
    affiliateUrl:
      "https://www.amazon.com/Quilted-Crossbody-Shoulder-Oversized-Carryall/dp/B0CYPV7G66?tag=mpoulos13-20",
    badge: "Travel Bag",
    colors: ["beige", "cream"],
    tags: ["bag", "tote", "puffer", "quilted", "travel", "capsule"],
    description:
      "A beige quilted puffer tote with a soft oversized shape and zipper closure. It gives the edit a casual travel bag option for errands, airport days, beach packing, or carrying the capsule pieces on the go.",
  },
  {
    id: "retro-tortoise-sunglasses",
    title: "Retro Oval Tortoiseshell Sunglasses",
    category: "Accessories",
    price: "$13.59",
    image: "/images/sunglasses.png",
    affiliateUrl: "https://www.amazon.com/dp/B0FJFMP1JF?tag=mpoulos13-20",
    badge: "Deal",
    colors: ["brown", "tortoise"],
    tags: ["sunglasses", "accessories", "brown", "90s", "summer"],
    description:
      "Chic 90s-inspired cat eye sunnies with brown lenses and a tortoiseshell frame. Lightweight, UV protection, and an easy way to make the outfits feel more styled.",
  },
  {
    id: "pearl-huggie-earrings",
    title: "Gold Huggie Hoop Earrings with Pearl Charms",
    category: "Jewelry",
    price: "$14.49",
    image: "/images/hoop-earrings.png",
    affiliateUrl: "https://www.amazon.com/dp/B086PMT54H?tag=mpoulos13-20",
    colors: ["gold", "pearl"],
    tags: ["jewelry", "earrings", "gold", "pearl", "accessories"],
    description:
      "Small gold huggie hoops with baroque pearl drops. They add a soft gold-and-pearl detail that ties into the warm browns, cream tones, and raffia textures.",
  },
  {
    id: "starfish-pearl-necklace",
    title: "Pearl Starfish Choker Necklace",
    category: "Jewelry",
    price: "$9.99",
    image: "/images/starfish-pearl-necklace.png",
    affiliateUrl:
      "https://www.amazon.com/Sereney-Starfish-Necklace-Seashell-Daughter/dp/B0F6BF3ZQK?tag=mpoulos13-20",
    colors: ["pearl", "gold"],
    tags: ["jewelry", "necklace", "pearl", "starfish", "beach", "accessories"],
    description:
      "A dainty pearl choker with a small gold starfish charm. It gives the capsule a soft beachy detail without overpowering the neutral outfits.",
  },
];

module.exports = { products };
