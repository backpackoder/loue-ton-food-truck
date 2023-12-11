import Image from "next/image";

// Assets
import TEXT_IMAGE from "@/assets/images/text-image.jpg";

export function Text() {
  return (
    <article className="flex flex-col items-start justify-center gap-4 bg-blue-200 text-black p-8 lg:flex-row">
      <div className="flex flex-col gap-4 lg:w-1/2">
        <h3 className="text-2xl font-bold">Les avantages de louer un Food truck</h3>

        <div className="flex flex-col gap-4">
          <Section
            title="Flexibilité et Mobilité"
            content="Ils peuvent se déplacer, touchant différents publics à différents endroits."
          />
          <Section
            title="Coût abordable"
            content="Moins cher que les restaurants traditionnels en termes de coûts de démarrage et d'exploitation."
          />
          <Section
            title="Réduction des coûts fixes"
            content="Moins de charges fixes que les restaurants classiques."
          />
          <Section
            title="Adaptabilité aux événements"
            content="Parfaits pour des mariages, festivals ou foires, offrant une variété de plats adaptés."
          />
          <Section
            title="Engagement communautaire"
            content="Favorisent un sentiment de connexion avec la communauté en participant à des événements locaux créant une atmosphère décontractée offrant une expérience différente des restaurants traditionnels."
          />
          {`Louer un food truck offre une expérience culinaire flexible et unique,
        idéale pour différents types d'événements ou pour lancer de nouvelles idées.`}
        </div>
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

function Section({ title, content }: { title: string; content: string }) {
  return (
    <span className="flex flex-col gap-1">
      <h5 className="text-xl font-semibold">• {title}</h5>
      <p>{content}</p>
    </span>
  );
}
