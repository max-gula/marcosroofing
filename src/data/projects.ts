export interface Project {
  id: string;
  title: string;
  suburb: string;
  category: "Restoration" | "Repairs" | "Painting" | "Rebedding" | "Solar";
  roofType: "Concrete Tile" | "Terracotta Tile" | "Colorbond® Metal";
  yearBuilt: string;
  completionTime: string;
  summary: string;
  scopeOfWork: string[];
  beforeImage: string;
  afterImage: string;
  quoteFeedback: string;
}

export const PROJECTS: Project[] = [
  {
    id: "bundoora-full-restoration",
    title: "1980s Concrete Tile Full Restoration & Recoat",
    suburb: "Bundoora",
    category: "Restoration",
    roofType: "Concrete Tile",
    yearBuilt: "Circa 1982",
    completionTime: "3 Days",
    summary: "Heavy moss growth, degraded mortar, and severe faded chalking transformed into a modern charcoal masterpiece.",
    scopeOfWork: [
      "3800 PSI surface wash removing 30+ years of lichen",
      "Replaced 42 cracked and spalling perimeter tiles",
      "Full ridge cap lifting, cleanout, and mortar rebedding",
      "Troweled flexible pointing compound in Monument match",
      "High-build acrylic sealer plus 2 coats of elastomeric membrane"
    ],
    beforeImage: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
    afterImage: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
    quoteFeedback: "Marco and Arthur were on time every morning. The roof looks like brand new tile from the road."
  },
  {
    id: "doncaster-terracotta-rebedding",
    title: "Terracotta Ridge Rebedding & Weep Holes",
    suburb: "Doncaster",
    category: "Rebedding",
    roofType: "Terracotta Tile",
    yearBuilt: "Circa 1974",
    completionTime: "2 Days",
    summary: "Old cement mortar had crumbled and was washing into gutters, leaving ridge caps completely loose in high winds.",
    scopeOfWork: [
      "Carefully numbered and detached 38 linear metres of terracotta ridge caps",
      "Removed degraded mortar bedding down to clean timber batten",
      "Layed high-strength polymer-modified mortar bedding",
      "Finished with Terracotta-matched flexible pointing compound",
      "Drilled weep holes along apex lines to stop internal condensation rot"
    ],
    beforeImage: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
    afterImage: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    quoteFeedback: "Terracotta tiles need careful handling. The team didn't break a single tile and cleaned everything up."
  },
  {
    id: "mill-park-storm-leak",
    title: "Urgent Storm Leak & Valley Iron Replacement",
    suburb: "Mill Park",
    category: "Repairs",
    roofType: "Concrete Tile",
    yearBuilt: "Circa 1989",
    completionTime: "1 Day (Same-Day Response)",
    summary: "Rusted valley irons allowed torrential rainwater to pour through plaster ceiling during a heavy Melbourne thunderstorm.",
    scopeOfWork: [
      "Traced leak origin to heavily corroded internal valley iron",
      "Cut and fitted heavy-gauge zinc-coated replacement valley iron",
      "Replaced rusted valley fixings with stainless steel clips",
      "Realigned and secured adjoining cut valley tiles",
      "Cleaned downpipe heads and tested with high-flow water test"
    ],
    beforeImage: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
    afterImage: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
    quoteFeedback: "Miri answered immediately and Arthur was on the roof within 3 hours. Saved our lounge room ceiling!"
  },
  {
    id: "greensborough-monument-coating",
    title: "Modern Monument® Acrylic Membrane Coating",
    suburb: "Greensborough",
    category: "Painting",
    roofType: "Concrete Tile",
    yearBuilt: "Circa 1995",
    completionTime: "2 Days",
    summary: "Updating home exterior to modern charcoal architectural tones while adding 15-year waterproofing protection.",
    scopeOfWork: [
      "De-mossed and pressure-washed tiles down to concrete grain",
      "Repointed fractured hip joints with flexible compound",
      "Airless sprayed high-penetration bonding sealer",
      "Applied two heavy topcoats of premium acrylic membrane in Monument®",
      "Protected gutters, skylights, and solar hot water tank"
    ],
    beforeImage: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
    afterImage: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
    quoteFeedback: "Our home value appraisal went up significantly after this restoration. Outstanding finish."
  },
  {
    id: "templestowe-solar-integration",
    title: "Tile-Protected 10kW Solar Array Installation",
    suburb: "Templestowe",
    category: "Solar",
    roofType: "Concrete Tile",
    yearBuilt: "Circa 2002",
    completionTime: "2 Days",
    summary: "Roofer-led solar installation with custom relief grinding so tiles remain flush, leak-free, and undamaged.",
    scopeOfWork: [
      "Audited northern roof face for tile soundness prior to rail fitting",
      "Precision-ground underside tile relief for heavy-duty roof brackets",
      "Installed 24x tier-1 440W high-efficiency solar panels",
      "Concealed wiring in roof space and fitted 8.2kW smart inverter",
      "Treated all adjoining ridge lines with flexible pointing"
    ],
    beforeImage: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
    afterImage: "/src/assets/images/solar_tiled_roof_1791864992533.jpg",
    quoteFeedback: "Other solar installers break tiles and pretend nothing happened. Marco's team are real roofers who did it right."
  },
  {
    id: "eltham-ridge-restoration",
    title: "Bushland Tile Roof Overhaul & Quad Gutters",
    suburb: "Eltham",
    category: "Restoration",
    roofType: "Terracotta Tile",
    yearBuilt: "Circa 1978",
    completionTime: "4 Days",
    summary: "Heavy eucalypt debris had clogged valleys and cracked tiles. Full restoration and leaf guard mesh installation.",
    scopeOfWork: [
      "Cleared organic leaf matter and pressure washed tiles",
      "Replaced fretted tiles and resealed chimney lead flashing",
      "Complete ridge rebedding and flexible pointing",
      "Installed new Colorbond® quad gutters and aluminium leaf guard mesh"
    ],
    beforeImage: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
    afterImage: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
    quoteFeedback: "Matt and Arthur did a wonderful job. Bushfire-safe leaf guards and completely restored roof."
  },
  {
    id: "reservoir-flashing-overhaul",
    title: "Terracotta Valley Irons & Flashing Renewal",
    suburb: "Reservoir",
    category: "Repairs",
    roofType: "Terracotta Tile",
    yearBuilt: "Circa 1968",
    completionTime: "1 Day",
    summary: "Persistent dampness around chimney breast resolved with new custom-formed lead apron flashing.",
    scopeOfWork: [
      "Removed perished cement fillet around brick chimney",
      "Cut and dressed 20kg code 4 lead sheet into brick mortar joints",
      "Applied silicone-free lead expansion sealant",
      "Replaced fractured tiles on either side of chimney cricket"
    ],
    beforeImage: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
    afterImage: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    quoteFeedback: "No more damp stains in the bedroom. Fair price and clean workmanship."
  },
  {
    id: "donvale-ridge-repointing",
    title: "Complete Ridge Line Flexible Repointing",
    suburb: "Donvale",
    category: "Rebedding",
    roofType: "Concrete Tile",
    yearBuilt: "Circa 1985",
    completionTime: "2 Days",
    summary: "Wind damage had destabilised apex junctions. Rebuilt with mechanical bedding and flexible pointing.",
    scopeOfWork: [
      "Rebedded 45 linear metres of hips and ridges",
      "Pointed with flexi-compound in Charcoal",
      "Installed weep holes at all tile watercourses"
    ],
    beforeImage: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
    afterImage: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
    quoteFeedback: "No-nonsense quoting. Everything explained clearly and finished on schedule."
  },
  {
    id: "box-hill-tile-recoat",
    title: "Premium Satin Black Tile Membrane Recoat",
    suburb: "Box Hill",
    category: "Painting",
    roofType: "Concrete Tile",
    yearBuilt: "Circa 1991",
    completionTime: "3 Days",
    summary: "Full high-pressure preparation, repair of 28 damaged tiles, and 3-coat deep black architectural finish.",
    scopeOfWork: [
      "Rotary water blast at 3800 PSI",
      "Replaced broken edge tiles and rebedded hip starters",
      "Applied high-build primer and 2 coats of elastomeric black membrane"
    ],
    beforeImage: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
    afterImage: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
    quoteFeedback: "Neighbors stopped to ask who did our roof! Very proud of the result."
  }
];
