// ============================================================================
// Replace with real Marco's Roofing job photos.
// Central registry of all imagery across services, projects, and products.
// ============================================================================

export interface ImageAsset {
  url: string;
  alt: string;
  caption?: string;
}

export const IMAGES = {
  // Hero & Brand Highlights
  hero: {
    url: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
    alt: "Restored terracotta tile roof on an Australian suburban family home in Melbourne"
  },
  rooferAtWork: {
    url: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    alt: "Marco's Roofing tradesman in harness rebedding ridge capping on Melbourne tile roof"
  },
  solarRoof: {
    url: "/src/assets/images/solar_tiled_roof_1791864992533.jpg",
    alt: "Clean solar panel installation on modern charcoal tile roof Melbourne"
  },

  // Before & After Interactive Slider Assets
  beforeAfter: {
    before: {
      url: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
      alt: "Faded weathered roof tiles with cracked mortar and moss before restoration"
    },
    after: {
      url: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
      alt: "Restored glossy charcoal coated tile roof with flexible pointing"
    }
  },

  // Service Headers & Thumbnails
  services: {
    restoration: {
      url: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
      alt: "Full tile roof restoration in Melbourne northern suburbs"
    },
    repair: {
      url: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
      alt: "Roof leak repair, cracked tile replacement and flashing inspection"
    },
    rebedding: {
      url: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
      alt: "Rebedding and repointing of ridge caps with flexible pointing compound"
    },
    painting: {
      url: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
      alt: "Roof membrane spraying and repainting in charcoal finish"
    },
    gutters: {
      url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
      fallback: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
      alt: "New Colorbond gutters, fascia and eaves installation"
    },
    solar: {
      url: "/src/assets/images/solar_tiled_roof_1791864992533.jpg",
      alt: "Roofer-installed solar panel system on tiled roof"
    }
  },

  // Project Gallery (Melbourne Suburbs)
  projects: [
    {
      id: "bundoora-restoration",
      title: "1980s Concrete Tile Full Restoration",
      suburb: "Bundoora VIC",
      service: "Roof Restoration",
      roofType: "Concrete Tile",
      beforeUrl: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
      afterUrl: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
      alt: "Bundoora home roof restored with high pressure wash and charcoal finish"
    },
    {
      id: "doncaster-rebedding",
      title: "Terracotta Ridge Rebedding & Repointing",
      suburb: "Doncaster VIC",
      service: "Rebedding & Repointing",
      roofType: "Terracotta Tile",
      beforeUrl: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
      afterUrl: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
      alt: "Doncaster terracotta ridge cap rebedding with terracotta flexible pointing"
    },
    {
      id: "millpark-repairs",
      title: "Urgent Storm Leak & Valley Iron Repair",
      suburb: "Mill Park VIC",
      service: "Roof Leak Repair",
      roofType: "Concrete Tile",
      beforeUrl: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
      afterUrl: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
      alt: "Mill Park roof leak repaired with new flashing and rebedded tiles"
    },
    {
      id: "greensborough-painting",
      title: "Premium Acrylic Membrane Coating (Monument)",
      suburb: "Greensborough VIC",
      service: "Roof Painting",
      roofType: "Cement Tile",
      beforeUrl: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
      afterUrl: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
      alt: "Greensborough cement tile roof painted in Monument 3-coat system"
    },
    {
      id: "templestowe-solar",
      title: "Tile-Protected Solar Array & Repointing",
      suburb: "Templestowe VIC",
      service: "Solar Panels",
      roofType: "Concrete Tile",
      beforeUrl: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
      afterUrl: "/src/assets/images/solar_tiled_roof_1791864992533.jpg",
      alt: "Templestowe tile roof prepped and fitted with clean solar panel array"
    },
    {
      id: "eltham-gutters",
      title: "Full Gutter, Fascia & Eaves Replacement",
      suburb: "Eltham VIC",
      service: "Gutters, Fascia & Eaves",
      roofType: "Terracotta Tile",
      beforeUrl: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
      afterUrl: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
      alt: "Eltham bushland property fitted with high-capacity quad gutters and leaf guards"
    }
  ],

  // Shop Products
  products: {
    membrane15L: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
    primer15L: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    pointingCompound: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
    trowelSet: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    harnessKit: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg"
  }
};
