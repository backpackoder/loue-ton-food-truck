"use client";

import Image from "next/image";
import { SetStateAction, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// Utils
import { Product } from "@/utils/products";
import { handleArrow } from "./utils/handleArrow";

export function Pictures({ product }: { product: Product }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="flex flex-col justify-center gap-2">
      <Image
        src={product.IMAGES[currentImage].SRC}
        alt={product.IMAGES[currentImage].ALT}
        width={500}
        height={500}
      />

      <div className="flex items-center justify-between">
        <Arrow
          direction="prev"
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          length={product.IMAGES.length}
        />

        <Dots product={product} currentImage={currentImage} setCurrentImage={setCurrentImage} />

        <Arrow
          direction="next"
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          length={product.IMAGES.length}
        />
      </div>
    </div>
  );
}

function Dots({
  product,
  currentImage,
  setCurrentImage,
}: {
  product: Product;
  currentImage: number;
  setCurrentImage: (value: SetStateAction<number>) => void;
}) {
  return (
    <div className="flex gap-4 justify-center">
      {Array.from({ length: product.IMAGES.length }, (_, index) => (
        <button
          key={index}
          className={`${
            index === currentImage ? "bg-blue-500" : "bg-gray-400"
          } w-4 h-4 rounded-full duration-150 hover:bg-blue-500`}
          onClick={() => setCurrentImage(index)}
        />
      ))}
    </div>
  );
}

function Arrow({
  direction,
  currentImage,
  setCurrentImage,
  length,
}: {
  direction: "prev" | "next";
  currentImage: number;
  setCurrentImage: (value: SetStateAction<number>) => void;
  length: number;
}) {
  const isPrev = direction === "prev";

  return (
    <button
      onClick={() => setCurrentImage(handleArrow({ currentImage, length, isPrev }))}
      className={`flex items-center justify-center font-bold rounded-full duration-300 hover:bg-gray-400`}
    >
      {direction === "prev" ? <FaArrowCircleLeft size="60" /> : <FaArrowCircleRight size="60" />}
    </button>
  );
}
