import Image from "next/image";

// Utils
import { PRODUCTS } from "@/utils/products";

export default function page({ params }: { params: { productID: string; productName: string } }) {
  const product = PRODUCTS.find((item) => item.ID === params.productID);

  if (!product) return <div>Produit introuvable</div>;

  return (
    <article className="flex flex-wrap justify-center gap-8 w-full p-8">
      <h1 className="text-4xl font-bold w-full">{product.NAME}</h1>

      <div className="flex items-start gap-4">
        <div className="flex flex-wrap justify-center gap-4 max-w-[500px]">
          <Image src={product.IMAGES[0].SRC} alt={product.IMAGES[0].ALT} width={500} height={500} />

          {product.IMAGES.map((image, index) => {
            return (
              index !== 0 && (
                <Image key={index} src={image.SRC} alt={image.ALT} width={225} height={225} />
              )
            );
          })}
        </div>

        <div className="sticky top-4 flex flex-wrap items-start gap-4 max-w-[50%]">
          <Details label="Description" data={product.DESCRIPTION} />
          <Details label="Catégorie" data={product.CATEGORY} />
          <Details label="Poids (kg)" data={product.WEIGHT} />
          <Details label="En stock" data={product.QUANTITY} />
          <Details label="Prix (par mois)" data={product.PRICE} />
        </div>
      </div>
    </article>
  );
}

function Details({ label, data }: { label: string; data: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 bg-gray-300 py-2 px-4 rounded-md">
      <p className="text-xl font-semibold">{label}:</p>
      <p>{data}</p>
    </div>
  );
}
