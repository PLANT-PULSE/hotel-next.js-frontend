"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Rooms", href: "/rooms" },
  { name: "Events", href: "/events" },
  { name: "Loyalty", href: "/loyalty" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: scrolled ? "rgba(255, 102, 0, 0.95)" : "#ff6600",
        color: "#fff",
        padding: scrolled ? "0.75rem 0" : "1rem 0",
        zIndex: 1000,
        boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.15)" : "none",
        transition: "all 0.3s ease",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <Image
              src="/images/logo.jpeg"
              alt="LuxeStay Hotel Logo"
              width={50}
              height={50}
              style={{
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            />
            <span
              style={{
                fontSize: "1.5rem",
                letterSpacing: "3px",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              LuxeStay
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "2.5rem",
            margin: 0,
            padding: 0,
          }}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                style={{
                  color: pathname === item.href ? "#fff" : "#fff",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  position: "relative",
                  paddingBottom: "5px",
                }}
              >
                {item.name}
                {pathname === item.href && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      background: "#fff",
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/rooms">
            <Button
              style={{
                background: "#fff",
                color: "#ff6600",
                padding: "0.6rem 1.5rem",
                fontSize: "0.9rem",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "1px",
                transition: "all 0.3s ease",
              }}
            >
              Book Now
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "#ff6600",
            padding: "1rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "block",
                padding: "1rem",
                color: pathname === item.href ? "#fff" : "#fff",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
