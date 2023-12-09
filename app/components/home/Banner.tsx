import Image from "next/image";
import Link from "next/link";

// Assets
import BANNER_IMAGE from "@/assets/images/banner-image.jpg";

export function Banner() {
  return (
    <div className="relative top-0 flex items-center justify-center w-full h-[75vh] overflow-hidden object-center">
      <Image
        src={BANNER_IMAGE}
        alt="Bannière de Tradilocation"
        className="absolute top-0 left-0 object-cover w-full h-full brightness-50"
      />

      <div className="absolute flex flex-col items-center justify-center gap-4 text-white font-semibold p-2">
        <h1 className="text-4xl text-center sm:text-6xl">Tradilocation</h1>

        <h2 className="text-lg text-center sm:text-4xl">
          Location de Food truck, remorques et véhicules magasin
        </h2>
      </div>

      <div className="absolute bottom-4 flex items-center justify-center gap-8">
        <CTA label="Découvrir" url="/products" />
        <CTA label="Nous contacter" url="/contact" />
      </div>
    </div>
  );
}

function CTA({ label, url }: { label: string; url: string }) {
  return (
    <Link
      href={url}
      className="flex items-center justify-center gap-2 bg-green-600 text-white p-2 rounded-lg duration-300 hover:bg-green-800"
    >
      {label}
    </Link>
  );
}
