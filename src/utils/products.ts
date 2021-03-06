import { v4 as uuid } from "uuid";

type Product = {
  id: string;
  categories?: string[];
  price: number;
  updatedPrice: number;
  image?: string;
  name: string;
  images?: string[];
  description: string;
  brand?: string;
  sku?: string;
  variants?: { [key: string]: any };
  meta?: { [key: string]: string };
  category?: string;
};

const devOrigin = "https://d736-78-58-239-79.ngrok.io";
const prodOrigin = "https://thepowerbelt.com";
export const origin = process.env.NODE_ENV === "production" ? prodOrigin : devOrigin;

const productList: Product[] = [
  {
    id: "B-102",
    category: "belt",
    name: "Powerlifting Belt 13mm",
    description:
      "Featuring a patented gliding lever, providing the adjustability of a prong belt with the ease and tightness of a lever belt. Ideal for sizing up or down whenever you need during training sessions and competitions.",
    price: 15000,
    updatedPrice: 15000,
    images: [`${origin}/images/pwb/b-102.png`],
  },
  {
    id: "B-101",
    category: "belt",
    name: "Deadlifting Belt 13mm",
    description: "this is description",
    price: 15000,
    updatedPrice: 15000,
    images: [`${origin}/images/pwb/b-101-103.png`],
  },
  {
    id: "B-103",
    category: "belt",
    name: "Deadlifting Belt 10mm",
    description: "this is description",
    price: 15000,
    updatedPrice: 15000,
    images: [`${origin}/images/pwb/b-101-103.png`],
  },
];

// 300 => 67% => $99

// const productList = [
//   {
//     categories: ["belts"],
//     name: "Lever Buckle Powerlifting Belt",
//     priceOriginal: "130",
//     discountPercent: "55",
//     price: "59",
//     sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
//     colors: ["black", "yellow", "red"],
//     imageMain: "/images/lever-belts.png",
//     images: ["/images/lever-belts.png"],
//     description:
//       "Featuring a patented gliding lever, providing the adjustability of a prong belt with the ease and tightness of a lever belt. Ideal for sizing up or down whenever you need during training sessions and competitions.",
//   },
//   {
//     categories: ["belts"],
//     name: "Heavy duty SBD Lever Powerlifting weightlifting Belt 13mm",
//     priceOriginal: "300",
//     discountPercent: "67",
//     price: "99",
//     sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
//     colors: ["black", "yellow", "red"],
//     imageMain: "/images/sbd-belts.png",
//     images: ["/images/sbd-belts.png"],
//     description:
//       "Featuring a patented gliding lever, providing the adjustability of a prong belt with the ease and tightness of a lever belt. Ideal for sizing up or down whenever you need during training sessions and competitions.",
//   },
// ];

// const products = [
//     {
//         categories: ["new arrivals"],
//         name: "Timber Gray Sofa 2.0",
//         price: "1000",
//         image: "/products/couch1.png",
//         description:
//             "Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa???s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["sofas", "living room"],
//         name: "Carmel Brown Sofa",
//         price: "1000",
//         image: "/products/couch5.png",
//         description:
//             "Stay a while. The Timber charme chocolat sofa is set atop an oak trim and flaunts fluffy leather back and seat cushions. Over time, this brown leather sofa???s full-aniline upholstery will develop a worn-in vintage look. Snuggle up with your cutie (animal or human) and dive into a bowl of popcorn. This sofa is really hard to leave. Natural color variations, wrinkles and creases are part of the unique characteristics of this leather. It will develop a relaxed vintage look with regular use.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["new arrivals", "sofas"],
//         name: "Mod Leather Sofa",
//         price: "800",
//         image: "/products/couch6.png",
//         description:
//             "Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["new arrivals", "sofas"],
//         name: "Thetis Gray Love Seat",
//         price: "900",
//         image: "/products/couch7.png",
//         description:
//             "You know your dad???s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["on sale", "sofas"],
//         name: "Sven Tan Matte",
//         price: "1200",
//         image: "/products/couch8.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["on sale", "sofas"],
//         name: "Otis Malt Sofa",
//         price: "500",
//         image: "/products/couch9.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["on sale", "sofas"],
//         name: "Ceni Brown 3 Seater",
//         price: "650",
//         image: "/products/couch10.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["sofas", "living room"],
//         name: "Jameson Jack Lounger",
//         price: "1230",
//         image: "/products/couch11.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },

//     {
//         categories: ["sofas"],
//         name: "Galaxy Blue Sofa",
//         price: "800",
//         image: "/products/couch2.png",
//         description:
//             "Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["new arrivals", "sofas"],
//         name: "Markus Green Love Seat",
//         price: "900",
//         image: "/products/couch3.png",
//         description:
//             "You know your dad???s incredible vintage bomber jacket? The Nirvana dakota tan leather sofa is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskin throw, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-in look, like your favorite leather jacket.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["on sale", "sofas"],
//         name: "Dabit Matte Black",
//         price: "1200",
//         image: "/products/couch4.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//     },

//     {
//         categories: ["on sale", "chairs"],
//         name: "Embrace Blue",
//         price: "300",
//         image: "/products/chair1.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["on sale", "chairs"],
//         name: "Nord Lounger",
//         price: "825",
//         image: "/products/chair2.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["on sale", "chairs"],
//         name: "Ceni Matte Oranve",
//         price: "720",
//         image: "/products/chair3.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["on sale", "chairs"],
//         name: "Abisko Green Recliner",
//         price: "2000",
//         image: "/products/chair4.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["on sale", "chairs"],
//         name: "Denim on Denim Single",
//         price: "1100",
//         image: "/products/chair5.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["on sale", "chairs"],
//         name: "Levo Tan Lounge Chair",
//         price: "600",
//         image: "/products/chair6.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },

//     {
//         categories: ["on sale", "chairs"],
//         name: "Anime Tint Recliner",
//         price: "775",
//         image: "/products/chair7.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["on sale", "chairs"],
//         name: "Josh Jones Red Chair",
//         price: "1200",
//         image: "/products/chair8.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["on sale", "chairs"],
//         name: "Black Sand Lounge",
//         price: "1600",
//         image: "/products/chair9.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },
//     {
//         categories: ["on sale", "chairs"],
//         name: "Mint Beige Workchair",
//         price: "550",
//         image: "/products/chair10.png",
//         description:
//             "You don???t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
//         brand: "Jason Bourne",
//     },
// ];

// const products: any = productList.map((p) => ({ ...p, id: uuid() }));

export { productList as products };
