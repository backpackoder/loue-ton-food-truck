// Components
import { Banner } from "./components/home/Banner";
import { ProductsList } from "./components/home/ProductsList";
import { Text } from "./components/home/Text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8">
      <Banner />
      <ProductsList />
      <Text />
    </main>
  );
}
