// import React from "react";

// export default function Hero() {

//   return (
//     <div className="h-screen flex justify-center items-center px-4">
//       <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
//         Build
//         <FlipWords words={words} /> <br />
//         websites with Aceternity UI
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FlipWords } from "@/components/ui/flip-words";
const words = ["better", "hollow", "strong", "modern"];

export default function Hero() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-screen py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Be
        <FlipWords words={words} />
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://res.cloudinary.com/dvfmse8he/image/upload/v1722345411/smartmockups_lz8fz68m_kbl2w2.jpg",
    content: null,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://res.cloudinary.com/dvfmse8he/image/upload/v1722345531/smartmockups_lz8fzuiz_nhfzfy.jpg",
    content: null,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://res.cloudinary.com/dvfmse8he/image/upload/v1722345531/smartmockups_lz8g0z3m_d8d7yc.jpg",
    content: null,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://res.cloudinary.com/dvfmse8he/image/upload/v1722350152/smartmockups_lz8ispbe_mnliuu.jpg",
    content: null,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://res.cloudinary.com/dvfmse8he/image/upload/v1722350859/smartmockups_lz8j72kv_mnx1qq.jpg",
    content: null,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://res.cloudinary.com/dvfmse8he/image/upload/v1722350859/smartmockups_lz8j7xlr_bqkt2c.jpg",
    content: null,
  },
];
