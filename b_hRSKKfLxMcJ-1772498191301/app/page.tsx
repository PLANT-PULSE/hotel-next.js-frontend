"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=600&fit=crop",
      title: "Welcome to LuxeStay",
      subtitle: "Experience Luxury Like Never Before",
      cta: "Book Now",
    },
    {
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop",
      title: "World-Class Amenities",
      subtitle: "Discover Our Premium Facilities",
      cta: "Explore",
    },
    {
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=600&fit=crop",
      title: "Exceptional Dining",
      subtitle: "Award-Winning Restaurants & Bars",
      cta: "Reserve Table",
    },
  ];

  const rooms = [
    {
      name: "Standard Room",
      description: "Comfortable room with modern amenities and city view",
      price: "From $150 per night",
      size: "32 m²",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1540932239986-310128078ceb?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1578646970236-584b5603d82d?w=500&h=300&fit=crop",
      ],
      features: ["King Bed", "City View", "Free WiFi", "TV"],
    },
    {
      name: "Deluxe Room",
      description: "Spacious room with premium amenities and panoramic views",
      price: "From $250 per night",
      size: "45 m²",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&h=300&fit=crop",
      ],
      features: ["King Bed", "Panoramic View", "Free WiFi", "Mini Bar", "Spa Bath"],
    },
    {
      name: "Executive Suite",
      description: "Luxurious suite with separate living area and butler service",
      price: "From $450 per night",
      size: "75 m²",
      images: [
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&h=300&fit=crop",
      ],
      features: ["King Bed", "Living Room", "Butler Service", "Mini Bar", "Spa Bath", "Balcony"],
    },
    {
      name: "Penthouse Suite",
      description: "Ultimate luxury with private terrace and personal chef",
      price: "From $1000 per night",
      size: "150 m²",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
      ],
      features: ["King Bed", "Private Terrace", "Personal Chef", "Jacuzzi", "Home Theater"],
    },
  ];

  const amenities = [
    { name: "Infinity Pool", icon: "🏊", description: "Rooftop pool with stunning city views" },
    { name: "Spa & Wellness", icon: "💆", description: "Full-service spa with massages and treatments" },
    { name: "Fitness Center", icon: "🏋️", description: "State-of-the-art gym open 24/7" },
    { name: "Fine Dining", icon: "🍽️", description: "3 award-winning restaurants" },
    { name: "Concierge", icon: "🛎️", description: "24/7 concierge service" },
    { name: "Room Service", icon: "🍕", description: "In-room dining available" },
  ];

  const events = [
    { title: "Corporate Retreats", description: "Fully equipped meeting rooms and event spaces", capacity: "Up to 500 guests" },
    { title: "Wedding Packages", description: "Make your special day unforgettable", capacity: "Up to 300 guests" },
    { title: "Gala Dinners", description: "Elegant venues for special occasions", capacity: "Up to 400 guests" },
  ];

  const loyaltyTiers = [
    { name: "Silver", benefits: ["5% discount", "Late checkout", "Welcome drink"], price: "Free" },
    { name: "Gold", benefits: ["10% discount", "Room upgrades", "Free breakfast", "Early check-in"], price: "$99/year" },
    { name: "Platinum", benefits: ["15% discount", "Suite upgrades", "All meals included", "Spa credits", "Airport transfer"], price: "$299/year" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: "#1a3a52",
          color: "#fff",
          padding: "1rem 0",
          zIndex: 1000,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.8rem", letterSpacing: "2px", color: "#d4af37", fontWeight: "bold" }}>
            LuxeStay
          </div>
          <ul style={{ display: "flex", listStyle: "none", gap: "2rem", margin: 0, padding: 0 }}>
            {["Home", "Rooms", "Amenities", "Events", "Loyalty", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          marginTop: 60,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: index === currentSlide ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <h2 style={{ fontSize: "3.5rem", marginBottom: "1rem", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                {slide.title}
              </h2>
              <p style={{ fontSize: "1.5rem", marginBottom: "2rem", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
                {slide.subtitle}
              </p>
              <Button
                style={{
                  background: "#d4af37",
                  color: "#1a3a52",
                  padding: "1rem 2rem",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: 20,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.3)",
            border: "none",
            color: "#fff",
            fontSize: "2rem",
            padding: "1rem",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: 20,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.3)",
            border: "none",
            color: "#fff",
            fontSize: "2rem",
            padding: "1rem",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          ❯
        </button>

        {/* Indicators */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
          }}
        >
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: index === currentSlide ? "#d4af37" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section" style={{ padding: "80px 0", background: "#f5f5f5" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", color: "#1a3a52" }}>
            Find Your Perfect Stay
          </h2>
          <Card style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
            <CardHeader>
              <CardTitle>Book Your Stay</CardTitle>
              <CardDescription>Select your dates and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <form style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
                    Guests
                  </label>
                  <select
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: "1rem",
                    }}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
                    Room Type
                  </label>
                  <select
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      fontSize: "1rem",
                    }}
                  >
                    <option value="standard">Standard Room - $150/night</option>
                    <option value="deluxe">Deluxe Room - $250/night</option>
                    <option value="suite">Suite - $450/night</option>
                    <option value="penthouse">Penthouse - $1000/night</option>
                  </select>
                </div>
                <div style={{ gridColumn: "span 2", textAlign: "center", marginTop: "1rem" }}>
                  <Button
                    type="submit"
                    style={{
                      background: "#1a3a52",
                      color: "#fff",
                      padding: "1rem 3rem",
                      fontSize: "1.1rem",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Continue Booking
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", color: "#1a3a52" }}>
            Our Rooms & Suites
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {rooms.map((room, index) => (
              <Card key={index} style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <Badge
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      background: "#d4af37",
                      color: "#1a3a52",
                    }}
                  >
                    {room.size}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>{room.name}</CardTitle>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p style={{ fontSize: "1.25rem", color: "#d4af37", fontWeight: "bold", marginBottom: "1rem" }}>
                    {room.price}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {room.features.map((feature, i) => (
                      <Badge key={i} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" style={{ padding: "80px 0", background: "#f5f5f5" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", color: "#1a3a52" }}>
            Premium Amenities
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {amenities.map((amenity, index) => (
              <Card key={index} style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{amenity.icon}</div>
                <CardHeader>
                  <CardTitle>{amenity.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "#666" }}>{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" style={{ padding: "80px 0", background: "#fff" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", color: "#1a3a52" }}>
            Events & Celebrations
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {events.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">Capacity: {event.capacity}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Section */}
      <section id="loyalty" style={{ padding: "80px 0", background: "#f5f5f5" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "20px", color: "#1a3a52" }}>
            Loyalty Program
          </h2>
          <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#666", marginBottom: "50px" }}>
            Join our loyalty program and enjoy exclusive benefits
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {loyaltyTiers.map((tier, index) => (
              <Card
                key={index}
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  border: index === 1 ? "2px solid #d4af37" : "1px solid #ddd",
                }}
              >
                <CardHeader>
                  <CardTitle style={{ fontSize: "1.8rem", color: "#1a3a52" }}>{tier.name}</CardTitle>
                  <p style={{ fontSize: "2rem", color: "#d4af37", fontWeight: "bold" }}>{tier.price}</p>
                </CardHeader>
                <CardContent>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee" }}>
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "80px 0", background: "#1a3a52", color: "#fff" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", color: "#d4af37" }}>
            Contact Us
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem", textAlign: "center" }}>
            <div>
              <h3 style={{ marginBottom: "1rem", color: "#d4af37" }}>Address</h3>
              <p>123 Luxury Avenue<br />Premium District<br />New York, NY 10001</p>
            </div>
            <div>
              <h3 style={{ marginBottom: "1rem", color: "#d4af37" }}>Phone</h3>
              <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
            </div>
            <div>
              <h3 style={{ marginBottom: "1rem", color: "#d4af37" }}>Email</h3>
              <p>reservations@luxestay.com<br />info@luxestay.com</p>
            </div>
            <div>
              <h3 style={{ marginBottom: "1rem", color: "#d4af37" }}>Check-in / Check-out</h3>
              <p>Check-in: 3:00 PM<br />Check-out: 11:00 AM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0f2537", color: "#fff", padding: "2rem 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <p>© 2024 LuxeStay Hotel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
