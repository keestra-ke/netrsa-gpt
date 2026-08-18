// Realistic dummy data for Nairobi estates

export const housingListings = [
  {
    id: 1,
    title: "Spacious Bedsitter in Githurai 44",
    location: "Githurai 44, Kimani Plot",
    estate: "Githurai",
    price: 5500,
    type: "Bedsitter",
    floor: 2,
    rooms: 1,
    bathrooms: 1,
    size: "4m x 5m",
    water: "Constant",
    electricity: "Stable",
    security: "Good",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    posted: "2 hours ago",
    views: 47,
    caretaker: "Mama Akinyi",
    features: ["Balcony", "Tile Floor", "Water Tank"]
  },
  {
    id: 2,
    title: "Affordable Single Room - Baba Dogo",
    location: "Baba Dogo Phase 3",
    estate: "Baba Dogo",
    price: 3500,
    type: "Single Room",
    floor: 1,
    rooms: 1,
    bathrooms: "Shared",
    size: "3m x 4m",
    water: "Rationed",
    electricity: "Token",
    security: "Fair",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    posted: "4 hours ago",
    views: 89,
    caretaker: "John Kamau",
    features: ["Ground Floor", "Near Matatu", "Shop Inside"]
  },
  {
    id: 3,
    title: "Modern One Bedroom - Kasarani",
    location: "Kasarani Mwiki, Road C",
    estate: "Kasarani",
    price: 9500,
    type: "One Bedroom",
    floor: 3,
    rooms: 1,
    bathrooms: 1,
    size: "6m x 5m",
    water: "Constant",
    electricity: "Stable",
    security: "Excellent",
    image: "https://images.unsplash.com/photo-1502005229766-939cb6a5f948?w=400&h=300&fit=crop",
    posted: "1 day ago",
    views: 124,
    caretaker: "Grace Wanjiku",
    features: ["Parking", "Generator", "CCTV", "Balcony"]
  },
  {
    id: 4,
    title: "Cozy Bedsitter - Kayole",
    location: "Kayole Komarock, Stage 2",
    estate: "Kayole",
    price: 6000,
    type: "Bedsitter",
    floor: 2,
    rooms: 1,
    bathrooms: 1,
    size: "4.5m x 4m",
    water: "Constant",
    electricity: "Token",
    security: "Good",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    posted: "30 mins ago",
    views: 23,
    caretaker: "Peter Ochieng",
    features: ["Newly Renovated", "Water Heater", "Secure Gate"]
  },
  {
    id: 5,
    title: "Two Bedroom Family House - Roysambu",
    location: "Roysambu Garden Estate",
    estate: "Roysambu",
    price: 15000,
    type: "Two Bedroom",
    floor: 1,
    rooms: 2,
    bathrooms: 2,
    size: "8m x 6m",
    water: "Constant",
    electricity: "Stable",
    security: "Excellent",
    image: "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?w=400&h=300&fit=crop",
    posted: "5 hours ago",
    views: 156,
    caretaker: "Mary Njeri",
    features: ["Compound", "Children Play Area", "Ample Parking", "Store"]
  },
  {
    id: 6,
    title: "Budget Single Room - Pipeline",
    location: "Pipeline East, Near Market",
    estate: "Pipeline",
    price: 3000,
    type: "Single Room",
    floor: 3,
    rooms: 1,
    bathrooms: "Shared",
    size: "3m x 3.5m",
    water: "Rationed",
    electricity: "Token",
    security: "Fair",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
    posted: "Just now",
    views: 12,
    caretaker: "David Mutua",
    features: ["Near Market", "Matatu Stage", "Shops Nearby"]
  }
];

