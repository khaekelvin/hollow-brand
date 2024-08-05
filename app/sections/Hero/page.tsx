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
    category: "Stand Out",
    title: "Bold Designs",
    desc: "Hollow Threads offers clothing with bold and unique designs that make a statement. Our pieces are crafted to help you express your individuality and stand out from the crowd.",
    src: "https://res.cloudinary.com/dvfmse8he/image/upload/v1722345411/smartmockups_lz8fz68m_kbl2w2.jpg",
    pic: "https://res.cloudinary.com/dvfmse8he/image/upload/v1722345411/smartmockups_lz8fz68m_kbl2w2.jpg",
    content: null,
  },
  {
    category: "Feel the Difference",
    title: "Quality Materials",
    desc: "We use high-quality fabrics and materials to ensure comfort and durability. Each piece is designed to last, so you can enjoy your favorite styles for seasons to come.",
    src: "https://res.cloudinary.com/dvfmse8he/image/upload/v1722345531/smartmockups_lz8fzuiz_nhfzfy.jpg",
    content: null,
  },
  {
    category: "Fashion Forward",
    title: "Sustainable Practices",
    desc: "At Hollow Threads, we are committed to sustainable fashion. We prioritize eco-friendly materials and ethical production processes, helping to reduce our environmental footprint.",
    src: "https://res.cloudinary.com/dvfmse8he/image/upload/v1722345531/smartmockups_lz8g0z3m_d8d7yc.jpg",
    content: null,
  },

  {
    category: "From Day to Night",
    title: "Versatile Styles",
    desc: "Our versatile styles are perfect for any occasion. Whether you're dressing up for a night out or keeping it casual, Hollow Threads has you covered with adaptable pieces that suit your lifestyle.",
    src: "https://res.cloudinary.com/dvfmse8he/image/upload/v1722350152/smartmockups_lz8ispbe_mnliuu.jpg",
    content: null,
  },
  {
    category: "Exclusive & Unique",
    title: "Limited Edition Collections",
    desc: "Personalize your Hollow Threads pieces with customizable options. From choosing colors to adding unique details, we offer a range of customization choices to make each item truly your own.",
    src: "https://res.cloudinary.com/dvfmse8he/image/upload/v1722350859/smartmockups_lz8j72kv_mnx1qq.jpg",
    content: null,
  },
  {
    category: "Make It Yours",
    title: "Customizable Options",
    desc: "We believe that fashion should be accessible to everyone. Hollow Threads offers a wide range of sizes, ensuring that all customers can find the perfect fit and style for their body type.",
    src: "https://res.cloudinary.com/dvfmse8he/image/upload/v1722350859/smartmockups_lz8j7xlr_bqkt2c.jpg",
    content: null,
  },
];
