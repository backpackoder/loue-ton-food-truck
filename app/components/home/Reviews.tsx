import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";

// Utils
import { reviews } from "@/utils/reviews";

export function Reviews() {
  return (
    <article className="flex flex-col items-center gap-4 w-full p-8">
      <h3 className="text-2xl font-bold pl-8">Nos avis</h3>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_300px))] justify-center gap-10 w-full p-4">
        {reviews.map((review, index) => (
          <Review
            key={index}
            name={review.name}
            image={review.image}
            stars={review.stars}
            content={review.content}
          />
        ))}
      </div>
    </article>
  );
}

function Review({
  name,
  image,
  stars,
  content,
}: {
  name: string;
  image: StaticImageData;
  stars: number;
  content: string;
}) {
  return (
    <div className="group flex flex-col gap-4 bg-red-100 p-4 rounded-lg shadow-2xl">
      <div className="flex items-center gap-2">
        <Image src={image} alt="Quotes" width={50} height={50} className="rounded-full" />

        <h4 className="text-xl font-bold">{name}</h4>
      </div>

      <div className="flex items-center">
        {Array.from({ length: stars }).map((_, index) => (
          <FaStar key={index} className="w-8 text-yellow-400" />
        ))}
      </div>

      <p className="text-xl">{content}</p>
    </div>
  );
}
