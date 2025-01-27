"use client";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

const NavBar = ({ settings }: NavbarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  });
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleTabClick = (path: string | null | undefined) => {
    if (path) {
      router.push(path);
    }
  };

  const updateIndicatorPosition = (path: string) => {
    const menuElement = menuRef.current;
    const activeItem = menuElement?.querySelector(
      `[data-path="${path}"]`,
    ) as HTMLElement;

    if (activeItem) {
      setIndicatorStyle({
        width: activeItem.offsetWidth,
        left: activeItem.offsetLeft,
      });
      // After the initial position is set, allow transitions
      if (isInitialLoad) {
        setTimeout(() => setIsInitialLoad(false), 0);
      }
    }
  };

  useEffect(() => {
    // Update indicator position when pathname changes
    updateIndicatorPosition(pathname);
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); // Change state after scrolling 20px
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
          isScrolled ? "bg-[#0f172a]/50 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="relative overflow-hidden" ref={menuRef}>
          <ul className="flex">
            {/* Active indicator pill */}
            <div
              className={`absolute h-full rounded-full bg-white/10 ${
                isInitialLoad ? "" : "transition-all duration-100 ease-in-out"
              }`}
              style={{
                width: indicatorStyle.width,
                left: indicatorStyle.left,
              }}
            />
            {settings.data.navigation.map((item) => (
              <li key={item.label} data-path={item.slug}>
                <PrismicNextLink
                  field={item.link}
                  onClick={() => handleTabClick(item.slug)}
                  className={`flex px-2 mx-2 py-1 text-[16px] font-400 transition-colors duration-200 tracking-wide
                    ${pathname === item.slug ? "text-white" : "text-white/60 hover:text-white/80"}
                  `}
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
