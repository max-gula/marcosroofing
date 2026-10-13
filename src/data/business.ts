export interface BusinessContact {
  name: string;
  role: string;
  phone: string;
  rawPhone: string;
}

export const BUSINESS_INFO = {
  name: "Marco's Roofing Solutions",
  shortName: "Marco's Roofing",
  abn: "19 213 147 943",
  address: "7 Gonella Crescent, Bundoora VIC 3083",
  suburb: "Bundoora",
  state: "VIC",
  postcode: "3083",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.6748467266187!2d145.0606113!3d-37.7029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64573130d70eb%3A0x6bce26db2c554904!2s7%20Gonella%20Cres%2C%20Bundoora%20VIC%203083!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau",
  email: "marcosroofing@yahoo.com",
  phonePrimary: {
    contact: "Miri",
    display: "0420 895 459",
    tel: "tel:0420895459",
    number: "0420 895 459"
  },
  phoneSecondary: {
    contact: "Arthur",
    display: "0450 686 022",
    tel: "tel:0450686022",
    number: "0450 686 022"
  },
  experience: "15+ Years",
  warranties: "7–15 Year Material Warranties + Workmanship Guarantee",
  licenceStatus: "Registered Tradesman [LICENCE NO.]",
  insurance: "100% Licensed & Fully Insured ($20M Public Liability)",
  googleRating: 5.0,
  reviewCount: "89+",
  hours: "Flexible — call any time, we'll get back to you same day",
  serviceArea: "Melbourne, focusing on Northern and Eastern suburbs",
  paymentMethods: ["Cash", "Direct Deposit", "Visa / Mastercard", "EFTPOS"],
  primarySuburbs: [
    "Bundoora",
    "Doncaster",
    "Mill Park",
    "Greensborough",
    "Templestowe",
    "Eltham",
    "Reservoir",
    "Donvale",
    "Box Hill",
    "Heidelberg",
    "Ivanhoe",
    "Rosanna",
    "Macleod",
    "Watsonia",
    "Montmorency",
    "Diamond Creek",
    "Warrandyte",
    "Bulleen",
    "Balwyn",
    "Ringwood",
    "Mitcham"
  ],
  teamMembers: [
    {
      name: "Marco",
      role: "Founder & Master Roofer",
      bio: "15+ years restoring terracotta and concrete tile roofs across Melbourne. Known on-site for meticulous ridge pointing and upfront honesty."
    },
    {
      name: "Arthur",
      role: "Co-Founder & Site Operations",
      bio: "Runs our field operations, technical inspections, and job scheduling. Dedicated to completing jobs on time without leaving a mess."
    },
    {
      name: "Miri",
      role: "Customer Enquiries & Quoting",
      bio: "Your first point of contact. Helps organise free on-site inspections, photo-backed quotes, and rapid leak dispatch."
    },
    {
      name: "Turi",
      role: "Restoration & Pointing Specialist",
      bio: "Expert in flexible compound pointing, valley iron replacement, and pressure washing delicate terracotta tiles safely."
    },
    {
      name: "Jason",
      role: "Leak Detection & Gutter Specialist",
      bio: "Specialises in flashing rectification, cracked tile replacements, and gutter/fascia renewals."
    }
  ]
};
