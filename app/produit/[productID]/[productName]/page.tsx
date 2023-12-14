// Utils
import { PRODUCTS } from "@/utils/products";

// Components
import { Pictures } from "@/app/components/produit/Pictures";
import { Caracteristics } from "@/app/components/produit/Caracteristics";
import { QuoteRequest } from "@/app/components/produit/QuoteRequest";

export default function page({ params }: { params: { productID: string; productName: string } }) {
  const product = PRODUCTS.find((item) => item.ID === params.productID);

  if (!product) return <article>Produit introuvable</article>;

  return (
    <article className="flex flex-wrap justify-center gap-8 w-full p-8">
      <h1 className="text-4xl font-bold w-full">{product.NAME}</h1>

      <div className="flex flex-wrap items-start justify-center gap-y-8 gap-x-4">
        <Pictures product={product} />

        <div className="flex flex-wrap items-start justify-center gap-4">
          <Caracteristics product={product} />
          <QuoteRequest product={product} />
        </div>
      </div>
    </article>
  );
}
