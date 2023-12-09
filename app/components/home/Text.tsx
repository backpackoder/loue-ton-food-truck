import Image from "next/image";

// Assets
import TEXT_IMAGE from "@/assets/images/text-image.jpg";

export function Text() {
  return (
    <article className="flex flex-col justify-center gap-4 bg-blue-200 text-black p-8 lg:flex-row">
      <div className="flex flex-col gap-4 lg:w-1/2">
        <h3 className="text-2xl font-bold">Les avantages de louer un Food truck</h3>

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae ducimus odio
          reprehenderit illo veritatis eius, suscipit labore cupiditate? Asperiores atque nam
          nesciunt impedit id quibusdam sint illo odit ut!
        </p>
      </div>

      <Image
        src={TEXT_IMAGE}
        alt="Les avantages de louer un Food truck"
        width={300}
        height={200}
        className="m-auto lg:m-0"
      />
    </article>
  );
}
