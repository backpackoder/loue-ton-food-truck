import Image from "next/image";
import Link from "next/link";

// Assets
import LogoImage from "@/assets/images/logo.jpg";

// Commons
import { ROUTES } from "@/commons/commons";

export function Logo() {
  return (
    <Link href={ROUTES.HOME.URL}>
      <Image
        src={LogoImage}
        alt="Logo de Tradilocation"
        width={50}
        height={50}
        className="rounded-full"
      />
    </Link>
  );
}
