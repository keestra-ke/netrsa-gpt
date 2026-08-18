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
  { id: 1, lat: -1.2245, lng: 36.8972, estate: "Githurai", listings: 24 },
  { id: 2, lat: -1.2534, lng: 36.8856, estate: "Baba Dogo", listings: 18 },
  { id: 3, lat: -1.2156, lng: 36.9234, estate: "Kasarani", listings: 31 },
  { id: 4, lat: -1.2678, lng: 36.8923, estate: "Kayole", listings: 22 },
  { id: 5, lat: -1.2089, lng: 36.9012, estate: "Roysambu", listings: 27 },
  { id: 6, lat: -1.2756, lng: 36.8734, estate: "Pipeline", listings: 15 }
];

export const stats = {
  totalListings: 1247,
  activeUsers: 3842,
  estatesCovered: 12,
  jobsPosted: 156
};
