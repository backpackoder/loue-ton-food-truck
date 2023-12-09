import Image from "next/image";

// Components
import { ProductsList } from "./components/home/ProductsList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsList />
    </main>
  );
}
