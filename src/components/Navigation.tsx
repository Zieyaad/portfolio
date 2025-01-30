"use client";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import * as prismic from "@prismicio/client";
import clsx from "clsx";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

const NavBar = ({ settings }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10); // Change state after scrolling 20px
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center mt-5">
      <nav
        aria-label="Main"
        className={`rounded-full transition-all ease-in-out duration-1000 p-2 ${
          isScrolled
            ? "bg-navbar/50 shadow-lg backdrop-blur backdrop-saturate"
            : "bg-transparent"
        }`}
      >
        <div className="relative overflow-hidden">
          <ul className="flex">
            {settings.data.navigation.map((item) => (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className={clsx(
                    "flex px-3 mx-2 py-1 text-base font-medium text-text transition-colors duration-200 tracking-wide rounded-full",
                    {
                      "bg-navbar/50":
                        prismic.isFilled.link(item.link) &&
                        pathname === item.link.url,
                    },
                  )}
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
