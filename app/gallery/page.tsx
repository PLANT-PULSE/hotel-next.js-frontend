"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const galleryImages = [
  { src: "/images/download (1).jpeg", alt: "Luxury Hotel Exterior", category: "Exterior" },
  { src: "/images/download (2).jpeg", alt: "Hotel Lobby", category: "Interior" },
  { src: "/images/download (3).jpeg", alt: "Fine Dining Restaurant", category: "Dining" },
  { src: "/images/download (4).jpeg", alt: "Standard Room", category: "Rooms" },
  { src: "/images/download (5).jpeg", alt: "Deluxe Room", category: "Rooms" },
  { src: "/images/download (6).jpeg", alt: "Executive Suite", category: "Rooms" },
  { src: "/images/download (7).jpeg", alt: "Swimming Pool", category: "Amenities" },
  { src: "/images/download (8).jpeg", alt: "Spa & Wellness", category: "Amenities" },
  { src: "/images/download (9).jpeg", alt: "Fitness Center", category: "Amenities" },
  { src: "/images/download (10).jpeg", alt: "Rooftop Bar", category: "Dining" },
  { src: "/images/download (11).jpeg", alt: "Conference Room", category: "Events" },
  { src: "/images/download (12).jpeg", alt: "Wedding Venue", category: "Events" },
  { src: "/images/download (13).jpeg", alt: "Gala Dinner", category: "Events" },
  { src: "/images/download (14).jpeg", alt: "Penthouse Suite", category: "Rooms" },
  { src: "/images/download (15).jpeg", alt: "Luxury Bathroom", category: "Interior" },
  { src: "/images/download (16).jpeg", alt: "Ocean View Room", category: "Rooms" },
  { src: "/images/download (17).jpeg", alt: "Room Balcony", category: "Rooms" },
  { src: "/images/download (18).jpeg", alt: "Hotel Corridor", category: "Interior" },
  { src: "/images/download (19).jpeg", alt: "Presidential Suite", category: "Rooms" },
  { src: "/images/download (20).jpeg", alt: "Private Terrace", category: "Amenities" },
  { src: "/images/download (21).jpeg", alt: "Garden View", category: "Exterior" },
  { src: "/images/download (22).jpeg", alt: "Sunset View", category: "Exterior" },
  { src: "/images/download (23).jpeg", alt: "Night View", category: "Exterior" },
  { src: "/images/images (1).jpeg", alt: "Room Interior", category: "Rooms" },
  { src: "/images/images (2).jpeg", alt: "Bedroom Design", category: "Interior" },
  { src: "/images/images (3).jpeg", alt: "Living Area", category: "Interior" },
  { src: "/images/images (4).jpeg", alt: "Dining Area", category: "Interior" },
  { src: "/images/images (5).jpeg", alt: "Workspace", category: "Interior" },
  { src: "/images/images.jpeg", alt: "Hotel Exterior Night", category: "Exterior" },
  { src: "/images/logo.jpeg", alt: "LuxeStay Logo", category: "Brand" },
  { src: "/images/flyer.jpeg", alt: "Hotel Flyer", category: "Brand" },
  { src: "/images/hood-flyet.jpeg", alt: "Special Offer", category: "Brand" },
];

const categories = ["All", "Exterior", "Interior", "Dining", "Rooms", "Amenities", "Events", "Brand"];

