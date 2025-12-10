"use client";

import { useEffect, useRef } from "react";

export default function InfiniteLine() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrame;
    let position = 0;
    const speed = 0.7; // tezlik

    const itemsWidth = container.scrollWidth / 2;

    const scroll = () => {
      position -= speed;
      if (Math.abs(position) >= itemsWidth) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    // hoverda to‘xtatish
    const stop = () => cancelAnimationFrame(animationFrame);
    const start = () => (animationFrame = requestAnimationFrame(scroll));

    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", start);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", stop);
      container.removeEventListener("mouseleave", start);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#151313] border-y border-gray-700">
      <div
        ref={scrollRef}
        className="flex whitespace-nowrap py-[26px] text-gray-200 uppercase tracking-normal"
      >
        <LineItems />
        <LineItems />
      </div>
    </div>
  );
}

function LineItems() {
  return (
    <>
    <span className="mx-6 flex font-cormorant font-semibold text-[24px] leading-[107%] uppercase items-center gap-3">
          <span className="text-[24px]">●</span> Ароматические свечи
        </span>

        <span className="mx-6 flex font-cormorant font-semibold text-[24px] leading-[107%] uppercase items-center gap-3">
          <span className="text-[24px]">●</span> Диффузоры
        </span>

        <span className="mx-6 flex font-cormorant font-semibold text-[24px] leading-[107%] uppercase items-center gap-3">
          <span className="text-[24px]">●</span> Автопарфюм
        </span>

        <span className="mx-6 flex font-cormorant font-semibold text-[24px] leading-[107%] uppercase items-center gap-3">
          <span className="text-[24px]">●</span> Ароматические свечи
        </span>

        <span className="mx-6 flex font-cormorant font-semibold text-[24px] leading-[107%] uppercase items-center gap-3">
          <span className="text-[24px]">●</span> Диффузоры
        </span>

        <span className="mx-6 flex font-cormorant font-semibold text-[24px] leading-[107%] uppercase items-center gap-3">
          <span className="text-[24px]">●</span> Автопарфюм
        </span>
    </>
  );
}
