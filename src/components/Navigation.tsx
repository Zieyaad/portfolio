"use client";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import * as prismic from "@prismicio/client";
import clsx from "clsx";
import ThemeSwitcher from "@/components/themeSwitcher";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

const NavBar = ({ settings }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center sm:mt-5">
      {/* Mobile Menu */}
      <div
        className={clsx(
          "flex w-full justify-end sm:hidden z-10 ",
          isScrolled
            ? "bg-navbar/50 shadow-lg backdrop-blur backdrop-saturate"
            : "bg-transparent",
        )}
      >
        <div className="sm:hidden hamburger-menu">
          <input
            type="checkbox"
            checked={isMenuOpen}
            onChange={() => setIsMenuOpen(!isMenuOpen)}
          />
          <svg>
            <use xlinkHref="#menu" />
            <use xlinkHref="#menu" />
          </svg>
        </div>
      </div>

      {/* SVG Definitions */}
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 56"
          id="menu"
        >
          <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
        </symbol>
      </svg>

      {/* Desktop Navigation */}
      <nav
        aria-label="Main"
        className={clsx(
          "transition-all ease-in-out duration-1000 px-1 py-2 rounded-full",
          isScrolled
            ? "bg-navbar/50 shadow-lg backdrop-blur backdrop-saturate"
            : "bg-transparent",
          "hidden sm:block",
        )}
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
            <li className="mr-3">
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={clsx(
          "fixed inset-0 bg-navbar/50 backdrop-blur backdrop-saturate transition-all duration-300 lg:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="h-full flex items-center justify-center">
          <ul className="flex flex-col items-center space-y-8">
            {settings.data.navigation.map((item) => (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className={clsx(
                    "text-2xl font-medium text-text hover:text-gray-300 transition-colors duration-200",
                    {
                      "text-primary":
                        prismic.isFilled.link(item.link) &&
                        pathname === item.link.url,
                    },
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
