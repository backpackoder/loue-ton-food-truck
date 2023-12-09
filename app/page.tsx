// Components
import { Banner } from "./components/home/Banner";
import { ProductsList } from "./components/home/ProductsList";
import { Text } from "./components/home/Text";
import { Reviews } from "./components/home/Reviews";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-16">
      <Banner />
      <ProductsList />
      <Text />
      <Reviews />
    </main>
  );
}
