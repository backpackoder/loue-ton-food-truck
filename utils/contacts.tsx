// Icons
import { FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

// Commons
// import { EMAIL_URL, FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from "../commons/commons";

const facebookIcon = <FaFacebook size="35px" />;
const instagramIcon = <FaInstagram size="35px" />;
const mailIcon = <FaEnvelope size="35px" />;
const whatsappIcon = <FaWhatsapp size="35px" />;

export const contacts = [
  {
    name: "Facebook",
    icon: facebookIcon,
    url: "",
  },
  {
    name: "Instagram",
    icon: instagramIcon,
    url: "",
  },
  {
    name: "Email",
    icon: mailIcon,
    url: "",
  },
  {
    name: "WhatsApp",
    icon: whatsappIcon,
    url: "",
  },
];