export const marketplaceItems = [
  {
    id: 1,
    title: "2-Seater Sofa - Good Condition",
    price: 8500,
    category: "Furniture",
    location: "Githurai 44, Block B",
    seller: "James M.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    posted: "Today",
    condition: "Used - 2 years"
  },
  {
    id: 2,
    title: "Samsung 32\" Smart TV",
    price: 12000,
    category: "Electronics",
    location: "Baba Dogo Phase 2",
    seller: "Sarah K.",
    image: "https://images.unsplash.com/photo-1593784697956-ec9f47a87943?w=400&h=300&fit=crop",
    posted: "Yesterday",
    condition: "Like New"
  },
  {
    id: 3,
    title: "Double Bed Frame with Mattress",
    price: 15000,
    category: "Furniture",
    location: "Kasarani Mwiki",
    seller: "Peter O.",
    image: "https://images.unsplash.com/photo-1505693416388-b0346efee535?w=400&h=300&fit=crop",
    posted: "2 days ago",
    condition: "Used - 1 year"
  },
  {
    id: 4,
    title: "Gas Cooker 2-Burner + Cylinder",
    price: 3500,
    category: "Kitchen",
    location: "Kayole Komarock",
    seller: "Grace W.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    posted: "Today",
    condition: "Good"
  },
  {
    id: 5,
    title: "Office Desk & Chair Set",
    price: 6000,
    category: "Furniture",
    location: "Roysambu Garden",
    seller: "John K.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop",
    posted: "3 days ago",
    condition: "Used - 3 years"
  },
  {
    id: 6,
    title: "Baby Cot with Mattress",
    price: 4500,
    category: "Baby Items",
    location: "Pipeline East",
    seller: "Mary N.",
    image: "https://images.unsplash.com/photo-1596464716127-f9a081942109?w=400&h=300&fit=crop",
    posted: "Today",
    condition: "Excellent"
  },
  {
    id: 7,
    title: "Washing Machine 7kg",
    price: 18000,
    category: "Electronics",
    location: "Githurai 45",
    seller: "David M.",
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc03a5e0c?w=400&h=300&fit=crop",
    posted: "Yesterday",
    condition: "Like New"
  },
  {
    id: 8,
    title: "Dining Table 4-Seater",
    price: 9000,
    category: "Furniture",
    location: "Baba Dogo Phase 3",
    seller: "Lucy A.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop",
    posted: "4 days ago",
    condition: "Good"
  }
];

export const buildingPulseData = {
  water: { status: "Constant", lastUpdate: "30 mins ago" },
  electricity: { status: "Stable", lastUpdate: "1 hour ago" },
  security: { status: "Normal", lastUpdate: "2 hours ago" },
  garbage: { status: "Collection at 7:30 AM", lastUpdate: "Today" },
  caretaker: { name: "Mama Akinyi", contact: "0712 XXX XXX", onDuty: true }
};

export const innerJobs = [
  {
    id: 1,
    title: "Shelf Packer Needed",
    employer: "Naivas Supermarket - Githurai",
    type: "Full-time",
    pay: "Ksh 800/day",
    location: "Githurai 44",
    posted: "3 mins ago",
    verified: "Gold",
    description: "Looking for reliable shelf packers for morning shift"
  },
  {
    id: 2,
    title: "Mechanic Apprentice",
    employer: "Garage - Baba Dogo",
    type: "Apprenticeship",
    pay: "Ksh 500/day + Training",
    location: "Baba Dogo Phase 2",
    posted: "1 hour ago",
    verified: "Blue",
    description: "Learn car repair while earning. No experience needed."
  },
  {
    id: 3,
    title: "House Cleaner",
    employer: "Private Home - Kasarani",
    type: "Part-time",
    pay: "Ksh 1,500/week",
    location: "Kasarani Mwiki",
    posted: "2 hours ago",
    verified: "Green",
    description: "Clean 3-bedroom house twice a week"
  },
  {
    id: 4,
    title: "Security Guard",
    employer: "Garden Estate - Roysambu",
    type: "Full-time",
    pay: "Ksh 12,000/month",
    location: "Roysambu",
    posted: "5 hours ago",
    verified: "Gold",
    description: "Night shift security guard needed. Must have good conduct cert."
  }
];

