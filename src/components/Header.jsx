// === [ Header Component ] ===
// Renders the top navigation bar, including the logo, nav links, and responsive menu behavior.
// - Uses scroll-lock to manage background scrolling on mobile menu open/close.
// - Responsive across mobile and desktop breakpoints.

// === [ React + Routing ] ===
import { useLocation } from "react-router-dom";

// === [ Scroll Behavior Control ] ===
import { disablePageScroll, enablePageScroll } from "scroll-lock";

// === [ Assets + Constants + UI Components ] ===
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

// === [ State Management ] ===
import { useState } from "react";

// Main Header component definition
const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  // Toggle function to open/close mobile navigation menu
  // Also enables/disables background page scroll accordingly
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  // Handles link click when navigation is open
  // Closes the menu and re-enables background scroll
  const handleClick = () => {
    if (!openNavigation) return;
 
    enablePageScroll();
    setOpenNavigation(false);
  };
  // === [ Rendered JSX Output ] ===
  // Contains the fixed top bar with logo, navigation menu, and buttons
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="brainwave-logo" width={190} height={40} />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              // Render a single navigation link from the navigation array
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-1 ${
                  item.onlyMobile ? "lg:hidden" : " "
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-2"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          {/* Decorative hamburger menu SVG (background styling) */}
          <HamburgerMenu />
        </nav>

        {/* Secondary action links: New account (desktop), Sign in (all sizes) */}
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="sm:hidden lg:flex" href="#login">
          Sign in
        </Button>

        {/* and the toggle Menu button for small screens */}
        <Button
          className="ml-auto  lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;