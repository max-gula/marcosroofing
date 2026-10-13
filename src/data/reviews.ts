export interface Review {
  id: string;
  author: string;
  suburb: string;
  rating: number;
  date: string;
  jobType: string;
  quoteSnippet: string;
  fullText: string;
  verified: boolean;
}

export const REVIEWS: Review[] = [
  {
    id: "rev-caroline",
    author: "Caroline B.",
    suburb: "Bundoora",
    rating: 5,
    date: "2 months ago",
    jobType: "Repairs & Repointing",
    quoteSnippet: "Easy quoting, punctual, cleaned up, good price.",
    fullText: "Marco and Arthur came out to inspect our cracked tiles and loose ridge caps. The quoting process was simple and completely pressure-free. They arrived on time on work day, replaced all compromised tiles, repointed the entire ridge line, and thoroughly cleaned the gutters and yard before leaving. Exceptional value and honest tradies.",
    verified: true
  },
  {
    id: "rev-ziver",
    author: "Ziver I.",
    suburb: "Reservoir",
    rating: 5,
    date: "3 months ago",
    jobType: "Urgent Leak Repair",
    quoteSnippet: "Urgent leak from rusted nails on a terracotta roof. Every tile checked and nails replaced quickly.",
    fullText: "We had water coming through the ceiling during heavy Melbourne rains. Called Miri who had Arthur out the next morning. It turned out old rusted valley nails had rotted away underneath our terracotta tiles. They checked every tile along the slope, replaced the nails with galvanised fixings, and solved the leak immediately. Highly recommend their fast emergency response.",
    verified: true
  },
  {
    id: "rev-julie",
    author: "Julie B.",
    suburb: "Doncaster",
    rating: 5,
    date: "4 months ago",
    jobType: "Roof Repairs & Flashing",
    quoteSnippet: "Quote came with photos, honest communication, neat repairs, roof weatherproof again.",
    fullText: "Unlike other contractors who gave vague estimates, Marco took detailed high-res photos on the roof and showed me exactly where the flashing had separated around the chimney and where mortar was missing. The repairs were carried out with great care. Real peace of mind knowing the roof is 100% weatherproof for winter.",
    verified: true
  },
  {
    id: "rev-rod",
    author: "Rod M.",
    suburb: "Greensborough",
    rating: 5,
    date: "5 months ago",
    jobType: "Ridge Rebedding",
    quoteSnippet: "Turned up when promised, kept everything clean, no pressure to accept the quote.",
    fullText: "Turned up when promised, which is rare these days. Marco gave us an upfront inspection with clear pricing and zero sales pressure. Turi and Jason did a fantastic job rebedding the crumbling mortar. Everything was left spotless. Friendly, reliable, and true to their word.",
    verified: true
  },
  {
    id: "rev-tegan",
    author: "Tegan C.",
    suburb: "Mill Park",
    rating: 5,
    date: "6 months ago",
    jobType: "Full Roof Restoration",
    quoteSnippet: "1970s concrete roof refurbished. Clear explanations and constant updates.",
    fullText: "Our 1970s concrete tile roof was looking tired, faded, and covered in thick moss. Marco's team completely transformed the home. They explained every stage of the 4-step process, sent progress photos throughout, and applied a 3-coat membrane in charcoal. The house looks brand new from the street.",
    verified: true
  },
  {
    id: "rev-vincent",
    author: "Vincent M.",
    suburb: "Templestowe",
    rating: 5,
    date: "7 months ago",
    jobType: "Terracotta Restoration",
    quoteSnippet: "Terracotta tiles restored. Great service, price and professionalism.",
    fullText: "Terracotta tiles require special care so you don't crack them during high pressure cleaning. The Marco's team treated the roof with immense respect. They repointed every ridge cap with colour-matched compound and left the roof looking immaculate. Outstanding workmanship at a fair price.",
    verified: true
  },
  {
    id: "rev-matt",
    author: "Matt W.",
    suburb: "Eltham",
    rating: 5,
    date: "8 months ago",
    jobType: "Restoration + Gutters",
    quoteSnippet: "Tiled roof restored and repainted, with gutters, fascia and eaves replaced, at a reasonable price.",
    fullText: "Full package: tiled roof restored and repainted, combined with replacement of rusted gutters, fascia boards and eaves. Arthur coordinated the whole job seamlessly. Everything was completed within the agreed timeframe and the property value has noticeably lifted. Great family business.",
    verified: true
  },
  {
    id: "rev-yu",
    author: "Yu K.",
    suburb: "Donvale",
    rating: 5,
    date: "9 months ago",
    jobType: "Roof Restoration",
    quoteSnippet: "Honest, committed team who went above and beyond after the job.",
    fullText: "Honest, hard-working, and committed team. A few weeks after the job finished, a violent thunderstorm hit and Marco personally followed up to ensure we had zero issues. It is so comforting to know their warranty and workmanship guarantee is genuine. 5 stars all the way.",
    verified: true
  }
];