export const mapLocations = [
  { id: 1, lat: -1.2245, lng: 36.8972, estate: "Githurai", listings: 24, status: "busy" },
  { id: 2, lat: -1.2534, lng: 36.8856, estate: "Baba Dogo", listings: 18, status: "open" },
  { id: 3, lat: -1.2156, lng: 36.9234, estate: "Kasarani", listings: 31, status: "busy" },
  { id: 4, lat: -1.2678, lng: 36.8923, estate: "Kayole", listings: 22, status: "open" },
  { id: 5, lat: -1.2089, lng: 36.9012, estate: "Roysambu", listings: 27, status: "open" },
  { id: 6, lat: -1.2756, lng: 36.8734, estate: "Pipeline", listings: 15, status: "few" },
  { id: 7, lat: -1.2612, lng: 36.8701, estate: "Huruma", listings: 11, status: "open" },
  { id: 8, lat: -1.2598, lng: 36.8584, estate: "Mathare", listings: 9, status: "few" }
];

export const listingExtras = {
  1: {
    plotName: "Kimani Plot",
    deposit: 5500,
    paymentMethod: "M-Pesa",
    landlord: "James Kimani",
    landlordOnPlot: true,
    agency: null,
    caretakerPhone: "0712 XXX XXX",
    matatuDistance: "120m to Githurai stage",
    hospitalDistance: "1.1km to Githurai Health Centre",
    schoolDistance: "400m to local primary",
    wifi: "Safaricom HomeFibre available on plot",
    waterDetail: "Constant. Roof tank. No shut-off this week.",
    electricityDetail: "Token, individual meter, about KSh 350/week",
    viewingNow: 3,
    promoted: true,
    verified: true,
    expiresInDays: 28,
    noise: "Moderate",
    safetyRating: 4.2,
    rules: {
      gate: "Closes 10PM. Night access via the guard.",
      visitors: "Sign in at the gate. Overnight guests need caretaker notice.",
      quietHours: "10PM – 6AM",
      cleanliness: "Shared corridor swept daily. Toilet rota by floor."
    }
  },
  2: {
    plotName: "Baba Dogo Phase 3",
    deposit: 3500,
    paymentMethod: "M-Pesa",
    landlord: "Peter Otieno",
    landlordOnPlot: false,
    agency: null,
    caretakerPhone: "0713 XXX XXX",
    matatuDistance: "80m to Baba Dogo stage",
    hospitalDistance: "2km to Baba Dogo Health Centre",
    schoolDistance: "600m to nursery",
    wifi: "Airtel 4G. No fibre on this block yet.",
    waterDetail: "Rationed. Tank days: Tue / Fri 6AM.",
    electricityDetail: "Shared token meter. Caretaker splits weekly.",
    viewingNow: 5,
    promoted: false,
    verified: true,
    expiresInDays: 22,
    noise: "Lively",
    safetyRating: 3.4,
    rules: {
      gate: "Closes 9:30PM. Knock for night access.",
      visitors: "No overnight visitors without caretaker OK.",
      quietHours: "11PM – 5AM",
      cleanliness: "Shared bathroom. Keep buckets outside the tap area."
    }
  },
  3: {
    plotName: "Road C Court",
    deposit: 9500,
    paymentMethod: "M-Pesa",
    landlord: "Grace Wanjiku",
    landlordOnPlot: true,
    agency: null,
    caretakerPhone: "0722 XXX XXX",
    matatuDistance: "250m to Mwiki stage",
    hospitalDistance: "1.8km to Kasarani Hospital",
    schoolDistance: "300m to St. Mary's",
    wifi: "Safaricom + Telkom fibre",
    waterDetail: "Constant. Borehole backup.",
    electricityDetail: "Prepaid individual meter. Generator on compound.",
    viewingNow: 2,
    promoted: false,
    verified: true,
    expiresInDays: 30,
    noise: "Quiet",
    safetyRating: 4.7,
    rules: {
      gate: "Closes 10PM. CCTV at entrance.",
      visitors: "Register at the booth. Max 2 overnight guests.",
      quietHours: "10PM – 6AM",
      cleanliness: "No drying clothes on the balcony rail."
    }
  },
  4: {
    plotName: "Komarock Stage 2",
    deposit: 6000,
    paymentMethod: "M-Pesa",
    landlord: "Samuel Mwangi",
    landlordOnPlot: false,
    agency: "Kayole Homes Agency",
    caretakerPhone: "0701 XXX XXX",
    matatuDistance: "50m to Stage 2",
    hospitalDistance: "1.4km to Kayole Hospital",
    schoolDistance: "200m to nursery",
    wifi: "Safaricom 4G strong",
    waterDetail: "Constant. Water heater in room.",
    electricityDetail: "Token, individual meter",
    viewingNow: 4,
    promoted: true,
    verified: true,
    expiresInDays: 18,
    noise: "Moderate",
    safetyRating: 4.0,
    rules: {
      gate: "Closes 10PM. Newly repaired auto-lock.",
      visitors: "Day visitors free. Overnight: tell caretaker.",
      quietHours: "10PM – 6AM",
      cleanliness: "No dumping at the staircase."
    }
  },
  5: {
    plotName: "Garden Estate",
    deposit: 15000,
    paymentMethod: "M-Pesa or bank",
    landlord: "Mary Njeri",
    landlordOnPlot: true,
    agency: null,
    caretakerPhone: "0718 XXX XXX",
    matatuDistance: "400m to Roysambu stage",
    hospitalDistance: "2.2km to Coptic",
    schoolDistance: "Inside estate play area / 500m to primary",
    wifi: "Fibre in every block",
    waterDetail: "Constant. Compound tank + Nairobi Water.",
    electricityDetail: "Postpaid, individual. Generator backup.",
    viewingNow: 1,
    promoted: false,
    verified: true,
    expiresInDays: 25,
    noise: "Quiet",
    safetyRating: 4.8,
    rules: {
      gate: "24hr guard. Vehicle logbook.",
      visitors: "ID at the gate. Overnight guests allowed.",
      quietHours: "10PM – 6AM",
      cleanliness: "No hanging laundry on the front fence."
    }
  },
  6: {
    plotName: "Pipeline East Market Plot",
    deposit: 3000,
    paymentMethod: "M-Pesa",
    landlord: "David Mutua",
    landlordOnPlot: false,
    agency: null,
    caretakerPhone: "0790 XXX XXX",
    matatuDistance: "Next to Pipeline stage",
    hospitalDistance: "1.6km to Embakasi clinic",
    schoolDistance: "350m to primary",
    wifi: "Airtel 4G. Safaricom drops indoors.",
    waterDetail: "Rationed. Bowser days announced on the board.",
    electricityDetail: "Token, shared on floor 3",
    viewingNow: 6,
    promoted: false,
    verified: true,
    expiresInDays: 12,
    noise: "Lively",
    safetyRating: 3.2,
    rules: {
      gate: "Closes 9PM. Call caretaker after.",
      visitors: "No overnight visitors.",
      quietHours: "11PM – 5AM",
      cleanliness: "Market waste stays downstairs, not on the stairs."
    }
  }
};

