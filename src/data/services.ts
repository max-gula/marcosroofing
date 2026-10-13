export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  tagline: string;
  heroImage: string;
  warranty: string;
  typicalDuration: string;
  inclusions: string[];
  warningSigns: string[];
  processSteps: { step: string; title: string; desc: string }[];
  roofTypes: { name: string; suitability: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: "roof-restoration",
    title: "Roof Restoration",
    shortDesc: "Complete transformation: high-pressure cleaning, tile replacement, ridge rebedding, and 3-coat protective membrane.",
    tagline: "Restore structural strength, stop leaks, and elevate street appeal at a fraction of replacement cost.",
    heroImage: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
    warranty: "10–15 Year Material Warranty + Workmanship Guarantee",
    typicalDuration: "2–4 Days (weather permitting)",
    inclusions: [
      "Full photographic roof safety and condition inspection",
      "High-pressure wash (up to 4000 PSI) removing all moss, lichen, and dirt",
      "Replacement of all cracked, broken, or fretting roof tiles",
      "Full rebedding of ridge caps in sand & cement mortar",
      "Flexible repointing compound in colour-matched UV-stable formulation",
      "Sterilising fungal treatment application to inhibit future spore regrowth",
      "High-build acrylic sealer primer coat",
      "Two heavy coats of premium 100% acrylic roofing membrane or terracotta glaze",
      "Site clean-up and ground-level gutter clear-out"
    ],
    warningSigns: [
      "Tiles look faded, discoloured, or coated in green moss and black lichen",
      "Cracked, loose, or crumbling mortar along the ridge capping lines",
      "Damp stains or water discoloration on your plaster ceilings",
      "Loose or broken tiles found lying in your perimeter gutters or on the lawn",
      "Excessive heat retention in summer due to weathered, bare tile surfaces"
    ],
    processSteps: [
      {
        step: "01",
        title: "Inspection & Safety Setup",
        desc: "We perform a roof assessment, photograph all problem zones, map cracked tiles, and secure roof edge protection."
      },
      {
        step: "02",
        title: "High-Pressure Clean",
        desc: "Specialised surface cleaners wash away 20+ years of grime, moss, and lichen down to bare substrate without flooding flashings."
      },
      {
        step: "03",
        title: "Tile Replacement & Rebedding",
        desc: "Compromised tiles are swapped for matching profiles. Loose ridge caps are lifted, cleaned of brittle mud, and rebedded in fresh mortar."
      },
      {
        step: "04",
        title: "Flexible Repointing",
        desc: "All ridge caps and hips are troweled with flexible pointing compound that moves with Melbourne's seasonal ground movement."
      },
      {
        step: "05",
        title: "3-Coat Membrane System",
        desc: "We apply an acrylic bonding primer followed by two thick coats of UV-resistant roof membrane in your chosen Colorbond® colour."
      },
      {
        step: "06",
        title: "Final Audit & Site Clean",
        desc: "Every valley and downpipe is cleared, grounds are magnetically swept for fasteners, and we present your completed photo package."
      }
    ],
    roofTypes: [
      { name: "Concrete Tile", suitability: "Highest benefit: restores colour, stops tile porosity, and adds 15–20 years of lifespan." },
      { name: "Terracotta Tile", suitability: "Gentle pressure clean, ridge repointing, and optional terracotta clear glaze formulation." },
      { name: "Metal / Colorbond®", suitability: "Full rust conversion, fastener check, primer, and high-gloss solar-reflective topcoats." },
      { name: "Natural Slate", suitability: "Individual slate slate hook replacements, valley lead repairs, and ridge pointing." }
    ],
    faqs: [
      {
        question: "How much does a full roof restoration cost compared to full replacement?",
        answer: "A complete roof restoration typically costs between 25% and 35% of the price of a total roof replacement. For most Melbourne family homes, restoration delivers the exact same structural protection, leak prevention, and 10–15 year warranty at thousands of dollars in savings."
      },
      {
        question: "How long does a roof restoration last in Melbourne's weather?",
        answer: "With trade-grade 100% acrylic membranes and flexible pointing compound, a restoration lasts 15 to 20+ years. Our material warranty guarantees against peeling, blistering, and flaking for 10 to 15 years."
      },
      {
        question: "Can you restore terracotta roof tiles?",
        answer: "Yes! Terracotta tiles have natural clay durability, but their ridge mortar crumbles over time, and tiles develop moss. We carefully clean the tiles without cracking them, rebed and repoint the ridge capping, and apply clear terracotta sealers or natural glazes."
      },
      {
        question: "Will you walk all over my roof and break more tiles?",
        answer: "We are licensed roofers with 15+ years of experience. We walk strictly on the tile laps where load is supported and carry spare matching profile tiles to replace any aged tiles that have hairline fractures."
      }
    ]
  },
  {
    slug: "roof-repair",
    title: "Roof Leak Repair",
    shortDesc: "Fast leak detection, cracked tile replacement, valley iron fixes, and flashing repairs across Melbourne.",
    tagline: "Water entering your ceiling? We prioritise urgent leaks with same-day emergency dispatch.",
    heroImage: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
    warranty: "Full Workmanship Guarantee on All Repaired Sections",
    typicalDuration: "2–6 Hours (urgent response prioritised)",
    inclusions: [
      "Pinpoint thermal and visual leak origin tracing",
      "Replacement of cracked, broken, or misaligned roof tiles",
      "Valley iron rust inspection and replacement",
      "Lead and Colorbond® apron and step flashing repairs (chimneys, walls, skylights)",
      "Re-nailing and securing slipped tiles with galvanised fasteners",
      "Sarking tear patches and timber batten structural assessment",
      "Storm damage emergency tarping if structural rebuilding is needed"
    ],
    warningSigns: [
      "Water dripping or pooling on ceiling plaster during or after rain",
      "Yellow or brownish water rings spreading across ceiling cornices",
      "Musty damp smell in roof cavities or top-floor bedrooms",
      "Sunlight visible through roof boards inside the roof attic cavity",
      "Rusted valley irons with holes along the tile channels"
    ],
    processSteps: [
      {
        step: "01",
        title: "Rapid Leak Tracing",
        desc: "Water travels along roof rafters before staining ceilings. We track the leak back to its true roof ingress origin point."
      },
      {
        step: "02",
        title: "Immediate Weatherproofing",
        desc: "If heavy rain is forecast, we implement instant waterproofing barriers or temporary weather seals."
      },
      {
        step: "03",
        title: "Substrate & Flashing Repair",
        desc: "We lift affected courses, inspect battens, replace rusted valley irons, and reform lead flashings around chimneys or parapets."
      },
      {
        step: "04",
        title: "Tile Replacement & Test",
        desc: "We install matched replacement tiles, seal joints, and conduct a controlled water run test to verify 100% watertight seal."
      }
    ],
    roofTypes: [
      { name: "Terracotta Tile", suitability: "Tracking cracked water channels and rusted valley nails common in Melbourne 1950s–80s builds." },
      { name: "Concrete Tile", suitability: "Fixing fretting tile lugs, blocked weep holes, and broken ridge ends." },
      { name: "Metal / Colorbond®", suitability: "Replacing perished rubber neoprene screw washers and loose ridge sheets." },
      { name: "Slate", suitability: "Replacing individual slipped slates using copper or stainless steel straps." }
    ],
    faqs: [
      {
        question: "How fast can you come out for an active roof leak in Melbourne?",
        answer: "We treat active leaks with top priority. Call Miri (0420 895 459) or Arthur (0450 686 022) directly — we frequently organise same-day inspection or emergency tarping across Northern and Eastern Melbourne suburbs."
      },
      {
        question: "Why is water leaking far from where my ceiling is wet?",
        answer: "Water almost always enters at a high point (such as a cracked ridge cap, broken valley, or deteriorated flashing) and runs downward along roof rafters before pooling on the lowest plaster dip. That's why amateur patch jobs fail; we trace the true origin."
      },
      {
        question: "Do you provide photos of the leak for insurance claims?",
        answer: "Yes, every inspection includes clear before-and-after roof photos and a detailed itemised invoice stating the cause of damage."
      }
    ]
  },
  {
    slug: "roof-rebedding",
    title: "Roof Rebedding & Repointing",
    shortDesc: "Complete 6-step ridge cap rejuvenation using high-grade bedding mortar and flexible acrylic pointing.",
    tagline: "Secure your ridge capping against storm winds and prevent mortar from tumbling into gutters.",
    heroImage: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    warranty: "10 Year Workmanship & Compound Warranty",
    typicalDuration: "1–2 Days",
    inclusions: [
      "Removal of all ridge, hip, and apex capping tiles",
      "Chiselling and clearing of all old crumbly bedding mortar",
      "Inspection of underlying ridge timber batten and hip irons",
      "Laying fresh high-strength sand and cement bedding mix",
      "Laser or stringline alignment and bedding of all capping tiles",
      "Troweling of premium flexible acrylic pointing compound (Australian Standard AS 2050)",
      "Weep hole drilling to allow internal condensation drainage",
      "Removal and recycling of all old mortar debris from site"
    ],
    warningSigns: [
      "Visible cracks running horizontally along the mortar line of ridge caps",
      "Loose ridge caps that wobble when touched or shift in high winds",
      "Chunks of mortar found in your gutters or downpipes",
      "Missing mortar triangles exposing the underside of apex tiles",
      "Leaks occurring specifically along the center ridge or hips during driving wind"
    ],
    processSteps: [
      {
        step: "01",
        title: "Ridge Inspection",
        desc: "We check the integrity of every ridge line, hip, and valley connection to gauge mortar degradation."
      },
      {
        step: "02",
        title: "Cap Removal & Debris Strip",
        desc: "Caps are taken off carefully. All perished, loose, and sand-weakened mortar is chipped away down to clean tile beds."
      },
      {
        step: "03",
        title: "Clean & Batten Check",
        desc: "Surfaces are blown and swept clean. Hip iron brackets and timber battens are checked for rust or dry rot."
      },
      {
        step: "04",
        title: "Fresh Mortar Bedding",
        desc: "We mix fresh sand-and-cement mortar at the exact ratio, laying a continuous structural bedding bed."
      },
      {
        step: "05",
        title: "Alignment & Cap Reset",
        desc: "Ridge caps are pressed into the mortar, straightened along a clean sightline, and struck off at a neat 45° taper."
      },
      {
        step: "06",
        title: "Flexible Pointing Application",
        desc: "We trowel flexible acrylic pointing compound over all bedding faces, locking caps into a durable elastic seal."
      }
    ],
    roofTypes: [
      { name: "Terracotta Tile", suitability: "Requires flexible compound specifically matched to terracotta clay expansion rates." },
      { name: "Concrete Tile", suitability: "Available in all standard Colorbond® matching pointing compound colours." },
      { name: "Ridge Hips & Valleys", suitability: "Special attention to hip starters and triple-junction apex covers." }
    ],
    faqs: [
      {
        question: "What is the difference between rebedding and repointing?",
        answer: "Rebedding is the structural foundation: laying the fresh cement mortar bed that sets the ridge caps level on the tiles. Repointing is the outer flexible protective skin: troweling an elastic acrylic polymer over the mortar that moves with house settlement and seals out rain."
      },
      {
        question: "Can I just repoint over cracked mortar without rebedding?",
        answer: "If the underlying mortar is crumbly, pointing over it is a band-aid that will crack off in 1–2 years. If the bedding has separated from the tiles, full rebedding is required for a 10-year guarantee."
      },
      {
        question: "What colour will the pointing be?",
        answer: "We carry flexible pointing compounds matched to all popular Australian roofing colours, including Charcoal, Monument, Terracotta, Jasper, Slate, and Classic Cream."
      }
    ]
  },
  {
    slug: "roof-painting",
    title: "Roof Painting & Membrane Coating",
    shortDesc: "Commercial 3-coat roof membrane spraying for concrete tile and metal roofs with 10–15 year warranties.",
    tagline: "Give your home an instant architectural modern makeover while sealing tiles against moisture.",
    heroImage: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
    warranty: "10–15 Year Coating Manufacturer Warranty",
    typicalDuration: "1–3 Days",
    inclusions: [
      "Thorough high-pressure wash to remove dirt, chalking, and oxidation",
      "Full surface repair and cracked tile replacements prior to coating",
      "Airless spray application of deep-penetrating primer/sealer",
      "First coat of heavy-build 100% acrylic roofing membrane",
      "Second cross-coat of high-build membrane for uniform mil thickness",
      "Edge masking of solar panels, skylights, and fascia lines",
      "Thermal heat-reflective pigments available to lower summer attic temps"
    ],
    warningSigns: [
      "Roof colour has faded from deep charcoal or red to a powdery grey",
      "Tiles absorb water during rain, making the roof heavy and damp",
      "Surface is powdery to the touch (paint oxidation / chalking)",
      "You are repainting your home exterior and want a modern matching roof colour",
      "Looking to boost home appraisal value before listing on the Melbourne market"
    ],
    processSteps: [
      {
        step: "01",
        title: "Substrate Prep & Pressure Wash",
        desc: "Paint fails if the surface isn't immaculate. We wash tiles down to original concrete with 3500+ PSI water."
      },
      {
        step: "02",
        title: "Repairs & Masking",
        desc: "All cracked tiles are replaced, ridges pointed, and gutters/solar panels masked off."
      },
      {
        step: "03",
        title: "Penetrating Sealer Primer",
        desc: "A dedicated acrylic bonding primer is sprayed to soak into porous concrete and lock the substrate."
      },
      {
        step: "04",
        title: "Two Premium Topcoats",
        desc: "Two heavy coats of UV-resistant elastomeric membrane are applied with airless spray guns."
      }
    ],
    roofTypes: [
      { name: "Concrete Tile", suitability: "Ideal. Locks porous concrete and provides a glossy or satin weatherproof finish." },
      { name: "Colorbond® & Metal", suitability: "Specialised etch primers and corrosion-inhibiting acrylic topcoats." },
      { name: "Terracotta (Unpainted)", suitability: "We recommend clear glaze or specialty terracotta-specific treatments." }
    ],
    faqs: [
      {
        question: "Will the roof paint peel or blister?",
        answer: "Not when applied properly. Cheap jobs peel because painters spray over dirty or unprimed tiles. We pressure wash thoroughly, use a dedicated high-build primer, and apply two heavy topcoats backed by our 10–15 year warranty."
      },
      {
        question: "What colours are available?",
        answer: "We supply all standard Colorbond® colours. By far the most popular in Melbourne are Monument®, Charcoal, Basalt®, Ironstone®, Night Sky®, and Deep Ocean®."
      },
      {
        question: "Can roof painting help keep my home cooler?",
        answer: "Yes! Modern solar-reflective roof membranes reflect up to 70% of infrared solar radiation, reducing roof cavity temperatures by up to 15°C on hot Melbourne summer days."
      }
    ]
  },
  {
    slug: "gutters-fascia-eaves",
    title: "Gutters, Fascia & Eaves",
    shortDesc: "Complete replacement, rust repairs, downpipe upgrades, and gutter guard installation.",
    tagline: "Protect your foundations and eaves with high-capacity Australian Colorbond® guttering systems.",
    heroImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    warranty: "20 Year Colorbond® Material Warranty + Workmanship Guarantee",
    typicalDuration: "1–2 Days",
    inclusions: [
      "Removal and eco-friendly recycling of old rusted gutters and downpipes",
      "Timber fascia inspection, dry-rot repair, or Colorbond® fascia cover fitting",
      "High-capacity quad or square-line gutter installation with correct drainage fall",
      "Round or rectangular 90mm/100mm downpipe upgrades",
      "Eaves lining repairs and timber replacement",
      "Aluminium leaf mesh and gutter guard fitting options",
      "Full water flow calibration to eliminate standing water pockets"
    ],
    warningSigns: [
      "Gutters overflowing over the front during moderate Melbourne rain",
      "Visible rust holes, peeling paint, or corrosion along gutter seams",
      "Water staining or rot on timber fascia boards and eaves linings",
      "Downpipes coming detached or draining directly against home foundations",
      "Sagging gutter sections where screws or brackets have pulled loose"
    ],
    processSteps: [
      {
        step: "01",
        title: "Fall & Drainage Assessment",
        desc: "We check roof catchment area and laser-level gutter falls to ensure rapid rainwater discharge."
      },
      {
        step: "02",
        title: "Removal & Fascia Check",
        desc: "Old gutters are detached. Timber fascia is inspected for rotted sections and reinforced."
      },
      {
        step: "03",
        title: "Gutter & Downpipe Install",
        desc: "Custom-cut continuous Colorbond® profiles are hung with heavy-duty internal brackets and sealed mitres."
      },
      {
        step: "04",
        title: "Flow Test & Guard Options",
        desc: "We test water flow with a hose to verify zero standing water and install gutter guards if requested."
      }
    ],
    roofTypes: [
      { name: "Tile Roof Connections", suitability: "Ensuring tile overhang properly directs water into the center of the gutter channel." },
      { name: "Colorbond® Systems", suitability: "Full colour matching to gutters, fascias, downpipes, and flashings." }
    ],
    faqs: [
      {
        question: "Can you clean my gutters while doing roof work?",
        answer: "Yes, every roof restoration and repair job includes cleaning out the surrounding gutters and clearing the downpipe heads at no extra charge."
      },
      {
        question: "What causes fascia rot behind gutters?",
        answer: "When gutters block with leaves or have inadequate fall, rainwater backs up and overflows the back edge of the gutter directly against the timber fascia board. Over years, this rots the timber. We fix both the timber and install high-back gutters to prevent recurrence."
      }
    ]
  },
  {
    slug: "solar-panels",
    title: "Solar Panels & Roof Integration",
    shortDesc: "Roofer-installed residential solar panels with zero tile damage, watertight bracket seals, and inverter setups.",
    tagline: "Installed by actual roofers: no broken tiles, no compromised flashings, maximum solar efficiency.",
    heroImage: "/src/assets/images/solar_tiled_roof_1791864992533.jpg",
    warranty: "25 Year Panel Performance Warranty + 10 Year Roofer Workmanship Guarantee",
    typicalDuration: "1–2 Days",
    inclusions: [
      "Pre-install roof structural integrity inspection by certified roofers",
      "Tile-bracket installation with custom tile notching (no crushed or cracked tiles)",
      "High-efficiency tier-1 monocrystalline solar panels (440W+)",
      "Premium smart inverter with real-time app monitoring",
      "Full DC conduit concealment inside roof cavity",
      "Solar panel cleaning and ongoing maintenance services",
      "Victorian solar rebate compliance and certificate of electrical safety"
    ],
    warningSigns: [
      "Rising electricity bills during hot summers and cold Melbourne winters",
      "Previous solar installers left cracked tiles or water leaks on your roof",
      "Old 1.5kW–3kW system that no longer generates adequate power",
      "Bird nesting or debris accumulating underneath existing solar arrays"
    ],
    processSteps: [
      {
        step: "01",
        title: "Roof & Solar Audit",
        desc: "We assess roof pitch, solar azimuth orientation, tile condition, and switchboard capacity."
      },
      {
        step: "02",
        title: "Tile-Safe Bracket Mounts",
        desc: "As professional roofers, we carefully lift tiles and grind neat relief channels so tiles sit dead flat over brackets without breaking."
      },
      {
        step: "03",
        title: "Panel Array & Micro-Inverters",
        desc: "Tier-1 panels are bolted to anodised rails, connected with UV-stable cabling, and grounded."
      },
      {
        step: "04",
        title: "Commissioning & App Setup",
        desc: "We test electrical parameters, commission the inverter, and walk you through the live solar smartphone app."
      }
    ],
    roofTypes: [
      { name: "Concrete Tile", suitability: "Expertise in tile grinding to prevent tile lift and wind-driven water leaks." },
      { name: "Terracotta Tile", suitability: "Delicate handling ensures zero tile breakage during bracket anchoring." },
      { name: "Colorbond®", suitability: "Direct seam clamps with zero roof penetrations." }
    ],
    faqs: [
      {
        question: "Why should a roofer install my solar panels rather than an electrical-only company?",
        answer: "The number one cause of roof leaks after solar installation is electricians walking incorrectly on tiles or forcing heavy brackets under tiles without notching them. As roofing contractors with 15+ years of experience, we guarantee your roof remains 100% watertight."
      },
      {
        question: "Should I restore my roof before installing solar panels?",
        answer: "If your roof is over 15 years old and tiles are weathered, we strongly recommend restoring and repointing before installing solar panels. Once panels are mounted, restoring the tiles underneath is significantly more difficult and expensive."
      }
    ]
  }
];
