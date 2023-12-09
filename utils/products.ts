// Assets
import FOOD_TRUCK_BURGER from "../assets/images/food-truck-burger.jpg";
import FOOD_TRUCK_PIZZA from "../assets/images/food-truck-pizza.jpg";
import FOOD_TRUCK_ROTISSERIE from "../assets/images/food-truck-rotisserie.jpg";
import REMORQUE from "../assets/images/remorque.jpg";

export type Product = (typeof PRODUCTS)[0];

export const PRODUCTS = [
  {
    NAME: "Food truck burger",
    DESCRIPTION: "Food truck pour burgers",
    IMAGE: { SRC: FOOD_TRUCK_BURGER, ALT: "Food truck burger" },
    PRICE: "300",
  },
  {
    NAME: "Food truck pizza",
    DESCRIPTION: "Food truck pour pizzas",
    IMAGE: { SRC: FOOD_TRUCK_PIZZA, ALT: "Food truck pizza" },
    PRICE: "400",
  },
  {
    NAME: "Food truck rôtisserie",
    DESCRIPTION: "Food truck pour rôtisserie",
    IMAGE: { SRC: FOOD_TRUCK_ROTISSERIE, ALT: "Food truck rôtisserie" },
    PRICE: "500",
  },
  {
    NAME: "Remorque",
    DESCRIPTION: "Remorque simple",
    IMAGE: { SRC: REMORQUE, ALT: "Remorque" },
    PRICE: "100",
  },
];
