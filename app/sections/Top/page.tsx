import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

// export function FlipWordsDemo() {
//   return (
//     <div className="h-[40rem] flex justify-center items-center px-4">
//       <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
//         Build
//          <br />
//         websites with Aceternity UI
//       </div>
//     </div>
//   );
// }

function Top() {
  const words = ["Original", "Unique", "Bold", "Modern"];
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h2 className="text-6xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Be
        <FlipWords words={words} />
      </h2>
    </div>
  );
}

export default Top;