export function getListing(id) {
  const listing = housingListings.find((item) => String(item.id) === String(id));
  if (!listing) return null;
  return { ...listing, ...(listingExtras[listing.id] || {}) };
}

export const liveFeed = [
  { id: "f1", kind: "new", time: "4 min ago", estate: "Pipeline", text: "New single room posted in Pipeline East — KSh 3,000. Posted just now.", listingId: 6, people: 6 },
  { id: "f2", kind: "promoted", time: "12 min ago", estate: "Githurai", text: "Promoted: bedsitter on Kimani Plot, Githurai 44. Landlord lives on the plot.", listingId: 1, people: 3 },
  { id: "f3", kind: "activity", time: "18 min ago", estate: "Baba Dogo", text: "5 people are viewing a KSh 3,500 single room in Baba Dogo Phase 3 right now.", listingId: 2, people: 5 },
  { id: "f4", kind: "alert", time: "32 min ago", estate: "Githurai", text: "Building Pulse: water is constant again at Sunrise Block B after the tank refill." },
  { id: "f5", kind: "new", time: "48 min ago", estate: "Kayole", text: "Newly renovated bedsitter near Komarock Stage 2 — KSh 6,000.", listingId: 4, people: 4 },
  { id: "f6", kind: "trending", time: "1 hr ago", estate: "Kasarani", text: "Trending in Kasarani Mwiki: one-bedroom with generator and CCTV. 124 views.", listingId: 3, people: 2 },
  { id: "f7", kind: "job", time: "1 hr ago", estate: "Githurai", text: "Inner Job: Naivas Githurai needs a shelf packer — KSh 800/day, Gold verified." },
  { id: "f8", kind: "service", time: "2 hr ago", estate: "Huruma", text: "Door breaker (emergency locksmith) now listed for Huruma / Mathare night calls." }
];

