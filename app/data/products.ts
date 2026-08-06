export interface Product {
  id: string;
  title: string;
  category: 'Seating' | 'Tables' | 'Lighting' | 'Storage' | 'Bespoke';
  price: number;
  rating: number;
  reviewsCount: number;
  subtitle: string;
  description: string;
  material: string;
  dimensions: string;
  image: string;
  gallery: string[];
  swatches: { name: string; color: string }[];
  isFeatured?: boolean;
  isNew?: boolean;
  specifications: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "elowen-lounge-chair",
    title: "The Elowen Lounge Chair",
    category: "Seating",
    price: 185000,
    rating: 4.9,
    reviewsCount: 42,
    subtitle: "Premium luxury comfort designed for elegant living rooms.",
    description: "The Elowen Lounge Chair combines modern minimalism with deep comfort. Upholstered in soft textured wool with a solid hand-finished walnut frame. Perfectly crafted for homes in Peshawar, Islamabad, and nationwide.",
    material: "Textured Charcoal Wool & Solid Walnut Wood",
    dimensions: "Width: 34\" x Depth: 36\" x Height: 32\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-d2jD-f8xDVgiDLnsq1OngP4GZo87lnUWzq8389VGDCqnNLG0JpDygg37LuaXW2Q930yyjKF211x6DA5R7md_Qlsh1N6LtswGiU9ckrZsosEAA-7XC6STC-pd2TT1Q8eeU-sNWXP4OMfbTZVgNbMxaMPAeNyYRTzNq_0cJLBeHfk6zLa472jySyjxzyU_NfQtKEoRCBuro2_zOmGxdnHTK66j8koXulqDUsNNs-4Ubn7pdYAolPI8_A",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-d2jD-f8xDVgiDLnsq1OngP4GZo87lnUWzq8389VGDCqnNLG0JpDygg37LuaXW2Q930yyjKF211x6DA5R7md_Qlsh1N6LtswGiU9ckrZsosEAA-7XC6STC-pd2TT1Q8eeU-sNWXP4OMfbTZVgNbMxaMPAeNyYRTzNq_0cJLBeHfk6zLa472jySyjxzyU_NfQtKEoRCBuro2_zOmGxdnHTK66j8koXulqDUsNNs-4Ubn7pdYAolPI8_A",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5EUMZv2AYedSSdHBRsi_ELpP4jbDDawdCAuoRi-PUMfeg439GHFA-8dYI8AscsnGMRdc8CS4BvQbuw3YOCNGkep3TOGgMwtMsyq1oCSCUh3_cz8WORATVmOZa-lrcDGCX-dSvL_P_d2HLY_37DPyWSl1ovDUC03U7L8XFq30CJYKwgOqZfj3GTRvCl6wfRETjJOa-S6yQOptf72zUTtN3F99n-YuyX7tlhstiz5a9cz29sKNJOfsd7Q",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ4EloUXrRdl9MyPNoYKwmHAae0YM17Xse5pEM4lNOIgu7Q7Zli8Vxni6f5aQ9HUgLq6o_D2yrMzBZireDuYl1UiMhw85J_rEVeDxCxPT66YQWZfbpW6M8sg2GH7hdU_LgwaTwegOkFCggKR4XDIunRJcmZE6pXl2Cr8je3IWvt4hZoJHa94moRv4LFU6KeRtzSm4w7ZZivdsQ-vvHqGpTjMqOk_gz0s9RATDf7MHZOfaeWIE10ADF7g"
    ],
    swatches: [
      { name: "Charcoal Wool", color: "#3A3C3E" },
      { name: "Cream Bouclé", color: "#E8E2D9" },
      { name: "Tan Leather", color: "#8C4A26" }
    ],
    isFeatured: true,
    isNew: true,
    specifications: [
      "Solid Seasoned Walnut Wood Frame",
      "High-density cushion foam with soft fiber layer",
      "Hand-polished protective natural oil finish",
      "Sturdy traditional joinery structure"
    ]
  },
  {
    id: "oakhaven-lounge",
    title: "The Oakhaven Lounge",
    category: "Seating",
    price: 165000,
    rating: 4.8,
    reviewsCount: 31,
    subtitle: "Modern curved armchair in soft cream bouclé fabric.",
    description: "Relax in pure comfort with the Oakhaven Lounge Chair. Features rich textured bouclé upholstery paired with a sleek dark solid ash wood frame.",
    material: "Textured Cream Bouclé & Matte Black Ash",
    dimensions: "Width: 36\" x Depth: 38\" x Height: 30\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPFjWYjdhkerwZ_kgDvVNIegPTSHyx5g3aRFRaLIXtTLqVjQXGkloohVo7YpNzPDv-nwrbUukmx7v7dl1-3N8z_3fnuGi81bXxQr71zg3ptKMsVnVLtEgXAiwguPQMKZI13l-SA9vSukQDlGarZx2QGCd0HCp-9zLqWVTuML954tXoazxIRAn3sNX1ci4hgVzI0Gtfd3a23LfVtnmbpj9ls3ZXN-nncL190-txcLuYpz5hsUY5WMdImA",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPFjWYjdhkerwZ_kgDvVNIegPTSHyx5g3aRFRaLIXtTLqVjQXGkloohVo7YpNzPDv-nwrbUukmx7v7dl1-3N8z_3fnuGi81bXxQr71zg3ptKMsVnVLtEgXAiwguPQMKZI13l-SA9vSukQDlGarZx2QGCd0HCp-9zLqWVTuML954tXoazxIRAn3sNX1ci4hgVzI0Gtfd3a23LfVtnmbpj9ls3ZXN-nncL190-txcLuYpz5hsUY5WMdImA"
    ],
    swatches: [
      { name: "Cream Bouclé", color: "#F7F5F2" },
      { name: "Slate Grey", color: "#4A4D52" }
    ],
    isFeatured: true,
    specifications: [
      "Premium stain-resistant bouclé fabric",
      "Solid ash wood base",
      "Ergonomic back support angle",
      "10-Year frame warranty"
    ]
  },
  {
    id: "sylvia-dining-chair",
    title: "Sylvia Dining Chair",
    category: "Seating",
    price: 48000,
    rating: 4.9,
    reviewsCount: 19,
    subtitle: "Classic oak dining chair with woven natural cord seat.",
    description: "Designed for dining rooms and family gatherings. Crafted from solid natural oak with a durable hand-woven cord seat.",
    material: "Solid Honey Oak & Natural Cord",
    dimensions: "Width: 21\" x Depth: 22\" x Height: 31.5\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBopdyY9Y7ABwBbd5HGhBHJ6ov57c3AYRiYcLy5zpKYLmAwjPuUTri91L7nMEFg2IbxFRd1IaxoeDfuALqgk1OEr6Uncwgd9YmQpo6FjsqbNlxmr041JHoKAm_akaq3FqARr1uQDMLbdPHawvCvb5qt2igFofLtcgy6_rQp4ZmhmvWcfY7sVwsPFWFLKR824NrDoRFKd75VXeYO1L6hM2Qvi5Ofsd7VzWZovYbivCd4Dxm5YFQYXkOyaw",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBopdyY9Y7ABwBbd5HGhBHJ6ov57c3AYRiYcLy5zpKYLmAwjPuUTri91L7nMEFg2IbxFRd1IaxoeDfuALqgk1OEr6Uncwgd9YmQpo6FjsqbNlxmr041JHoKAm_akaq3FqARr1uQDMLbdPHawvCvb5qt2igFofLtcgy6_rQp4ZmhmvWcfY7sVwsPFWFLKR824NrDoRFKd75VXeYO1L6hM2Qvi5Ofsd7VzWZovYbivCd4Dxm5YFQYXkOyaw"
    ],
    swatches: [
      { name: "Natural Oak", color: "#D2B48C" },
      { name: "Smoked Black", color: "#2C2C2C" }
    ],
    isFeatured: true,
    specifications: [
      "Curved solid oak backrest",
      "Hand-woven durable seat cord",
      "Lightweight yet very strong",
      "Easy maintenance finish"
    ]
  },
  {
    id: "meridian-sectional",
    title: "The Meridian Sectional Sofa",
    category: "Seating",
    price: 345000,
    rating: 5.0,
    reviewsCount: 58,
    subtitle: "Spacious luxury sectional sofa for modern living rooms.",
    description: "An extra-large modular sofa system in muted stone-gray fabric. Deep plush seating designed for luxury family lounges and spacious drawing rooms.",
    material: "Stone Linen-Blend & Steel Accent Legs",
    dimensions: "Width: 142\" x Depth: 70\" (Chaise) x Height: 28\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJMere7hXEONHkYEYeiqWaEwEL7k3n2nzBvqGqFmvieFJ2YdWNQw6waWgemmHL_QPU8xliDKZeTZl9QLyxQ4qvRuPstqcguVevk5QARxO8XxxVdOt0UO7G8CB_vlQmA1inLPu7tluBDszBODcD7WNP5vdTAKKJAzr3ug2v6AUSS5umR3ky_IXIVz0hwPPpjPLzyhMpkphl6Ipq6VOKtV6grl7sH7psv7J8a4OR9wU4sXPTTtdj5_kV6A",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJMere7hXEONHkYEYeiqWaEwEL7k3n2nzBvqGqFmvieFJ2YdWNQw6waWgemmHL_QPU8xliDKZeTZl9QLyxQ4qvRuPstqcguVevk5QARxO8XxxVdOt0UO7G8CB_vlQmA1inLPu7tluBDszBODcD7WNP5vdTAKKJAzr3ug2v6AUSS5umR3ky_IXIVz0hwPPpjPLzyhMpkphl6Ipq6VOKtV6grl7sH7psv7J8a4OR9wU4sXPTTtdj5_kV6A"
    ],
    swatches: [
      { name: "Stone Grey", color: "#C0BBB4" },
      { name: "Charcoal Black", color: "#2B2D2F" }
    ],
    isFeatured: true,
    isNew: true,
    specifications: [
      "Flexible modular sections",
      "Soft feather & high-density foam cushions",
      "Removable washable fabric covers",
      "Includes free White-Glove room setup"
    ]
  },
  {
    id: "cygnus-side-table",
    title: "Cygnus Side Table",
    category: "Tables",
    price: 65000,
    rating: 4.7,
    reviewsCount: 14,
    subtitle: "Solid black marble base with polished brass top.",
    description: "A compact luxury side table made from natural black marble and brushed brass. Adds instant elegance next to any sofa or lounge chair.",
    material: "Black Marble Base & Solid Brass Top",
    dimensions: "Diameter: 18\" x Height: 22\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-IrT28QBhwS6eN1aeb9nelZPLakx9buE3vY-vLjbJrWIRAoBVtu9QzKmciqMuSyWRo8JqnNglb9iqwRqIBT4u5uJp0v8jA6z8nu598V7TQDQpuyJJvxiIvBwZwOt1K2H4Dda5HtWNvnjcRP7Ey8ms7HibUI_fbXJP5UycdgQDSL59YCA4qYarV0RirYNJf79WkvHhbANQjreFR3hZypNb4cWiJb5fA8i2juuuS8q4bdpVuRYnICIeuw",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-IrT28QBhwS6eN1aeb9nelZPLakx9buE3vY-vLjbJrWIRAoBVtu9QzKmciqMuSyWRo8JqnNglb9iqwRqIBT4u5uJp0v8jA6z8nu598V7TQDQpuyJJvxiIvBwZwOt1K2H4Dda5HtWNvnjcRP7Ey8ms7HibUI_fbXJP5UycdgQDSL59YCA4qYarV0RirYNJf79WkvHhbANQjreFR3hZypNb4cWiJb5fA8i2juuuS8q4bdpVuRYnICIeuw"
    ],
    swatches: [
      { name: "Black Marble", color: "#1A1A1A" },
      { name: "White Marble", color: "#EBEBEB" }
    ],
    isFeatured: true,
    specifications: [
      "Real natural stone marble cylinder",
      "Scratch-resistant brass top plate",
      "Weighted sturdy base",
      "Unique stone pattern on every piece"
    ]
  },
  {
    id: "solaris-monolith-coffee-table",
    title: "Solaris Coffee Table",
    category: "Tables",
    price: 220000,
    rating: 4.9,
    reviewsCount: 27,
    subtitle: "Low-profile central coffee table in dark natural stone.",
    description: "Carved from dark honed travertine stone. Designed as a grounding centerpiece for contemporary living rooms and drawing rooms.",
    material: "Dark Honed Travertine Stone",
    dimensions: "Length: 60\" x Width: 36\" x Height: 14\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA90JXu6lcSQvu7rnMqEiiGWHSpdRT7DySlc5JbfnifqfqS_XyOxPtmZTOyMhnbEvwLotYmGNBGxdTFYHAgZ0o5zSxizPWkaoxCIdtLUMWPdq7iCXSQQuHX4rgVOPVDDlGF1v-LkdeP8qrXia8kdvSvhhSjugIJsIIp--EQZHtwpEcaP1iGzdWaM4nPq4vc_iCjCk9vfH-CpQljZhb6r4uMjRrLoTMs0tt6igLj56S0DJK6h46Yp88xdg",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA90JXu6lcSQvu7rnMqEiiGWHSpdRT7DySlc5JbfnifqfqS_XyOxPtmZTOyMhnbEvwLotYmGNBGxdTFYHAgZ0o5zSxizPWkaoxCIdtLUMWPdq7iCXSQQuHX4rgVOPVDDlGF1v-LkdeP8qrXia8kdvSvhhSjugIJsIIp--EQZHtwpEcaP1iGzdWaM4nPq4vc_iCjCk9vfH-CpQljZhb6r4uMjRrLoTMs0tt6igLj56S0DJK6h46Yp88xdg"
    ],
    swatches: [
      { name: "Dark Travertine", color: "#3B3835" },
      { name: "Ivory Limestone", color: "#E5DEC9" }
    ],
    isFeatured: false,
    specifications: [
      "Solid stone construction",
      "Stain protective clear seal",
      "Smooth rounded safety edges",
      "Free home delivery included"
    ]
  },
  {
    id: "aethel-credenza-storage",
    title: "Aethel Fluted Storage Cabinet",
    category: "Storage",
    price: 245000,
    rating: 4.9,
    reviewsCount: 16,
    subtitle: "Fluted solid wood doors with push-to-open storage.",
    description: "Features vertical slatted doors carved from premium walnut wood. Offers ample organized storage space for living rooms and dining areas.",
    material: "Solid European Walnut & Steel Base",
    dimensions: "Width: 78\" x Depth: 20\" x Height: 30\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvFLyigpURTjEk2PeW2uY77T_YXo4e9wn-aWVbVL-XYUmU-bdq5v9aZis_ZstFUCKvkiHyR4zBFCiNR2DCDXC35hOzWRf419bFgCrq7xtmSZqPWJJ0GfscprPZ27bz7-iSXwfdhZXVcigmG167K4cYXliXn_2YVsvCdX3pU_d3JX_0w_cTcM7lD6yFHpT3pmxx4d7OQ-H9qPeMo0aefRtb7MHgpYOJwAuaKUMnbEwQ_nC6mFzufv3DJg",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvFLyigpURTjEk2PeW2uY77T_YXo4e9wn-aWVbVL-XYUmU-bdq5v9aZis_ZstFUCKvkiHyR4zBFCiNR2DCDXC35hOzWRf419bFgCrq7xtmSZqPWJJ0GfscprPZ27bz7-iSXwfdhZXVcigmG167K4cYXliXn_2YVsvCdX3pU_d3JX_0w_cTcM7lD6yFHpT3pmxx4d7OQ-H9qPeMo0aefRtb7MHgpYOJwAuaKUMnbEwQ_nC6mFzufv3DJg"
    ],
    swatches: [
      { name: "Natural Walnut", color: "#5C3A21" },
      { name: "Ebony Black", color: "#1F1C18" }
    ],
    isFeatured: false,
    specifications: [
      "Soft-close hidden hinges",
      "Rear wire management openings",
      "Adjustable interior shelves",
      "Long-lasting protective lacquer finish"
    ]
  },
  {
    id: "lumina-sculptural-pendant",
    title: "Lumina Alabaster Pendant Light",
    category: "Lighting",
    price: 95000,
    rating: 4.8,
    reviewsCount: 22,
    subtitle: "Warm natural stone pendant light for dining and lounge areas.",
    description: "Crafted from natural Spanish alabaster stone with brass fittings. Spreads a soft, warm ambient light over dining tables and lounges.",
    material: "Hand-Carved Alabaster & Brass Cords",
    dimensions: "Diameter: 24\" x Height: 8\"",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ4EloUXrRdl9MyPNoYKwmHAae0YM17Xse5pEM4lNOIgu7Q7Zli8Vxni6f5aQ9HUgLq6o_D2yrMzBZireDuYl1UiMhw85J_rEVeDxCxPT66YQWZfbpW6M8sg2GH7hdU_LgwaTwegOkFCggKR4XDIunRJcmZE6pXl2Cr8je3IWvt4hZoJHa94moRv4LFU6KeRtzSm4w7ZZivdsQ-vvHqGpTjMqOk_gz0s9RATDf7MHZOfaeWIE10ADF7g",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ4EloUXrRdl9MyPNoYKwmHAae0YM17Xse5pEM4lNOIgu7Q7Zli8Vxni6f5aQ9HUgLq6o_D2yrMzBZireDuYl1UiMhw85J_rEVeDxCxPT66YQWZfbpW6M8sg2GH7hdU_LgwaTwegOkFCggKR4XDIunRJcmZE6pXl2Cr8je3IWvt4hZoJHa94moRv4LFU6KeRtzSm4w7ZZivdsQ-vvHqGpTjMqOk_gz0s9RATDf7MHZOfaeWIE10ADF7g"
    ],
    swatches: [
      { name: "Pure Alabaster", color: "#F0ECE1" },
      { name: "Amber Stone", color: "#DBCBB4" }
    ],
    isFeatured: false,
    specifications: [
      "Warm LED bulb included (2700K Soft Glow)",
      "Adjustable brass hanging height",
      "Natural stone shade",
      "Easy ceiling installation"
    ]
  }
];
