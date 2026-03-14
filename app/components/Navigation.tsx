"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Loyalty", href: "/loyalty" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: scrolled ? "rgba(26, 58, 82, 0.95)" : "#1a3a52",
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
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=100&fit=crop" 
              alt="LuxeStay Logo"
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #d4af37",
              }}
            />
            <div>
              <div
                style={{
                  fontSize: "1.5rem",
                  letterSpacing: "2px",
                  color: "#d4af37",
                  fontWeight: "bold",
                  lineHeight: 1.2,
                }}
              >
                LuxeStay
              </div>
              <div style={{ fontSize: "0.6rem", color: "#fff", letterSpacing: "3px", textTransform: "uppercase" }}>
                Hotel & Resort
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul
          style={{
            display: isMobile ? "none" : "flex",
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
                  color: pathname === item.href ? "#d4af37" : "#fff",
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
                      background: "#d4af37",
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Theme Toggle - Hidden on mobile */}
          {mounted && !isMobile && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          )}
          {/* Desktop Book Now Button - Hidden on mobile */}
          {!isMobile && (
            <Link href="https://hotel-mgt-sys.vercel.app/index.html" target="_blank" rel="noopener noreferrer">
              <Button
                style={{
                  background: "#d4af37",
                  color: "#1a3a52",
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
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: isMobile ? "block" : "none",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
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
            background: "#1a3a52",
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
                color: pathname === item.href ? "#d4af37" : "#fff",
                textDecoration: "none",
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {item.name}
            </Link>
          ))}
          {/* Mobile Book Now Button */}
          <a
            href="https://hotel-mgt-sys.vercel.app/index.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: "block",
              textAlign: "center",
              padding: "1rem",
              background: "#d4af37",
              color: "#1a3a52",
              fontWeight: "bold",
              marginTop: "1rem",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Book Now
          </a>
          {/* Mobile Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                width: "100%",
                padding: "1rem",
                marginTop: "0.5rem",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {theme === "dark" ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Switch to Light Mode
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  Switch to Dark Mode
                </>
              )}
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
