// Components
import { ContactsList } from "./ContactsList";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white text-center p-2">
      <ContactsList style={"flex justify-evenly max-w-[600px] mx-auto cursor-pointer"} />

      <small>Tradilocation - 2023</small>
    </footer>
  );
}
