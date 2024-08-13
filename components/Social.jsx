import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaLinkedin, FaInstagram, FaInstagramSquare, FaHackerrank } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ayush1452" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ayush-sharma-7417a416a/" },
  { icon: <FaInstagramSquare />, path: "" },
  { icon: <FaHackerrank />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
