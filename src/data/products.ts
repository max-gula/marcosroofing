// SAMPLE PRICE — confirm with owner
// All prices shown in AUD and include 10% Australian GST

export interface ProductVariant {
  id: string;
  name: string;
  colorHex?: string;
  priceDelta?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Roof Coatings & Paint" | "Bedding & Pointing" | "Tiles & Ridge Capping" | "Flashing & Sealants" | "Gutters & Accessories" | "Tools & Safety";
  price: number; // in AUD incl. GST
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  shortDesc: string;
  description: string;
  specifications: { label: string; value: string }[];
  coverage: string;
  delivery: string;
  imageUrl: string;
  galleryImages: string[];
  variants?: ProductVariant[];
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-membrane-15l",
    slug: "acrylic-tile-roof-membrane-15l",
    name: "Trade-Grade Acrylic Tile Roof Membrane 15L",
    category: "Roof Coatings & Paint",
    price: 265.00, // SAMPLE PRICE — confirm with owner
    originalPrice: 289.00,
    rating: 5.0,
    reviewCount: 38,
    inStock: true,
    featured: true,
    shortDesc: "Premium 100% pure acrylic elastomeric roof coating with high UV resistance and gloss retention.",
    description: "Designed for Melbourne's harsh UV and fluctuating climate. This high-solids, 100% acrylic elastomeric coating provides a thick, waterproof, flexible barrier that will not crack or peel. Formulated with anti-fungal biocides to inhibit moss and lichen regrowth.",
    specifications: [
      { label: "Volume", value: "15 Litres" },
      { label: "Base", value: "100% Pure Acrylic Waterborne Polymer" },
      { label: "Finish", value: "Satin / Low Gloss" },
      { label: "VOC", value: "< 45 g/L (Low VOC)" },
      { label: "Coats Required", value: "2 Coats over approved primer" }
    ],
    coverage: "Approximately 45–55 m² per 15L pail (2 coats), depending on tile porosity and profile.",
    delivery: "Next-day Melbourne metro dispatch ($35 flat rate or FREE for orders over $300). Click & Collect available from Bundoora warehouse.",
    imageUrl: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
    galleryImages: [
      "/src/assets/images/roof_after_glossy_1791864966260.jpg",
      "/src/assets/images/hero_roof_restoration_1791864942623.jpg"
    ],
    variants: [
      { id: "monument", name: "Monument®", colorHex: "#363839" },
      { id: "charcoal", name: "Deep Charcoal", colorHex: "#222426" },
      { id: "woodland-grey", name: "Woodland Grey®", colorHex: "#4D4F4D" },
      { id: "night-sky", name: "Night Sky® / Black", colorHex: "#111213" },
      { id: "terracotta-red", name: "Classic Terracotta", colorHex: "#A04A36" }
    ]
  },
  {
    id: "prod-primer-15l",
    slug: "deep-penetrating-tile-primer-15l",
    name: "Deep-Penetrating Acrylic Tile Primer / Sealer 15L",
    category: "Roof Coatings & Paint",
    price: 185.00, // SAMPLE PRICE — confirm with owner
    rating: 4.9,
    reviewCount: 24,
    inStock: true,
    featured: true,
    shortDesc: "High-adhesion binding primer that locks crumbly concrete tile surfaces before topcoating.",
    description: "A crucial first step in any concrete tile restoration. Deep-penetrating micro-emulsion formula soaks deep into porous concrete substrates, binding loose surface particles and forming an unbeatable anchor for topcoat membranes.",
    specifications: [
      { label: "Volume", value: "15 Litres" },
      { label: "Type", value: "Clear / Milky Micro-Acrylic Emulsion" },
      { label: "Dry Time", value: "Touch dry 45 mins, recoat in 2 hours" },
      { label: "Dilution", value: "Ready to use, do not thin" }
    ],
    coverage: "60–75 m² per 15L pail depending on tile absorption.",
    delivery: "Next-day Melbourne metro dispatch. Click & Collect available in Bundoora.",
    imageUrl: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    galleryImages: [
      "/src/assets/images/roofer_craftsman_work_1791864965673.jpg"
    ]
  },
  {
    id: "prod-flexible-pointing-10l",
    slug: "flexible-pointing-compound-10l",
    name: "Trade Flexible Pointing Compound 10L",
    category: "Bedding & Pointing",
    price: 119.00, // SAMPLE PRICE — confirm with owner
    originalPrice: 135.00,
    rating: 5.0,
    reviewCount: 42,
    inStock: true,
    featured: true,
    shortDesc: "Premixed acrylic polymer pointing compound tested to AS 2050. Expands and contracts with timber movement.",
    description: "The professional roofers' choice for ridge cap repointing. Pre-coloured, ready-to-trowel flexible polymer that bonds tenaciously to mortar bedding and tiles. Will not crack or break during Melbourne ground shift or severe storm gusts.",
    specifications: [
      { label: "Volume", value: "10 Litres Bucket" },
      { label: "Standard", value: "Complies with Australian Standard AS 2050" },
      { label: "Flexibility", value: "> 100% Elongation" },
      { label: "Application", value: "Pointed with standard pointing trowel at 3-5mm thickness" }
    ],
    coverage: "One 10L bucket covers approximately 20–25 linear metres of ridge capping.",
    delivery: "Next-day Melbourne metro dispatch ($35 flat rate or FREE for orders over $300).",
    imageUrl: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
    galleryImages: [
      "/src/assets/images/roof_after_glossy_1791864966260.jpg"
    ],
    variants: [
      { id: "point-monument", name: "Monument®", colorHex: "#363839" },
      { id: "point-charcoal", name: "Charcoal", colorHex: "#222426" },
      { id: "point-terracotta", name: "Terracotta Match", colorHex: "#A04A36" },
      { id: "point-grey", name: "Mid Grey", colorHex: "#686B6E" }
    ]
  },
  {
    id: "prod-bedding-mortar-20kg",
    slug: "roof-bedding-mortar-mix-20kg",
    name: "Trade Roof Bedding Mortar Mix 20kg",
    category: "Bedding & Pointing",
    price: 24.50, // SAMPLE PRICE — confirm with owner
    rating: 4.8,
    reviewCount: 19,
    inStock: true,
    shortDesc: "Pre-blended structural sand and cement mortar formulated for ridge capping bedding.",
    description: "Engineered specifically for ridge cap bedding. Formulated with graded washed brick sand and Portland cement at the optimal trade ratio to guarantee compressive strength without slumping under heavy capping tiles.",
    specifications: [
      { label: "Weight", value: "20kg Bag" },
      { label: "Mix Ratio", value: "Add ~3.2L clean water per bag" },
      { label: "Pot Life", value: "60–90 minutes once mixed" }
    ],
    coverage: "1 bag beds approx 3–4 ridge caps depending on tile profile depth.",
    delivery: "Pallet or single bag delivery across Melbourne. Heavy item freight applies for orders over 100kg.",
    imageUrl: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    galleryImages: ["/src/assets/images/roofer_craftsman_work_1791864965673.jpg"]
  },
  {
    id: "prod-terracotta-glaze-10l",
    slug: "terracotta-tile-protective-glaze-10l",
    name: "Terracotta Tile Clear Protective Glaze 10L",
    category: "Roof Coatings & Paint",
    price: 198.00, // SAMPLE PRICE — confirm with owner
    rating: 4.9,
    reviewCount: 16,
    inStock: true,
    shortDesc: "Clear siloxane wet-look sealer that enhances rich natural clay tones and repels lichen.",
    description: "Specially formulated for natural unpainted terracotta tiles. Penetrates clay pores to lock out water while creating a hydrophobic barrier that stops moss spores from rooting into the clay surface.",
    specifications: [
      { label: "Volume", value: "10 Litres" },
      { label: "Finish", value: "Clear Wet-Look Satin" },
      { label: "UV Stability", value: "100% Non-yellowing UV inhibitors" }
    ],
    coverage: "40–50 m² per 10L pail on terracotta tiles.",
    delivery: "Next-day Melbourne metro dispatch.",
    imageUrl: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    galleryImages: ["/src/assets/images/roofer_craftsman_work_1791864965673.jpg"]
  },
  {
    id: "prod-metal-roof-paint-10l",
    slug: "metal-colorbond-roof-membrane-10l",
    name: "Industrial Colorbond® & Metal Roof Paint 10L",
    category: "Roof Coatings & Paint",
    price: 215.00, // SAMPLE PRICE — confirm with owner
    rating: 4.9,
    reviewCount: 14,
    inStock: true,
    shortDesc: "Corrosion-inhibiting high-gloss acrylic coating for corrugated and trimdeck metal roofs.",
    description: "Formulated for metal, galvanized iron, and Colorbond® roofs. Outstanding anti-corrosion barrier with solar heat reflective properties that keep metal roofs cooler.",
    specifications: [
      { label: "Volume", value: "10 Litres" },
      { label: "Adhesion", value: "Direct to sound Colorbond® without etch primer" }
    ],
    coverage: "50–60 m² per 10L pail.",
    delivery: "Next-day Melbourne dispatch.",
    imageUrl: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
    galleryImages: ["/src/assets/images/roof_after_glossy_1791864966260.jpg"]
  },
  {
    id: "prod-terracotta-tiles-bundle",
    slug: "replacement-terracotta-tiles-bundle-10",
    name: "Swiss / French Profile Replacement Terracotta Tiles (Pack of 10)",
    category: "Tiles & Ridge Capping",
    price: 65.00, // SAMPLE PRICE — confirm with owner
    rating: 4.8,
    reviewCount: 22,
    inStock: true,
    shortDesc: "Sound, inspected vintage and new replacement terracotta tiles for Melbourne repairs.",
    description: "Matching tile profiles for Melbourne residential homes. Sourced and quality-inspected with zero fretting or hairline cracks. Perfect for quick DIY or tradesman leak repairs.",
    specifications: [
      { label: "Pack Size", value: "10 Tiles" },
      { label: "Profiles", value: "Standard Swiss / French Marseille Interlocking" },
      { label: "Material", value: "Kiln-Fired Natural Red Clay" }
    ],
    coverage: "Covers approximately 0.75 m² of damaged roof area.",
    delivery: "Carefully packed with foam cushioning. Melbourne delivery or warehouse pickup.",
    imageUrl: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
    galleryImages: ["/src/assets/images/roof_before_mossy_1791864966887.jpg"]
  },
  {
    id: "prod-concrete-tiles-bundle",
    slug: "concrete-replacement-roof-tiles-pack-10",
    name: "Centurion / Standard Profile Concrete Roof Tiles (Pack of 10)",
    category: "Tiles & Ridge Capping",
    price: 52.00, // SAMPLE PRICE — confirm with owner
    rating: 4.9,
    reviewCount: 18,
    inStock: true,
    shortDesc: "High-density replacement concrete tiles compatible with Monier, Boral, and Bristile roofs.",
    description: "Durable high-strength replacement concrete tiles with clean interlocking channels. Factory pre-primed, ready for paint matching or natural installation.",
    specifications: [
      { label: "Quantity", value: "10 Tiles" },
      { label: "Profile", value: "Standard Low Profile / Hacienda" }
    ],
    coverage: "Covers 1.0 m².",
    delivery: "Melbourne delivery or free pickup in Bundoora.",
    imageUrl: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
    galleryImages: ["/src/assets/images/roof_after_glossy_1791864966260.jpg"]
  },
  {
    id: "prod-ridge-caps-pack-5",
    slug: "universal-concrete-ridge-capping-pack-5",
    name: "Universal Concrete Ridge Capping Tiles (Pack of 5)",
    category: "Tiles & Ridge Capping",
    price: 48.00, // SAMPLE PRICE — confirm with owner
    rating: 5.0,
    reviewCount: 15,
    inStock: true,
    shortDesc: "Universal angular and round ridge capping tiles for apex lines and hip junctions.",
    description: "Heavyweight ridge caps engineered to lock securely into bedding mortar. Pre-formed weep channels on lower lip prevent water damming under heavy rain.",
    specifications: [
      { label: "Quantity", value: "5 Capping Tiles" },
      { label: "Linear Length", value: "Covers 2.15 linear metres" }
    ],
    coverage: "2.15m per pack.",
    delivery: "Melbourne metro delivery.",
    imageUrl: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    galleryImages: ["/src/assets/images/roofer_craftsman_work_1791864965673.jpg"]
  },
  {
    id: "prod-lead-free-flashing-5m",
    slug: "lead-free-flexible-flashing-roll-5m",
    name: "Lead-Free Aluminium Roof Flashing Roll (5m x 280mm)",
    category: "Flashing & Sealants",
    price: 145.00, // SAMPLE PRICE — confirm with owner
    rating: 5.0,
    reviewCount: 31,
    inStock: true,
    featured: true,
    shortDesc: "Non-toxic self-adhesive expanding aluminium flashing for chimney, parapet, and wall seals.",
    description: "The modern non-toxic replacement for traditional lead sheet. Expands up to 30% to conform over deep tile profiles with full-surface butyl adhesive back that never lets water pass.",
    specifications: [
      { label: "Dimensions", value: "5m Length x 280mm Width" },
      { label: "Material", value: "Corrugated Lacquered Aluminium + Butyl Adhesive" },
      { label: "Temperature Range", value: "-40°C to +90°C" }
    ],
    coverage: "5 metres of continuous wall, valley or chimney joint.",
    delivery: "Melbourne metro delivery or free store pickup.",
    imageUrl: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    galleryImages: ["/src/assets/images/roofer_craftsman_work_1791864965673.jpg"]
  },
  {
    id: "prod-roof-silicone-cartridge",
    slug: "trade-roof-gutter-neutral-silicone-300g",
    name: "Trade Neutral Cure Roof & Gutter Silicone Sealant (Box of 6)",
    category: "Flashing & Sealants",
    price: 68.00, // SAMPLE PRICE — confirm with owner
    rating: 4.9,
    reviewCount: 27,
    inStock: true,
    shortDesc: "Professional neutral-cure silicone tested to withstand intense Australian UV radiation.",
    description: "Non-corrosive, neutral cure silicone sealant designed specifically for Colorbond®, zinc, aluminium, terracotta, and concrete tiles. Guaranteed never to corrode metal flashings.",
    specifications: [
      { label: "Quantity", value: "6 x 300g Cartridges" },
      { label: "Cure Type", value: "Neutral Cure (100% Non-Corrosive)" }
    ],
    coverage: "Approx 15 linear metres of 6mm bead per cartridge.",
    delivery: "Express delivery across Melbourne.",
    imageUrl: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
    galleryImages: ["/src/assets/images/roof_after_glossy_1791864966260.jpg"]
  },
  {
    id: "prod-gutter-guard-mesh-30m",
    slug: "heavy-duty-aluminium-gutter-guard-mesh-30m",
    name: "Heavy-Duty Powdercoated Aluminium Gutter Guard Mesh (30m Roll)",
    category: "Gutters & Accessories",
    price: 175.00, // SAMPLE PRICE — confirm with owner
    rating: 4.9,
    reviewCount: 29,
    inStock: true,
    shortDesc: "Bushfire-rated (BAL-40) woven aluminium mesh to keep leaves out of Melbourne gutters.",
    description: "CSIRO fire-rated zero-flammability aluminium mesh that fastens securely from roof tiles into the outer gutter lip. Stops gum leaves and gum nuts from blocking downpipes.",
    specifications: [
      { label: "Roll Size", value: "30m Length x 200mm Width" },
      { label: "Bushfire Rating", value: "BAL-40 Bushfire Compliant" },
      { label: "Aperture", value: "3.5mm Fine Woven Mesh" }
    ],
    coverage: "30 linear metres of perimeter guttering.",
    delivery: "Free shipping across Melbourne on orders over $300.",
    imageUrl: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
    galleryImages: ["/src/assets/images/hero_roof_restoration_1791864942623.jpg"]
  },
  {
    id: "prod-pointing-trowel-set",
    slug: "professional-roof-pointing-trowel-kit",
    name: "Professional Stainless Steel Roof Pointing Trowel Kit",
    category: "Tools & Safety",
    price: 89.00, // SAMPLE PRICE — confirm with owner
    rating: 5.0,
    reviewCount: 35,
    inStock: true,
    shortDesc: "Ergonomic angled pointing trowels with flexibility tailored for crisp 45° ridge collars.",
    description: "Custom forged stainless steel blades with comfortable rubberized soft-grip handles. Includes 1x flexible ridge pointing trowel, 1x narrow tuck pointer, and 1x mortar hawk.",
    specifications: [
      { label: "Includes", value: "3 Piece Professional Set" },
      { label: "Blade", value: "Tempered High-Grade Stainless Steel" }
    ],
    coverage: "Reusable trade equipment.",
    delivery: "Same-day Bundoora pickup or Melbourne dispatch.",
    imageUrl: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    galleryImages: ["/src/assets/images/roofer_craftsman_work_1791864965673.jpg"]
  },
  {
    id: "prod-safety-harness-kit",
    slug: "roofers-complete-fall-arrest-harness-kit-15m",
    name: "Certified Roofers Fall Arrest Safety Harness Kit (15m Rope)",
    category: "Tools & Safety",
    price: 340.00, // SAMPLE PRICE — confirm with owner
    rating: 5.0,
    reviewCount: 41,
    inStock: true,
    featured: true,
    shortDesc: "AS/NZS 1891.1 certified full-body harness with shock absorber, rope grab, and roof anchor strap.",
    description: "Safety is non-negotiable on pitched tile roofs. Complete Australian Standard certified kit in a heavy-duty canvas carry bag, ready for immediate work.",
    specifications: [
      { label: "Certification", value: "AS/NZS 1891.1:2020 Compliant" },
      { label: "Rope Length", value: "15m Kernmantle Static Rope with Snap Hook" },
      { label: "Rating", value: "140kg User Weight Capacity" }
    ],
    coverage: "Individual life-safety equipment.",
    delivery: "Free express dispatch across Melbourne metro.",
    imageUrl: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    galleryImages: ["/src/assets/images/roofer_craftsman_work_1791864965673.jpg"]
  }
];
