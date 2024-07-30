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
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: null,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: null,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: null,
  },
];
