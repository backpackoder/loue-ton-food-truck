// Routes
export const ROUTES = {
  HOME: {
    LABEL: "Accueil",
    URL: "/",
  },
  SERVICES: {
    LABEL: "Nos services",
    URL: "/nos-services",
  },
  ABOUT: {
    LABEL: "À propos",
    URL: "/a-propos",
  },
  CONTACT: {
    LABEL: "Contact",
    URL: "/contact",
  },
};

// Contact
export const EMAIL = "tradilocation@gmail.com";
export const PHONE = "+33 7 56 90 08 53";
export const PHONE_WITHOUT_SPACE = PHONE.replace(/\s/g, "");

export const FACEBOOK_URL = "https://www.facebook.com/tradi.lmc";
export const INSTAGRAM_URL = "https://www.instagram.com/tradi.lmc/";
export const EMAIL_URL = `mailto:${EMAIL}`;
export const WHATSAPP_URL = `https://wa.me/${PHONE_WITHOUT_SPACE}`;
