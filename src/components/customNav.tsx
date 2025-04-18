"use client"
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import { ModeToggle } from "./theme/ThemeToggle";

export const Slogo = () => {
  return (
    <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
      <path
        d="M70 20C70 10 60 10 50 10C40 10 30 10 30 20C30 30 40 30 50 30C60 30 70 30 70 40C70 50 60 50 50 50C40 50 30 50 30 60C30 70 40 70 50 70C60 70 70 70 70 80C70 90 60 90 50 90C40 90 30 90 30 80"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function CustomNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Qr payment", href: "#qrPayment" },
    { name: "Join us", href: "#joinUs" },
  ];


  return (
    <header
      className={`sticky top-5 z-15 flex justify-center mb-5 transition-all duration-300 `}
    >
      <Navbar
        className="w-full max-w-6xl rounded-lg px-4 z-15 py-3 border bg-transparent"
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Logo & Menu Toggle */}
        <NavbarContent className="w-full justify-center sm:justify-between">
          <div className="flex items-center gap-4">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="hidden"
            />
            <NavbarBrand className="flex items-center gap-2">
              <Slogo />
              <span className="font-bold text-lg">Stayapay</span>
            </NavbarBrand>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-6 items-center">
            {menuItems.map((item, index) => (
              <NavbarItem key={item.href}>
                <Link
                  href={item.href}
                  color={
                    index === 2
                      ? "primary"
                      : index === menuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  className="text-base"
                >
                  {item.name}
                </Link>
              </NavbarItem>
            ))}
            <ModeToggle />
          </div>
        </NavbarContent>
      </Navbar>
    </header>
  );
}
