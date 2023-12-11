// Hooks
import { stringForUrl } from "@/hooks/stringForUrl";

// Routes
export const ROUTES = {
  HOME: {
    LABEL: "Accueil",
    URL: "/",
  },
  PRODUCTS: {
    LABEL: "Nos produits",
    URL: "/nos-produits",
  },
  PRODUCT: {
    LABEL: (name: string) => stringForUrl(name),
    URL: ({ id, name }: { id: string; name: string }) => `/produit/${id}/${stringForUrl(name)}`,
  },
  // ABOUT: {
  //   LABEL: "À propos",
  //   URL: "/a-propos",
  // },
  CONTACT: {
    LABEL: "Contact",
    URL: "/contact",
  },
};

// Main menu
export const MAIN_MENU = {
  HOME: {
    LABEL: "Accueil",
    URL: "/",
  },
  PRODUCTS: {
    LABEL: "Nos produits",
    URL: "/nos-produits",
  },
  // ABOUT: {
  //   LABEL: "À propos",
  //   URL: "/a-propos",
  // },
  CONTACT: {
    LABEL: "Contact",
    URL: "/contact",
  },
};

// export const FACEBOOK_URL = "https://www.facebook.com/";
// export const INSTAGRAM_URL = "https://www.instagram.com/";
// export const EMAIL_URL = `mailto:${EMAIL}`;
// export const WHATSAPP_URL = `https://wa.me/${PHONE_WITHOUT_SPACE}`;
