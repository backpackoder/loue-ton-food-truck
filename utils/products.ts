// Assets
import FOOD_TRUCK_BURGER_1 from "../assets/images/products/food-truck-burger/1.jpg";
import FOOD_TRUCK_BURGER_2 from "../assets/images/products/food-truck-burger/2.jpg";
import FOOD_TRUCK_PIZZA_1 from "../assets/images/products/food-truck-pizza/1.jpg";
import FOOD_TRUCK_PIZZA_2 from "../assets/images/products/food-truck-pizza/2.jpg";
import FOOD_TRUCK_PIZZA_3 from "../assets/images/products/food-truck-pizza/3.jpg";
import FOOD_TRUCK_ROTISSERIE_1 from "../assets/images/products/food-truck-rotisserie/1.jpg";
import FOOD_TRUCK_ROTISSERIE_2 from "../assets/images/products/food-truck-rotisserie/2.jpg";
import REMORQUE_1 from "../assets/images/products/remorque/1.jpg";
import REMORQUE_2 from "../assets/images/products/remorque/2.jpg";
import REMORQUE_3 from "../assets/images/products/remorque/3.jpg";
import REMORQUE_4 from "../assets/images/products/remorque/4.jpg";
import REMORQUE_5 from "../assets/images/products/remorque/5.jpg";

export type Product = (typeof PRODUCTS)[0];

export const PRODUCTS = [
  {
    ID: "1",
    NAME: "Food truck burger",
    CATEGORY: "Food truck",
    DESCRIPTION: `Pourquoi choisir notre Camion Food Truck Burger ?
      - Le camion Food Truck idéal pour un concept de burgers
      - Aménagement pensé précisément pour la réalisation de burgers en ergonomie "marche en avant" :
      espace préparation, espace cuisson, assemblage et zone d'envoi
      - Equipement et ajout de matériel en fonction de vos besoins
      - Personnalisation à votre image avec notre service design`,
    IMAGES: [
      { SRC: FOOD_TRUCK_BURGER_1, ALT: "Food truck burger" },
      { SRC: FOOD_TRUCK_BURGER_2, ALT: "Food truck burger" },
    ],
    QUANTITY: "3",
    WEIGHT: "1000",
    PRICE: "300",
  },
  {
    ID: "2",
    NAME: "Food truck pizza",
    CATEGORY: "Food truck",
    DESCRIPTION: `Pourquoi choisir notre Camion Food Truck Pizzas ?
      - Le camion Food Truck idéal pour un concept de pizzas
      - Aménagement pensé précisément pour la réalisation de pizzas en ergonomie "marche en avant" :
      espace préparation, espace cuisson, assemblage et zone d'envoi
      - Equipement et ajout de matériel en fonction de vos besoins
      - Personnalisation à votre image avec notre service design`,
    IMAGES: [
      { SRC: FOOD_TRUCK_PIZZA_1, ALT: "Food truck pizza" },
      { SRC: FOOD_TRUCK_PIZZA_2, ALT: "Food truck pizza" },
      { SRC: FOOD_TRUCK_PIZZA_3, ALT: "Food truck pizza" },
    ],
    QUANTITY: "2",
    WEIGHT: "1500",
    PRICE: "400",
  },
  {
    ID: "3",
    NAME: "Food truck rôtisserie",
    CATEGORY: "Food truck",
    DESCRIPTION: `Pourquoi choisir notre Camion Food Truck Rôtisserie ?
      - Le camion Food Truck idéal pour un concept de rôtisserie
      - Aménagement pensé précisément pour la réalisation de rôtisserie en ergonomie "marche en avant" :
      espace préparation, espace cuisson, assemblage et zone d'envoi
      - Equipement et ajout de matériel en fonction de vos besoins
      - Personnalisation à votre image avec notre service design`,
    IMAGES: [
      { SRC: FOOD_TRUCK_ROTISSERIE_1, ALT: "Food truck rôtisserie" },
      { SRC: FOOD_TRUCK_ROTISSERIE_2, ALT: "Food truck rôtisserie" },
    ],
    QUANTITY: "5",
    WEIGHT: "2000",
    PRICE: "500",
  },
  {
    ID: "4",
    NAME: "Remorque",
    CATEGORY: "Remorque",
    DESCRIPTION: `Pourquoi choisir notre Remorque ?
      - La remorque idéale pour un concept de restauration
      - Aménagement pensé précisément pour la réalisation de vos produits en ergonomie "marche en avant" :
      espace préparation, espace cuisson, assemblage et zone d'envoi
      - Equipement et ajout de matériel en fonction de vos besoins
      - Personnalisation à votre image avec notre service design`,
    IMAGES: [
      { SRC: REMORQUE_1, ALT: "Remorque" },
      { SRC: REMORQUE_2, ALT: "Remorque" },
      { SRC: REMORQUE_3, ALT: "Remorque" },
      { SRC: REMORQUE_4, ALT: "Remorque" },
      { SRC: REMORQUE_5, ALT: "Remorque" },
    ],
    QUANTITY: "10",
    WEIGHT: "500",
    PRICE: "100",
  },
];