export const serviceModules = [
  { id: "houses", to: "/listings", label: "Houses", blurb: "Vacant rooms, GPS, caretaker contact. No agent fee." },
  { id: "movers", to: "/services?module=movers", label: "Movers", blurb: "Pickup, mkokoteni, lorry, bodaboda. Pay on M-Pesa." },
  { id: "vibarua", to: "/services?module=vibarua", label: "Vibarua", blurb: "Fundis, cleaners, painters — book by the hour or day." },
  { id: "security", to: "/services?module=security", label: "Security", blurb: "Nyumba Kumi, watchmen, report suspicious activity." },
  { id: "network", to: "/services?module=network", label: "Network", blurb: "Safaricom, Airtel, Telkom signal before you move." },
  { id: "water", to: "/services?module=water", label: "Water", blurb: "Jerrican prices, bowsers, outage reports per estate." },
  { id: "venues", to: "/services?module=venues", label: "Venues", blurb: "Church halls and meeting rooms by the hour." },
  { id: "locksmith", to: "/services?module=locksmith", label: "Door breaker", blurb: "Emergency locksmith when you are locked out at 2AM." }
];

export const serviceDirectory = [
  { id: 1, module: "movers", title: "Kamau Pickup Moves", estate: "Githurai", rate: "KSh 2,500 / trip", rating: 4.6, detail: "Pickup truck. Fits a bedsitter. Caretaker-recommended.", available: "Today" },
  { id: 2, module: "movers", title: "Baba Dogo Mkokoteni Crew", estate: "Baba Dogo", rate: "KSh 400 / load", rating: 4.4, detail: "Handcart for single-room moves inside the estate.", available: "Now" },
  { id: 3, module: "movers", title: "Roysambu Lorry Hire", estate: "Roysambu", rate: "KSh 6,000 / trip", rating: 4.8, detail: "Lorry for two-bedroom and family moves.", available: "Tomorrow" },
  { id: 4, module: "vibarua", title: "Amina — Mama Fua", estate: "Githurai", rate: "KSh 500 / 4hrs", rating: 4.9, detail: "Washing and cleaning. Verified tenant in Block B.", available: "Today" },
  { id: 5, module: "vibarua", title: "Otieno — Plumber", estate: "Kasarani", rate: "KSh 1,500 / job", rating: 4.7, detail: "Burst pipes, taps, toilets. Paid after you confirm work.", available: "Now" },
  { id: 6, module: "vibarua", title: "Brian — Electrician", estate: "Kayole", rate: "KSh 1,200 / call", rating: 4.5, detail: "Sockets, lighting, token meter issues.", available: "Today" },
  { id: 7, module: "vibarua", title: "Musa — Carpenter", estate: "Pipeline", rate: "KSh 800 / half-day", rating: 4.3, detail: "Beds, shelves, door frames.", available: "This week" },
  { id: 8, module: "security", title: "Nyumba Kumi — Sunrise Block B", estate: "Githurai", rate: "Community", rating: 4.6, detail: "Chair: Mama Akinyi. Night patrol rota on the board.", available: "Always" },
  { id: 9, module: "security", title: "Garden Watchmen", estate: "Roysambu", rate: "KSh 12,000 / mo", rating: 4.8, detail: "Day and night guards. Vehicle logbook at the gate.", available: "Hiring" },
  { id: 10, module: "security", title: "Vijana Patrol — Baba Dogo", estate: "Baba Dogo", rate: "Community", rating: 4.1, detail: "Youth patrol 8PM–11PM. Report button in-app.", available: "Nights" },
  { id: 11, module: "network", title: "Githurai 44 signal", estate: "Githurai", rate: "Crowdsourced", rating: 4.4, detail: "Safaricom 4/5. Airtel 3/5. Telkom 2/5. Fibre on Kimani Plot.", available: "Live" },
  { id: 12, module: "network", title: "Pipeline East signal", estate: "Pipeline", rate: "Crowdsourced", rating: 2.8, detail: "Safaricom drops indoors. Airtel better. No fibre.", available: "Live" },
  { id: 13, module: "network", title: "Roysambu Garden fibre", estate: "Roysambu", rate: "Crowdsourced", rating: 4.9, detail: "Safaricom HomeFibre in every block. Agent at the shops.", available: "Live" },
  { id: 14, module: "water", title: "Mama Njoki — 20L jerrican", estate: "Baba Dogo", rate: "KSh 20 / 20L", rating: 4.7, detail: "Next to Phase 3 kiosk. Bowser contact for bulk.", available: "Today" },
  { id: 15, module: "water", title: "Pipeline Bowser", estate: "Pipeline", rate: "KSh 2,500 / tank", rating: 4.2, detail: "Fills plot tanks. Call before 7AM on ration days.", available: "Tue / Fri" },
  { id: 16, module: "water", title: "Kasarani Borehole Point", estate: "Kasarani", rate: "KSh 10 / 20L", rating: 4.5, detail: "Backup when Nairobi Water is off.", available: "Daily" },
  { id: 17, module: "venues", title: "St. Mary's Hall", estate: "Kasarani", rate: "KSh 800 / hour", rating: 4.6, detail: "Church hall. Chairs included. Pay on M-Pesa.", available: "Weekdays" },
  { id: 18, module: "venues", title: "Roysambu Community Ground", estate: "Roysambu", rate: "KSh 1,200 / hour", rating: 4.3, detail: "Open ground for meetings and small events.", available: "Weekends" },
  { id: 19, module: "venues", title: "Githurai Cyber Meeting Table", estate: "Githurai", rate: "KSh 150 / hour", rating: 4.1, detail: "Quiet table + wifi. Cheaper than a CBD coffee shop.", available: "Now" },
  { id: 20, module: "locksmith", title: "Juma — Door breaker", estate: "Huruma", rate: "KSh 1,500 night call", rating: 4.8, detail: "Emergency locksmith. Covers Huruma, Mathare, Baba Dogo after 10PM.", available: "24hr" },
  { id: 21, module: "locksmith", title: "Kevin Locks", estate: "Kasarani", rate: "KSh 800 day / KSh 1,800 night", rating: 4.6, detail: "Keys, padlocks, gate motors. ID check before opening.", available: "24hr" }
];

export const communityNotices = [
  { id: 1, estate: "Githurai 44", type: "Water", title: "Tank refilled — water is constant", body: "Sunrise Block B tank is full. Next collection Monday 6AM.", time: "Today 6:30 AM" },
  { id: 2, estate: "Baba Dogo", type: "Security", title: "Gate light out on Block C", body: "Nyumba Kumi asking tenants to report if they see anyone hanging at the dark corner.", time: "Yesterday" },
  { id: 3, estate: "Pipeline", type: "Utility", title: "Water rationing Tue & Fri", body: "Bowser will pass at 7AM. Keep jerricans ready downstairs.", time: "2 days ago" },
  { id: 4, estate: "Kayole", type: "Lost", title: "Lost keys — Stage 2", body: "Bunch with a blue Naivas tag. Hand to caretaker Peter.", time: "Today" },
  { id: 5, estate: "Roysambu", type: "Sale", title: "Neighbour selling a cooker", body: "2-burner + cylinder. Pickup in Garden Estate. See Marketplace.", time: "Today" }
];

export const stats = {
  totalListings: 1247,
  activeUsers: 3842,
  estatesCovered: 12,
  jobsPosted: 156
};
