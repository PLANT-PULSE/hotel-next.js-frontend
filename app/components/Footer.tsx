"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      style={{
        background: "#1a3a52",
        color: "#fff",
        padding: isMobile ? "40px 0 20px" : "60px 0 30px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: isMobile ? "0 1rem" : "0 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            marginBottom: "40px",
          }}
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                fontSize: "1.8rem",
                letterSpacing: "3px",
                color: "#d4af37",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              ✦ LuxeStay
            </div>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
              Experience luxury like never before. Your comfort is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "1.1rem",
                marginBottom: "1.5rem",
                color: "#d4af37",
                letterSpacing: "1px",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { name: "Home", href: "/" },
                { name: "Our Rooms", href: "/rooms" },
                { name: "Events", href: "/events" },
                { name: "Loyalty Program", href: "/loyalty" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name} style={{ marginBottom: "0.75rem" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                fontSize: "1.1rem",
                marginBottom: "1.5rem",
                color: "#d4af37",
                letterSpacing: "1px",
              }}
            >
              Contact Us
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 2,
              }}
            >
              <li>📍 123 Luxury Avenue, Beverly Hills, CA 90210</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ reservations@luxestay.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4
              style={{
                fontSize: "1.1rem",
                marginBottom: "1.5rem",
                color: "#d4af37",
                letterSpacing: "1px",
              }}
            >
              Follow Us
            </h4>
            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                {
                  name: "Instagram",
                  icon: "📷",
                  url: "https://instagram.com/luxehotels",
                },
                {
                  name: "Facebook",
                  icon: "📘",
                  url: "https://facebook.com/LuxeHotels",
                },
                {
                  name: "Twitter",
                  icon: "🐦",
                  url: "https://twitter.com/luxehotels",
                },
                {
                  name: "YouTube",
                  icon: "📺",
                  url: "https://youtube.com/@luxehotels",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    transition: "all 0.3s ease",
                  }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "20px",
            textAlign: "center",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.9rem",
          }}
        >
          © {currentYear} LuxeStay Hotel. All rights reserved. | Designed with ✦
        </div>
      </div>
    </footer>
  );
}
