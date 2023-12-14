import Image from "next/image";
import Link from "next/link";

// Utils
import { PRODUCTS, Product } from "@/utils/products";

// Commons
import { ROUTES } from "@/commons/commons";

export function ProductsList() {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_300px))] justify-center gap-10 w-full p-4">
      <h2 className="col-span-full text-3xl text-center font-bold">Nos produits</h2>

      {PRODUCTS.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </section>
  );
}

function Item({ item }: { item: Product }) {
  return (
    <Link
      href={ROUTES.PRODUCT.URL({ id: item.ID, name: item.NAME })}
      className="group flex flex-col justify-between gap-4 bg-[rgb(245,245,245)] p-2 rounded-lg
                shadow-xl cursor-pointer duration-300 hover:bg-[rgb(235,235,235)]"
    >
      <Image
        src={item.IMAGES[0].SRC}
        alt={item.IMAGES[0].ALT}
        className="object-cover w-full h-[200px] rounded-lg duration-300 group-hover:brightness-50"
      />

      <h2 className="text-2xl font-semibold">{item.NAME}</h2>

      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <p className="text-xs text-gray-500">À partir de</p>
          <p className="text-2xl font-medium">{item.PRICE}€/mois</p>
        </div>

        <button className="bg-blue-800 text-white p-2 rounded-lg duration-300 hover:bg-blue-950">
          Découvrir
        </button>
      </div>
    </Link>
  );
}
