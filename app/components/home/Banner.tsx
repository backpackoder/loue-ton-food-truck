import Image from "next/image";
import Link from "next/link";
import { FaEye, FaPhone } from "react-icons/fa";

// Types
import { IconType } from "react-icons";

// Assets
import BANNER_IMAGE from "@/assets/images/banner-image.jpg";

export function Banner() {
  return (
    <div className="relative top-0 flex items-center justify-center w-full h-[500px] max-h-[75vh] overflow-hidden object-center">
      <Image src={BANNER_IMAGE} alt="Bannière de Tradilocation" className="w-full brightness-50" />

      <div className="absolute flex flex-col items-center justify-center gap-4 text-white font-semibold">
        <h1 className="text-6xl text-center">Tradilocation</h1>
        <h2 className="text-4xl text-center">Louez votre food truck</h2>
      </div>

      <div className="absolute bottom-4 flex items-center justify-center gap-8">
        <CTA label="Découvrir" Icon={FaEye} url="/products" />
        <CTA label="Nous contacter" Icon={FaPhone} url="/contact" />
      </div>
    </div>
  );
}

function CTA({ label, Icon, url }: { label: string; Icon: IconType; url: string }) {
  return (
    <Link
      href={url}
      className="flex items-center justify-center gap-2 bg-green-600 text-white p-2 rounded-lg duration-300 hover:bg-green-800"
    >
      <Icon size={25} /> {label}
    </Link>
  );
}
