"use client";

import { useState } from "react";

// Utils
import { Product } from "@/utils/products";
import { TRUCK_ITEMS } from "@/utils/truckItems";

export function QuoteRequest({ product }: { product: Product }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="relative flex flex-col justify-center gap-4 p-4 rounded-lg shadow-xl">
      <Detail label={`Personnalisez votre ${product.CATEGORY}`} data={TRUCK_ITEMS} />

      <button
        onClick={() => setIsClicked(true)}
        className={`bg-green-500 text-white font-semibold py-2 px-4 rounded-lg duration-300 ${
          isClicked ? "bg-yellow-500" : "hover:bg-green-700"
        }`}
      >
        {isClicked ? "Devis envoyé !" : "J'envoie le devis"}
      </button>
    </div>
  );
}

function Detail({ label, data }: { label: string; data: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold">{label}</h3>
      <ul>
        {data.map((item) => (
          <li key={item}>
            <input type="radio" /> {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2">
        <p>Temps de location:</p>
        <div>
          <input type="number" min="3" max="24" defaultValue="12" className="text-center" /> mois
        </div>
      </div>
    </div>
  );
}
