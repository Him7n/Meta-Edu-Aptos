const productItems = [
  {
    id: 1,
    name: "Sheen Chair",
    modelSrc: "./models/sheenchair.glb",
    category: "Furniture",
    color: "Orange",
    price: {
      ETH: 0.02,
      Rupees: 5000,
      WallmartCoins: 1500,
    },
    description: "A comfortable and stylish chair perfect for any modern living room.",
    stock: 15, // Available stock
    ratings: 4.5, // Average customer rating
    reviews: 120, // Number of reviews
    image: "./inventory/SheenChair.png", // Image path added
    annotations: [
      {
        title: "comfortable-back",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
      {
        title: "comfortable-seat",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ],
  },
  {
    id: 2,
    name: "Office Chair",
    modelSrc: "./models/OfficeChair.glb",
    category: "Furniture",
    color: "Black",
    price: {
      ETH: 0.025,
      Rupees: 6000,
      WallmartCoins: 1800,
    },
    description: "An ergonomic office chair with lumbar support for long working hours.",
    stock: 30, // Available stock
    ratings: 4.8, // Average customer rating
    reviews: 95, // Number of reviews
    image: "./inventory/OfficeChair.png", // Image path added
    annotations: [
      {
        title: "comfortable-back",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
      {
        title: "comfortable-seat",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ],
  },
  {
    id: 3,
    name: "Pot",
    modelSrc: "./models/pot.glb",
    category: "Environment",
    color: "Red",
    price: {
      ETH: 0.01,
      Rupees: 2500,
      WallmartCoins: 750,
    },
    description: "A decorative pot that adds a touch of nature to your space.",
    stock: 50, // Available stock
    ratings: 4.3, // Average customer rating
    reviews: 45, // Number of reviews
    image: "https://via.placeholder.com/150", // Placeholder image
    annotations: [
      {
        title: "pot-structure",
        slot: "hotspot-1",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ],
  },
  {
    id: 4,
    name: "Painting",
    modelSrc: "/models/Painting.glb",
    category: "Art",
    color: "Brown",
    price: {
      ETH: 0.035,
      Rupees: 9000,
      WallmartCoins: 2700,
    },
    description: "A beautiful hand-painted canvas artwork for your living space.",
    stock: 10, // Available stock
    ratings: 4.9, // Average customer rating
    reviews: 30, // Number of reviews
    image: "https://via.placeholder.com/150", // Placeholder image
    annotations: [
      {
        title: "wooden-frame",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
      {
        title: "pure-canvas",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ],
  },
  {
    id: 5,
    name: "Car",
    modelSrc: "./models/car.glb",
    category: "Vehicle",
    color: "Blue",
    price: {
      ETH: 0.5,
      Rupees: 120000,
      WallmartCoins: 36000,
    },
    description: "A sleek, modern car with a stunning design and powerful performance.",
    stock: 5, // Available stock
    ratings: 4.7, // Average customer rating
    reviews: 12, // Number of reviews
    image: "https://via.placeholder.com/150", // Placeholder image
    annotations: [
      {
        title: "plastic-structure",
        slot: "hotspot-1",
        position: "-0.0036662781627494825m 0.11165170707633758m 0.07931578568217246m",
        normal: "-0.007882343763611447m 0.9530143214961644m 0.30282267365571863m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
      {
        title: "glossy-color",
        slot: "hotspot-2",
        position: "-0.09202904871903242m 0.05133736629679797m 0.0013477452825590153m",
        normal: "-0.9976942525197127m 0.061837681663106964m 0.027969261979253417m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ],
  },
  {
    id: 6,
    name: "Sport Car",
    modelSrc: "./models/Car1.glb",
    category: "Vehicle",
    color: "Red",
    price: {
      ETH: 0.7,
      Rupees: 180000,
      WallmartCoins: 54000,
    },
    description: "A high-performance sports car with exceptional handling and speed.",
    stock: 3, // Available stock
    ratings: 4.9, // Average customer rating
    reviews: 8, // Number of reviews
    image: "https://via.placeholder.com/150", // Placeholder image
    annotations: [
      {
        title: "plastic-structure",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
      {
        title: "glossy-color",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ],
  },
];

export default productItems;
