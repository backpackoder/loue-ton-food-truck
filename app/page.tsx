// Components
import { Banner } from "./components/home/Banner";
import { ProductsList } from "./components/ProductsList";
import { Text } from "./components/home/Text";
import { Reviews } from "./components/home/Reviews";

export default function Home() {
  return (
    <>
      <Banner />
      <ProductsList />
      <Text />
      <Reviews />
    </>
  );
}
