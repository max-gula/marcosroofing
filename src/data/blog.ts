export interface BlogPost {
  slug: string;
  title: string;
  category: "Restoration" | "Repairs" | "Rebedding" | "Painting" | "Maintenance";
  readTime: string;
  date: string;
  excerpt: string;
  heroImage: string;
  tableOfContents: { id: string; text: string }[];
  content: {
    heading: string;
    id: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-much-does-a-roof-restoration-cost-in-melbourne",
    title: "How Much Does a Roof Restoration Cost in Melbourne?",
    category: "Restoration",
    readTime: "5 min read",
    date: "October 2026",
    excerpt: "A transparent breakdown of roof restoration costs for concrete and terracotta tile roofs in Melbourne, and what factors actually influence the quote.",
    heroImage: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
    tableOfContents: [
      { id: "average-costs", text: "Average Melbourne Roof Restoration Costs" },
      { id: "key-factors", text: "What Drives the Price Up or Down?" },
      { id: "restoration-vs-replacement", text: "Restoration vs Full Replacement" },
      { id: "hidden-costs", text: "Watch Out for Hidden Scaffolding & Rubbish Fees" }
    ],
    content: [
      {
        heading: "Average Melbourne Roof Restoration Costs",
        id: "average-costs",
        paragraphs: [
          "For an average single-storey 3-bedroom Melbourne home (approximately 180 to 220 square metres of roof area), a complete professional tile roof restoration typically costs between $4,500 and $7,500 + GST. For a larger double-storey home or steep terracotta pitched roof, prices generally range from $7,000 to $11,000.",
          "Beware of quotes that seem suspiciously low (under $3,000). A proper restoration requires at least two days of skilled labour, high-pressure wash, replacement tiles, structural mortar rebedding, flexible pointing compound, and 3 full coats of commercial acrylic membrane. Anyone quoting half that price is either watering down paint or spraying directly over uncleaned moss."
        ]
      },
      {
        heading: "What Drives the Price Up or Down?",
        id: "key-factors",
        paragraphs: [
          "Roof pricing is never one-size-fits-all because every roof has unique access, pitch, and structural wear factors."
        ],
        bulletPoints: [
          "Roof Pitch & Storeys: Double-storey homes require compliant perimeter rail safety systems under Victorian WorkSafe regulations.",
          "Tile Type: Terracotta tiles take longer to wash safely than concrete tiles, as foot placement requires strict care to avoid breaking clay edges.",
          "Extent of Rebedding: If mortar has completely washed out along 40+ metres of ridge lines, full chiselling and re-bedding adds skilled mortar labour.",
          "Number of Broken Tiles: Replacing 5 cracked tiles is standard; replacing 80 fretted tiles requires sourcing matching vintage profiles."
        ]
      },
      {
        heading: "Restoration vs Full Replacement",
        id: "restoration-vs-replacement",
        paragraphs: [
          "A full roof replacement in Melbourne (stripping off tiles and laying new Colorbond or modern tiles) costs between $20,000 and $40,000+. Unless your roof trusses have rotted or tiles have structurally disintegrated, over 90% of Melbourne tile roofs can be completely restored to pristine condition for a quarter of that cost.",
          "A quality restoration with premium membrane provides a 10 to 15-year warranty, effectively resetting the lifespan of your roof."
        ]
      },
      {
        heading: "Watch Out for Hidden Scaffolding & Rubbish Fees",
        id: "hidden-costs",
        paragraphs: [
          "At Marco's Roofing Solutions, our quotes are fixed and upfront. When we inspect your roof in Bundoora, Doncaster, or surrounding suburbs, we photograph every issue and include waste disposal, gutter clearing, and safety gear in one straightforward written number."
        ]
      }
    ]
  },
  {
    slug: "rebedding-vs-repointing-whats-the-difference",
    title: "Rebedding vs Repointing: What's the Difference?",
    category: "Rebedding",
    readTime: "4 min read",
    date: "September 2026",
    excerpt: "Many homeowners hear these two terms used interchangeably by tradesmen. Here is exactly what each means, and why skipping rebedding is a costly mistake.",
    heroImage: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    tableOfContents: [
      { id: "what-is-rebedding", text: "What is Rebedding?" },
      { id: "what-is-repointing", text: "What is Repointing?" },
      { id: "why-do-both", text: "Why You Can't Simply Point Over Broken Bedding" },
      { id: "flexible-pointing-advance", text: "The Innovation of Flexible Acrylic Pointing" }
    ],
    content: [
      {
        heading: "What is Rebedding?",
        id: "what-is-rebedding",
        paragraphs: [
          "Rebedding is the mechanical and structural foundation of your ridge capping. Over time (usually 15 to 25 years), the sand and cement mortar that locks triangular ridge tiles to the roof breaks down due to ground vibration, thermal shock, and rain penetration.",
          "Rebedding involves lifting every ridge cap off, chipping away all the old crumbly concrete, and laying a thick, fresh bed of sand-and-cement mortar to secure the tiles straight and true."
        ]
      },
      {
        heading: "What is Repointing?",
        id: "what-is-repointing",
        paragraphs: [
          "Repointing is the protective outer finish. While the cement bedding provides mass and structural support, it is still porous. Repointing involves troweling an elastic, polymer-modified acrylic pointing compound over the face of the bedding.",
          "Modern flexible pointing conforms to Australian Standard AS 2050. It acts as an elastic waterproof skin that expands and contracts as your roof timber flexes throughout Melbourne's four-seasons-in-one-day weather."
        ]
      },
      {
        heading: "Why You Can't Simply Point Over Broken Bedding",
        id: "why-do-both",
        paragraphs: [
          "One of the most common trade shortcuts we encounter is a roofer troweling flexible pointing over crumbling, detached mortar without lifting the caps. If the bed beneath has separated from the tile, applying pointing on top will only hold for 12–18 months before the entire ridge cap breaks loose during a gusty winter storm.",
          "If the bedding is loose, full rebedding is non-negotiable for lasting safety."
        ]
      },
      {
        heading: "The Innovation of Flexible Acrylic Pointing",
        id: "flexible-pointing-advance",
        paragraphs: [
          "Decades ago, roofers used straight cement for pointing, which inevitably cracked within five years. Today's acrylic compounds retain over 100% elongation, meaning they will bend with roof movement without cracking or admitting rainwater."
        ]
      }
    ]
  },
  {
    slug: "fixing-roof-leaks-what-every-melbourne-homeowner-should-know",
    title: "Fixing Roof Leaks: What Every Melbourne Homeowner Should Know",
    category: "Repairs",
    readTime: "6 min read",
    date: "September 2026",
    excerpt: "Why roof leaks are rarely directly above the wet plaster patch, common leak causes, and why fast emergency action saves thousands.",
    heroImage: "/src/assets/images/roof_before_mossy_1791864966887.jpg",
    tableOfContents: [
      { id: "leak-mechanics", text: "How Water Actually Travels Across Rafters" },
      { id: "top-causes", text: "The Top 5 Causes of Melbourne Tile Leaks" },
      { id: "action-steps", text: "What to Do When You Spot Ceiling Moisture" },
      { id: "emergency-tarping", text: "Emergency Response & Workmanship Warranties" }
    ],
    content: [
      {
        heading: "How Water Actually Travels Across Rafters",
        id: "leak-mechanics",
        paragraphs: [
          "When water drips from a ceiling, homeowners naturally assume the leak is located right above that spot. In tile roofs, this is almost never the case.",
          "Rain usually enters through a cracked tile or failed flashing metres uphill. It hits the reflective foil sarking or timber rafters, runs silently down the incline, and pools at the lowest nail penetration or plaster joint before soaking through. Tracing this pathway requires professional leak detection."
        ]
      },
      {
        heading: "The Top 5 Causes of Melbourne Tile Leaks",
        id: "top-causes",
        paragraphs: [
          "Through thousands of roof inspections in Melbourne's Northern and Eastern suburbs, we see the same culprits repeatedly:"
        ],
        bulletPoints: [
          "Rusted Valley Irons: Older galvanised valley irons rust through from wet leaf debris, creating holes where torrential water pours into eaves.",
          "Cracked or Slipped Tiles: Hail, tree branches, or previous untrained tradesmen walking in the centre of tiles create hairline cracks.",
          "Perished Chimney Flashing: Lead flashings around brick chimneys split or lift from mortar joints over decades.",
          "Rusted Valley Nails: Pre-1980s terracotta roofs used plain steel nails that eventually rust through under watercourses.",
          "Blocked Weep Holes: Mortar blocking ridge cap drainage weep holes forces condensation back inside the attic."
        ]
      },
      {
        heading: "What to Do When You Spot Ceiling Moisture",
        id: "action-steps",
        paragraphs: [
          "1. Place a bucket under the drip and pierce a tiny pinhole in the centre of a sagging ceiling blister to release water and prevent the plasterboard from collapsing.",
          "2. Do not climb onto a wet tile roof yourself — wet tiles and moss are extremely slippery and fragile.",
          "3. Call an experienced licensed roofer immediately. We prioritise urgent active leaks across Melbourne with rapid response."
        ]
      },
      {
        heading: "Emergency Response & Workmanship Warranties",
        id: "emergency-tarping",
        paragraphs: [
          "Marco's Roofing Solutions keeps emergency dispatch slots open for sudden leaks. When we fix a leak, we photograph the before and after, replace damaged materials with galvanised and Colorbond standards, and guarantee the repair."
        ]
      }
    ]
  },
  {
    slug: "how-melbournes-weather-impacts-your-tile-roof",
    title: "How Melbourne's Weather Impacts Your Tile Roof",
    category: "Maintenance",
    readTime: "4 min read",
    date: "August 2026",
    excerpt: "From 40°C summer heatwaves to sudden winter gales and hail, Melbourne's climate puts intense stress on concrete and terracotta roofs.",
    heroImage: "/src/assets/images/hero_roof_restoration_1791864942623.jpg",
    tableOfContents: [
      { id: "thermal-cycling", text: "Thermal Shock: 40°C Days to Sudden Cold Snaps" },
      { id: "winter-moss", text: "Winter Moisture, Moss, and Lichen Growth" },
      { id: "spring-winds", text: "Spring Gale Force Winds and Loose Capping" },
      { id: "preventative-care", text: "Preventative Maintenance Schedule" }
    ],
    content: [
      {
        heading: "Thermal Shock: 40°C Days to Sudden Cold Snaps",
        id: "thermal-cycling",
        paragraphs: [
          "Melbourne is world-famous for rapid temperature swings. On a 38°C summer afternoon, roof surface temperatures can exceed 70°C. When a sudden cool southerly buster hits, the roof can drop 20 degrees in 30 minutes.",
          "This extreme thermal shock causes roofing materials to rapidly expand and contract. Rigid cement mortars crack under this tension, which is why modern flexible pointing compounds are so vital."
        ]
      },
      {
        heading: "Winter Moisture, Moss, and Lichen Growth",
        id: "winter-moss",
        paragraphs: [
          "Melbourne's damp, shaded winter months encourage moss and lichen to thrive, particularly on south-facing roof pitches. Lichen roots directly into concrete tile pores, drawing out calcium and rendering tiles porous.",
          "When porous tiles absorb winter rain, their weight increases significantly, putting strain on timber roof trusses and creating damp conditions in the attic space."
        ]
      },
      {
        heading: "Spring Gale Force Winds and Loose Capping",
        id: "spring-winds",
        paragraphs: [
          "Spring in Victoria regularly brings winds exceeding 90 km/h. If ridge cap bedding has loosened, wind vortices can lift capping tiles like sails, throwing heavy concrete caps into gutters or through car windscreens below."
        ]
      },
      {
        heading: "Preventative Maintenance Schedule",
        id: "preventative-care",
        paragraphs: [
          "Having your roof inspected every 3 to 5 years prevents minor hairline cracks and loose pointing from becoming multi-thousand dollar interior ceiling disasters. A free 15-minute inspection by Marco or Arthur gives you complete peace of mind."
        ]
      }
    ]
  },
  {
    slug: "why-repainting-your-roof-adds-value",
    title: "Why Repainting Your Roof Adds Value",
    category: "Painting",
    readTime: "5 min read",
    date: "July 2026",
    excerpt: "The roof constitutes up to 40% of your home's visible street exterior. How modern roof painting transforms property appraisals.",
    heroImage: "/src/assets/images/roof_after_glossy_1791864966260.jpg",
    tableOfContents: [
      { id: "curb-appeal", text: "Curb Appeal: 40% of Your Home's Street Facade" },
      { id: "real-estate-roi", text: "Real Estate Value & Buyer First Impressions" },
      { id: "weather-sealing", text: "Sealing Porous Concrete Tiles" },
      { id: "colour-selection", text: "Top Melbourne Colours: Monument, Charcoal & Basalt" }
    ],
    content: [
      {
        heading: "Curb Appeal: 40% of Your Home's Street Facade",
        id: "curb-appeal",
        paragraphs: [
          "Stand across the road from your house: the roof pitch accounts for nearly half of what anyone sees. Even if your garden is landscaped and your driveway newly sealed, a faded, moss-stained 1980s roof drags down the entire visual appeal of the property."
        ]
      },
      {
        heading: "Real Estate Value & Buyer First Impressions",
        id: "real-estate-roi",
        paragraphs: [
          "Melbourne real estate agents consistently report that buyers worry about aged roofs. A dirty, unmaintained roof signals possible hidden water damage and upcoming expenses. When buyers see a glossy, freshly restored Monument roof with neat pointing lines, they perceive a well-maintained home that is move-in ready.",
          "A $6,000 restoration can easily add $20,000 to $40,000 in perceived sale price at auction."
        ]
      },
      {
        heading: "Sealing Porous Concrete Tiles",
        id: "weather-sealing",
        paragraphs: [
          "Roof painting is not merely cosmetic. Our 3-coat acrylic membrane system creates a durable 100% waterproof seal. Uncoated concrete tiles absorb litres of rain water; sealed tiles shed water instantly into gutters, protecting your roof framing."
        ]
      },
      {
        heading: "Top Melbourne Colours: Monument, Charcoal & Basalt",
        id: "colour-selection",
        paragraphs: [
          "The modern architectural trend across Melbourne's suburbs is bold, contemporary dark tones. Monument® remains the number one requested colour, paired seamlessly with off-white rendered brick and timber architectural accents."
        ]
      }
    ]
  },
  {
    slug: "choosing-the-right-roofer-in-melbourne",
    title: "Choosing the Right Roofer in Melbourne",
    category: "Maintenance",
    readTime: "5 min read",
    date: "June 2026",
    excerpt: "How to avoid door-to-door scams, verify insurance and licences, and ensure you get upfront, photo-backed quotes.",
    heroImage: "/src/assets/images/roofer_craftsman_work_1791864965673.jpg",
    tableOfContents: [
      { id: "red-flags", text: "Red Flags: High-Pressure Sales & Knock-on-the-Door Tradies" },
      { id: "must-have-credentials", text: "Must-Have Credentials to Check" },
      { id: "photo-quotes", text: "Why You Must Demand a Photo-Backed Quote" },
      { id: "the-marcos-difference", text: "The Marco's Roofing Family Promise" }
    ],
    content: [
      {
        heading: "Red Flags: High-Pressure Sales & Knock-on-the-Door Tradies",
        id: "red-flags",
        paragraphs: [
          "Consumer Affairs Victoria regularly issues warnings regarding travelling roof painters who knock on doors claiming they 'just finished a job down the road with leftover paint.' Never accept a quote on your doorstep from someone offering a 50% discount if you pay cash today.",
          "Legitimate tradesmen have permanent business registrations, clear ABNs, public liability insurance, and a track record of verified local reviews."
        ]
      },
      {
        heading: "Must-Have Credentials to Check",
        id: "must-have-credentials",
        paragraphs: [
          "Before signing any roofing contract in Victoria, verify the following three essentials:"
        ],
        bulletPoints: [
          "Active Australian Business Number (ABN): Easily verifiable on the ABR register (Marco's Roofing Solutions: ABN 19 213 147 943).",
          "Comprehensive Public Liability Insurance: Minimum $10M–$20M to protect your property and neighboring homes against accidental damage.",
          "Written Workmanship Warranties: A clear written guarantee stating what happens if a ridge cap or tile fails within 7 to 15 years."
        ]
      },
      {
        heading: "Why You Must Demand a Photo-Backed Quote",
        id: "photo-quotes",
        paragraphs: [
          "Homeowners rarely climb onto their own roofs. Dishonest contractors take advantage of this by claiming severe structural damage that doesn't exist.",
          "At Marco's Roofing, we take clear, high-resolution photos on top of your roof showing exact cracks, rusted valleys, or loose mortar, and include them directly in your written quote so you see exactly what you are paying for."
        ]
      },
      {
        heading: "The Marco's Roofing Family Promise",
        id: "the-marcos-difference",
        paragraphs: [
          "As a local family-run business based in Bundoora, our livelihood depends on our reputation. We treat every home like our own: honest advice, clean work sites, and tradesmen who answer the phone when you call."
        ]
      }
    ]
  }
];