// Orange and White theme colors
const colors = {
  primary: "#ff6600",
  primaryDark: "#e55c00",
  primaryLight: "#ff8533",
  white: "#ffffff",
  black: "#000000",
  lightBg: "#f5f5f5",
  darkBg: "#1a1a1a",
};

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column", background: colors.white }}>
      <Navigation />

      {/* Hero Section */}
      <section
        style={{
          height: "50vh",
          position: "relative",
          marginTop: 60,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(135deg, ${colors.primary} 0%, #cc5200 100%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "url('/images/download (1).jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.8))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: colors.primary,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              textAlign: "center",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: colors.primary,
              textShadow: "2px 2px 4px rgba(255,255,255,0.8)",
              animation: "fadeInDown 1s ease-out",
            }}
          >
            Our Gallery
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "600px",
              textAlign: "center",
              color: "#333",
              animation: "fadeInUp 1s ease-out 0.3s both",
              fontWeight: 500,
            }}
          >
            Experience the elegance of LuxeStay through our curated collection of stunning visuals
          </p>
        </div>
        
        {/* Animated decorative elements */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
          background: "linear-gradient(to top, #fff, transparent)",
        }} />
      </section>

      {/* Category Filter */}
      <section
        style={{
          padding: "2rem 0",
          background: colors.white,
          position: "sticky",
          top: 70,
          zIndex: 100,
          borderBottom: `3px solid ${colors.primary}`,
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "0.75rem", 
            justifyContent: "center",
            animation: loaded ? "fadeIn 0.6s ease-out" : "none",
          }}>
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: "0.75rem 1.5rem",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  background: selectedCategory === category 
                    ? colors.primary 
                    : "transparent",
                  color: selectedCategory === category ? colors.white : colors.primary,
                  border: `2px solid ${colors.primary}`,
                  borderRadius: "50px",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: loaded ? `translateY(0)` : `translateY(20px)`,
                  animation: loaded ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : "none",
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.background = `${colors.primary}15`;
                    e.currentTarget.style.transform = "scale(1.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ 
        flex: 1, 
        padding: "3rem 0",
        background: colors.lightBg,
      }}>
        <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                onClick={() => openLightbox(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transform: loaded ? "translateY(0)" : "translateY(30px)",
                  animation: loaded ? `galleryFadeIn 0.6s ease-out ${index * 0.05}s both` : "none",
                  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease",
                  boxShadow: hoveredIndex === index 
                    ? `0 20px 60px ${colors.primary}40` 
                    : "0 4px 20px rgba(0,0,0,0.1)",
                  border: hoveredIndex === index ? `3px solid ${colors.primary}` : "3px solid transparent",
                }}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: hoveredIndex === index ? "scale(1.15)" : "scale(1)",
                  }}
                />
                
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: hoveredIndex === index 
                      ? "linear-gradient(to top, rgba(255,102,0,0.85) 0%, rgba(255,102,0,0.2) 50%, transparent 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                    transition: "all 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "1.5rem",
                  }}
                >
                  {/* Category Badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      padding: "0.4rem 0.8rem",
                      background: colors.white,
                      color: colors.primary,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      borderRadius: "20px",
                      transform: hoveredIndex === index ? "translateY(0)" : "translateY(-10px)",
                      opacity: hoveredIndex === index ? 1 : 0,
                      transition: "all 0.3s ease 0.1s",
                    }}
                  >
                    {image.category}
                  </span>
                  
                  {/* Image Title */}
                  <h3
                    style={{
                      color: colors.white,
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      margin: 0,
                      transform: hoveredIndex === index ? "translateY(0)" : "translateY(20px)",
                      opacity: hoveredIndex === index ? 1 : 0.8,
                      transition: "all 0.3s ease 0.1s",
                    }}
                  >
                    {image.alt}
                  </h3>
                  
                  {/* View Button */}
                  <div
                    style={{
                      marginTop: "0.75rem",
                      transform: hoveredIndex === index ? "translateY(0)" : "translateY(20px)",
                      opacity: hoveredIndex === index ? 1 : 0,
                      transition: "all 0.3s ease 0.2s",
                    }}
                  >
                    <span
                      style={{
                        color: colors.white,
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      View Image
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
                
                {/* Corner decorations */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "40px",
                    height: "40px",
                    borderTop: hoveredIndex === index ? `3px solid ${colors.white}` : "3px solid transparent",
                    borderLeft: hoveredIndex === index ? `3px solid ${colors.white}` : "3px solid transparent",
                    borderRadius: "16px 0 0 0",
                    transition: "all 0.4s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "40px",
                    height: "40px",
                    borderBottom: hoveredIndex === index ? `3px solid ${colors.white}` : "3px solid transparent",
                    borderRight: hoveredIndex === index ? `3px solid ${colors.white}` : "3px solid transparent",
                    borderRadius: "0 0 16px 0",
                    transition: "all 0.4s ease",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(255, 255, 255, 0.98)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeIn 0.3s ease-out",
          }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              background: colors.primary,
              border: "none",
              color: colors.white,
              fontSize: "2rem",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              cursor: "pointer",
              zIndex: 10000,
              transition: "transform 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(90deg)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0)"}
          >
            ✕
          </button>
          
          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            style={{
              position: "absolute",
              left: "2rem",
              background: colors.white,
              border: `3px solid ${colors.primary}`,
              color: colors.primary,
              fontSize: "1.5rem",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = colors.primary;
              e.currentTarget.style.color = colors.white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = colors.white;
              e.currentTarget.style.color = colors.primary;
            }}
          >
            ❮
          </button>
          
          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            style={{
              position: "absolute",
              right: "2rem",
              background: colors.white,
              border: `3px solid ${colors.primary}`,
              color: colors.primary,
              fontSize: "1.5rem",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = colors.primary;
              e.currentTarget.style.color = colors.white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = colors.white;
              e.currentTarget.style.color = colors.primary;
            }}
          >
            ❯
          </button>
          
          {/* Image container */}
          <div
            style={{
              maxWidth: "90%",
              maxHeight: "85%",
              position: "relative",
              animation: "scaleIn 0.4s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: `0 20px 60px ${colors.primary}30`,
                border: `4px solid ${colors.primary}`,
              }}
            />
            <div
              style={{
                textAlign: "center",
                marginTop: "1.5rem",
                color: colors.primary,
              }}
            >
              <h3 style={{ 
                fontSize: "1.5rem", 
                fontWeight: 600,
                color: colors.primary,
                marginBottom: "0.5rem",
              }}>
                {filteredImages[selectedImage].alt}
              </h3>
              <span
                style={{
                  padding: "0.4rem 1rem",
                  background: colors.primary,
                  color: colors.white,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  borderRadius: "20px",
                }}
              >
                {filteredImages[selectedImage].category}
              </span>
              <p style={{ 
                marginTop: "1rem", 
                color: "#666",
                fontSize: "0.9rem",
              }}>
                {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section
        style={{
          padding: "4rem 2rem",
          background: `linear-gradient(135deg, ${colors.primary} 0%, #cc5200 100%)`,
          borderTop: `1px solid ${colors.primary}`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>
          {[
            { number: "32+", label: "Stunning Images" },
            { number: "7", label: "Categories" },
            { number: "100%", label: "Premium Quality" },
            { number: "24/7", label: "Viewing Access" },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                animation: loaded ? `fadeInUp 0.6s ease-out ${index * 0.15}s both` : "none",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: colors.white,
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.9)",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginTop: "0.5rem",
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Global Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes galleryFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f5f5f5;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #ff6600;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #e55c00;
        }
      `}</style>
    </div>
  );
}
