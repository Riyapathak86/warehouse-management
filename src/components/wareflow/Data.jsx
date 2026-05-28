// const Data = [
//   {
//     id: 1,
//     name: "Bison Emulsion",
//     category: "Interior Paint",
//     price: 1200,
//     mrp: 1500,
//     stock: 50,
//     image: "/Images/BISON EMULSION.webp",
//     tagline: "Affordable smooth finish for everyday walls",
//     description:
//       "Bison Emulsion is a budget-friendly interior paint that provides a smooth matt finish. It offers good coverage and is ideal for basic home applications where cost and performance both matter.",
//     features: ["Matt Finish", "Good Coverage", "Budget Friendly"]
//   },
//   {
//     id: 2,
//     name: "Bison Lite",
//     category: "Interior Paint",
//     price: 1000,
//     mrp: 1300,
//     stock: 40,
//     image: "/Images/BISON LITE.webp",
//     tagline: "Lightweight solution for simple interiors",
//     description:
//       "Bison Lite is an economical interior paint designed for basic wall coatings. It ensures decent finish and is perfect for low-cost projects.",
//     features: ["Economical", "Smooth Finish", "Easy Application"]
//   },
//   {
//     id: 3,
//     name: "Butterfly Enamel Paint",
//     category: "Enamel",
//     price: 900,
//     mrp: 1100,
//     stock: 35,
//     image: "/Images/BUTTERFLY ENAMEL PAINT.webp",
//     tagline: "Durable glossy finish for wood & metal",
//     description:
//       "Butterfly Enamel Paint offers a glossy finish with excellent durability. Suitable for metal and wooden surfaces, it provides protection and long-lasting shine.",
//     features: ["High Gloss", "Durable", "Smooth Finish"]
//   },
//   {
//     id: 4,
//     name: "Dampstop Duo",
//     category: "Waterproofing",
//     price: 2200,
//     mrp: 2600,
//     stock: 20,
//     image: "/Images/DAMPSTIO DUO.webp",
//     tagline: "Advanced waterproof protection",
//     description:
//       "Dampstop Duo is a powerful waterproofing solution designed to protect walls and terraces from moisture and seepage.",
//     features: ["Waterproof", "Crack Resistant", "Long Lasting"]
//   },
//   {
//     id: 5,
//     name: "Dampstop Elasto",
//     category: "Waterproofing",
//     price: 2500,
//     mrp: 3000,
//     stock: 15,
//     image: "/Images/DAMPSTOP ELASTO.webp",
//     tagline: "Flexible waterproof coating",
//     description:
//       "Dampstop Elasto is an elastomeric waterproof coating that provides flexibility and excellent resistance against cracks and water leakage.",
//     features: ["Elastic Coating", "Crack Bridging", "Waterproof"]
//   },
//   {
//     id: 6,
//     name: "Easy Clean",
//     category: "Interior Paint",
//     price: 2800,
//     mrp: 3200,
//     stock: 30,
//     image: "/Images/EASY CLEAN.WEBP",
//     tagline: "Washable walls with premium finish",
//     description:
//       "Easy Clean is a premium interior paint that allows easy removal of stains and dirt, making it perfect for high-traffic areas.",
//     features: ["Washable", "Stain Resistant", "Premium Finish"]
//   },
//   {
//     id: 7,
//     name: "Long Life 10",
//     category: "Exterior Paint",
//     price: 3000,
//     mrp: 3500,
//     stock: 25,
//     image: "/Images/LONGLIFE-10.webp",
//     tagline: "Exterior protection up to 10 years",
//     description:
//       "Long Life 10 is a durable exterior paint that offers long-lasting protection against harsh weather conditions.",
//     features: ["Weather Resistant", "Long Lasting", "UV Protection"]
//   },
//   {
//     id: 8,
//     name: "Luxol Hi Gloss",
//     category: "Enamel",
//     price: 1100,
//     mrp: 1400,
//     stock: 40,
//     image: "/Images/LUXOL HI GLOSS.webp",
//     tagline: "High gloss premium enamel",
//     description:
//       "Luxol Hi Gloss provides a shiny, smooth finish ideal for wood and metal surfaces, ensuring durability and elegance.",
//     features: ["High Gloss", "Durable", "Smooth Finish"]
//   },
//   {
//     id: 9,
//     name: "Luxol Metallic",
//     category: "Enamel",
//     price: 1500,
//     mrp: 1800,
//     stock: 20,
//     image: "/Images/LUXOL METALIC.webp",
//     tagline: "Stylish metallic finish",
//     description:
//       "Luxol Metallic offers a premium metallic look that enhances the beauty of decorative surfaces.",
//     features: ["Metallic Finish", "Decorative", "Premium Look"]
//   },
//   {
//     id: 10,
//     name: "Luxol PU Enamel",
//     category: "Enamel",
//     price: 1700,
//     mrp: 2000,
//     stock: 18,
//     image: "/Images/LUXOL PU ENAMEL.webp",
//     tagline: "PU based durable coating",
//     description:
//       "Luxol PU Enamel provides superior durability and long-lasting shine with excellent resistance.",
//     features: ["PU Based", "High Durability", "Gloss Finish"]
//   },
//   {
//     id: 11,
//     name: "Silk Dazzle",
//     category: "Luxury Paint",
//     price: 4000,
//     mrp: 4500,
//     stock: 10,
//     image: "/Images/SILK DAZZLE.webp",
//     tagline: "Luxury high sheen finish",
//     description:
//       "Silk Dazzle offers a rich and premium finish with a high sheen effect, ideal for luxury interiors.",
//     features: ["High Sheen", "Luxury Finish", "Smooth Texture"]
//   },
//   {
//     id: 12,
//     name: "Silk Glamor",
//     category: "Luxury Paint",
//     price: 3800,
//     mrp: 4200,
//     stock: 12,
//     image: "/Images/SILK GLAMOR.webp",
//     tagline: "Smooth finish with long-lasting elegance",
//     description:
//       "Silk Glamor is a premium interior wall coating designed to provide a smooth, luxurious finish with excellent durability and stain resistance.",
//     features: ["Washable", "Smooth Finish", "Premium Quality"]
//   },
//   {
//     id: 13,
//     name: "Walmasta Lite",
//     category: "Exterior Paint",
//     price: 1800,
//     mrp: 2200,
//     stock: 28,
//     // image: "/Images/ALMASTA LITE.webp",
//     image:"/Images/WALMASTA LITE.webp",
//     tagline: "Basic exterior protection",
//     description:
//       "Walmasta Lite is an exterior paint that offers basic weather protection and decent finish for walls.",
//     features: ["Matt Finish", "Weather Protection", "Affordable"]
//   },
//   {
//     id: 14,
//     name: "Walmasta",
//     category: "Exterior Paint",
//     price: 2200,
//     mrp: 2600,
//     stock: 22,
//     image: "/Images/WALMASTA.webp",
//     tagline: "Durable exterior coating",
//     description:
//       "Walmasta provides better durability and coverage, making it a reliable choice for exterior walls.",
//     features: ["Durable", "Good Coverage", "Weather Resistant"]
//   },
//   {
//     id: 15,
//     name: "Weathercoat Anti Dust",
//     category: "Exterior Paint",
//     price: 3500,
//     mrp: 4000,
//     stock: 18,
//     image: "/Images/ANTI DUST.WEBP",
//     tagline: "Dust resistant exterior paint",
//     description:
//       "Weathercoat Anti Dust keeps walls clean by resisting dust and dirt, ensuring long-lasting beauty.",
//     features: ["Dust Resistant", "Long Lasting", "Premium Exterior"]
//   },
//   {
//     id: 16,
//     name: "Weathercoat Glow",
//     category: "Exterior Paint",
//     price: 3600,
//     mrp: 4200,
//     stock: 15,
//     image: "/Images/WEATHERCOAT GLOW.webp",
//     tagline: "Glossy exterior shine",
//     description:
//       "Weathercoat Glow offers a glossy finish with excellent protection against weather conditions.",
//     features: ["Gloss Finish", "Weather Protection", "Premium Look"]
//   }
// ];

// export default Data;