"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useSelections } from "./SelectionsProvider";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const { selections } = useSelections();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Properly typed useRef

  const getNotificationCount = () => {
    return (
      selections.hotels.length +
      selections.cottages.length +
      selections.activities.length +
      selections.transportation.length
    );
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Menu items array
  const menuItems = [
    { title: " الرئيسية", href: "/" },
    { title: "الفنادق والشاليهات", href: "/hotels" },
    { title: "الأنشطة", href: "/activities" },
    { title: "خدمات النقل", href: "/transportation" },
  ];

  return (
    <header className="bg-background text-foreground shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-right">
          روسارابيا
        </Link>

        {/* Centered Navigation Menu */}
        <nav
          className={`hidden md:flex md:space-x-6 md:space-x-reverse items-center`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right-Side Icons */}
        <div className="flex items-center space-x-4 space-x-reverse">
          <Link href="/package" className="relative">
            <ShoppingBag className="h-6 w-6" />
            {getNotificationCount() > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full p-2"
              >
                {getNotificationCount()}
              </Badge>
            )}
          </Link>
          <ModeToggle />
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          ref={menuRef}
          className="md:hidden fixed inset-0 bg-background flex flex-col items-center justify-center space-y-6 z-40 transition-transform transform"
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-xl text-foreground hover:text-primary transition-colors"
              onClick={closeMenu} // Close menu after clicking
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
