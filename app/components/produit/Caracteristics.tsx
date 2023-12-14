// Types
import { Product } from "@/utils/products";

export function Caracteristics({ product }: { product: Product }) {
  return (
    <div className="flex flex-wrap items-start gap-4 max-w-md">
      <Detail product={product} label="Description" data={product.DESCRIPTION} />
      <Detail product={product} label="Catégorie" data={product.CATEGORY} />
      <Detail product={product} label="Poids (kg)" data={product.WEIGHT} />
      <Detail product={product} label="En stock" data={product.QUANTITY} />
      <Detail product={product} label="Prix" data={product.PRICE} />
    </div>
  );
}

function Detail({ product, label, data }: { product: Product; label: string; data: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 bg-gray-300 py-2 px-4 rounded-md">
      <p className="text-xl font-semibold">{label}:</p>
      <p>{data === product.PRICE ? `À partir de ${data}€ / mois` : data}</p>
    </div>
  );
}
