export const products = [
  {
    id: 1,
    name: "Exclusive Signed Basketball",
    priceCents: 7299,
    image: "images/basketball.png",
    reviews: { rating: 45, count: 231 },
  },
  {
    id: 2,
    name: "Jujutsu Kaisen Glassed Art",
    priceCents: 2499,
    image: "images/animeglass.png",
    reviews: { rating: 40, count: 45 },
  },
  {
    id: 3,
    name: "Hair Dryer",
    priceCents: 4999,
    image: "images/hairdryer.png",
    reviews: { rating: 40, count: 527 },
  },
  {
    id: 4,
    name: "Lamp",
    priceCents: 3999,
    image: "images/lamp.png",
    reviews: { rating: 35, count: 152 },
  },
  {
    id: 5,
    name: "Men's Perfume",
    priceCents: 11999,
    image: "images/perfume.png",
    reviews: { rating: 50, count: 1232 },
  },
  {
    id: 6,
    name: "Samsung Galaxy S24",
    priceCents: 59999,
    image: "images/smartphone.png",
    reviews: { rating: 50, count: 2312 },
  },
  {
    id: 7,
    name: "Wet Toilet Paper",
    priceCents: 399,
    image: "images/wettoiletpaper.png",
    reviews: { rating: 45, count: 7343 },
  },
  {
    id: 8,
    name: "First Aid Kit for Home and Travel",
    priceCents: 2949,
    image: "images/aidkit.png",
    reviews: { rating: 40, count: 2523 },
  },
  {
    id: 9,
    name: "Multi-Tool Keychain with LED Light",
    priceCents: 1499,
    image: "images/multitool.png",
    reviews: { rating: 40, count: 322 },
  },
  {
    id: 10,
    name: "Virtual Reality Headset for Gaming",
    priceCents: 49999,
    image: "images/vrhead.png",
    reviews: { rating: 45, count: 827 },
  },
  {
    id: 11,
    name: "LED Light-Up Frisbee",
    priceCents: 1499,
    image: "images/frisbee.png",
    reviews: { rating: 40, count: 421 },
  },
  {
    id: 12,
    name: "Personalized Engraved Wooden Watch",
    priceCents: 4499,
    image: "images/woodenwatch.png",
    reviews: { rating: 40, count: 125 },
  },
  {
    id: 13,
    name: "lood Pressure Monitor with Digital Display",
    priceCents: 4999,
    image: "images/bloodmonitor.png",
    reviews: { rating: 50, count: 682 },
  },
  {
    id: 14,
    name: "Wireless Charging Pad for Smartphones",
    priceCents: 8999,
    image: "images/wirelesscharger.png",
    reviews: { rating: 45, count: 3311 },
  },
  {
    id: 15,
    name: "Handmade Leather Wallet",
    priceCents: 4999,
    image: "images/leatherwallet.png",
    reviews: { rating: 50, count: 7622 },
  },
  {
    id: 16,
    name: "JuJutsu Kaisen Plush Toy",
    priceCents: 1999,
    image: "images/animeplushie.png",
    reviews: { rating: 45, count: 231 },
  },
  {
    id: 17,
    name: "Foldable Travel Backpack",
    priceCents: 7499,
    image: "images/foldbackpack.png",
    reviews: { rating: 40, count: 522 },
  },
];

export function convertion(price) {
  return price / 100;
}
