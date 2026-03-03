"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&h=900&fit=crop",
      title: "Welcome to LuxeStay",
      subtitle: "Experience Luxury Like Never Before",
      cta: "Book Now",
    },
    {
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&h=900&fit=crop",
      title: "World-Class Amenities",
      subtitle: "Discover Our Premium Facilities",
      cta: "Explore",
    },
    {
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1600&h=900&fit=crop",
      title: "Exceptional Dining",
      subtitle: "Award-Winning Restaurants & Bars",
      cta: "Reserve Table",
    },
  ];

  const rooms = [
    {
      name: "Standard Room",
      description: "Comfortable room with modern amenities and city view",
      price: "$150",
      size: "32 m²",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
      link: "/rooms",
    },
    {
      name: "Deluxe Room",
      description: "Spacious room with premium amenities and panoramic views",
      price: "$250",
      size: "45 m²",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop",
      link: "/rooms",
    },
    {
      name: "Executive Suite",
      description: "Luxurious suite with separate living area and butler service",
      price: "$450",
      size: "75 m²",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&h=400&fit=crop",
      link: "/rooms",
    },
  ];

  const amenities = [
    { name: "Infinity Pool", icon: "🏊", description: "Rooftop pool with stunning city views", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop" },
    { name: "Spa & Wellness", icon: "💆", description: "Full-service spa with massages and treatments", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop" },
    { name: "Fitness Center", icon: "🏋️", description: "State-of-the-art gym open 24/7", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop" },
    { name: "Fine Dining", icon: "🍽️", description: "3 award-winning restaurants", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop" },
  ];

  const events = [
    { title: "Corporate Retreats", description: "Fully equipped meeting rooms and event spaces", capacity: "Up to 500 guests", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" },
    { title: "Wedding Packages", description: "Make your special day unforgettable", capacity: "Up to 300 guests", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop" },
    { title: "Gala Dinners", description: "Elegant venues for special occasions", capacity: "Up to 400 guests", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop" },
  ];

  const loyaltyTiers = [
    { name: "Silver", benefits: ["5% discount", "Late checkout", "Welcome drink"], price: "Free", color: "#C0C0C0" },
    { name: "Gold", benefits: ["10% discount", "Room upgrades", "Free breakfast", "Early check-in"], price: "$99/year", color: "#FFD700" },
    { name: "Platinum", benefits: ["15% discount", "Suite upgrades", "All meals included", "Spa credits"], price: "$299/year", color: "#E5E4E2" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      {/* Hero Section */}
      <section
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
              transition: "opacity 1s ease-in-out",
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
              <h2 
                style={{ 
                  fontSize: "4rem", 
                  marginBottom: "1rem", 
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease 0.3s",
                }}
              >
                {slide.title}
              </h2>
              <p 
                style={{ 
                  fontSize: "1.8rem", 
                  marginBottom: "2rem", 
                  textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease 0.5s",
                }}
              >
                {slide.subtitle}
              </p>
              <Button
                style={{
                  background: "#d4af37",
                  color: "#1a3a52",
                  padding: "1rem 2.5rem",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer",
                  opacity: index === currentSlide ? 1 : 0,
                  transform: index === currentSlide ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease 0.7s",
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
            left: 30,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.2)",
            border: "none",
            color: "#fff",
            fontSize: "2rem",
            padding: "1rem",
            cursor: "pointer",
            borderRadius: "50%",
            transition: "all 0.3s ease",
            zIndex: 10,
          }}
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: 30,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.2)",
            border: "none",
            color: "#fff",
            fontSize: "2rem",
            padding: "1rem",
            cursor: "pointer",
            borderRadius: "50%",
            transition: "all 0.3s ease",
            zIndex: 10,
          }}
        >
          ❯
        </button>

        {/* Indicators */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "15px",
            zIndex: 10,
          }}
        >
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: index === currentSlide ? "40px" : "12px",
                height: "12px",
                borderRadius: "6px",
                background: index === currentSlide ? "#d4af37" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section style={{ padding: "80px 0", background: "#f5f5f5" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "50px", color: "#1a3a52" }}>
            Find Your Perfect Stay
          </h2>
          <Card style={{ maxWidth: 900, margin: "0 auto", padding: "2rem", borderRadius: "16px" }}>
            <form style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", alignItems: "end" }}>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500, color: "#1a3a52" }}>
                  Check-in Date
                </label>
                <input
                  type="date"
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500, color: "#1a3a52" }}>
                  Check-out Date
                </label>
                <input
                  type="date"
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500, color: "#1a3a52" }}>
                  Guests
                </label>
                <select
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    background: "#fff",
                  }}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
              <Button
                type="submit"
                style={{
                  background: "#1a3a52",
                  color: "#fff",
                  padding: "0.75rem",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  border: "none",
                  height: "46px",
                }}
              >
                Check Availability
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" style={{ padding: "100px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.8rem", marginBottom: "1rem", color: "#1a3a52" }}>
              Our Rooms & Suites
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
              Discover our collection of beautifully appointed rooms and suites, designed for your ultimate comfort
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {rooms.map((room, index) => (
              <Card 
                key={index} 
                style={{ 
                  overflow: "hidden", 
                  borderRadius: "16px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div style={{ position: "relative", height: 250, overflow: "hidden" }}>
                  <img
                    src={room.image}
                    alt={room.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  />
                  <Badge
                    style={{
                      position: "absolute",
                      top: 15,
                      right: 15,
                      background: "#d4af37",
                      color: "#1a3a52",
                      fontWeight: "bold",
                    }}
                  >
                    {room.size}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle style={{ color: "#1a3a52", fontSize: "1.4rem" }}>{room.name}</CardTitle>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "1.4rem", color: "#d4af37", fontWeight: "bold" }}>
                      {room.price}<span style={{ fontSize: "0.9rem", color: "#666" }}>/night</span>
                    </span>
                    <Link href={room.link}>
                      <Button variant="outline" style={{ borderColor: "#1a3a52", color: "#1a3a52" }}>
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/rooms">
              <Button style={{ background: "#1a3a52", color: "#fff", padding: "1rem 3rem", fontSize: "1rem" }}>
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" style={{ padding: "100px 0", background: "#f8f9fa" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.8rem", marginBottom: "1rem", color: "#1a3a52" }}>
              Premium Amenities
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
              Enjoy world-class facilities designed for your relaxation and rejuvenation
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {amenities.map((amenity, index) => (
              <Card 
                key={index} 
                style={{ 
                  textAlign: "center", 
                  padding: "0",
                  overflow: "hidden",
                  borderRadius: "16px",
                }}
              >
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(26, 58, 82, 0.6)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{amenity.icon}</span>
                    <span style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "bold" }}>{amenity.name}</span>
                  </div>
                </div>
                <CardContent style={{ padding: "1.5rem" }}>
                  <p style={{ color: "#666", margin: 0 }}>{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" style={{ padding: "100px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.8rem", marginBottom: "1rem", color: "#1a3a52" }}>
              Events & Celebrations
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
              Create unforgettable moments in our stunning event spaces
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {events.map((event, index) => (
              <Card 
                key={index} 
                style={{ 
                  overflow: "hidden", 
                  borderRadius: "16px",
                }}
              >
                <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(26, 58, 82, 0.4)",
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle style={{ color: "#1a3a52" }}>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" style={{ background: "#d4af37", color: "#1a3a52" }}>
                    {event.capacity}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/events">
              <Button style={{ background: "#1a3a52", color: "#fff", padding: "1rem 3rem", fontSize: "1rem" }}>
                Plan Your Event
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Loyalty Section */}
      <section id="loyalty" style={{ padding: "100px 0", background: "linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%)", color: "#fff" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.8rem", marginBottom: "1rem", color: "#d4af37" }}>
              LuxeStay Rewards
            </h2>
            <p style={{ fontSize: "1.2rem", opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
              Join our loyalty program and unlock exclusive benefits with every stay
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {loyaltyTiers.map((tier, index) => (
              <Card
                key={index}
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  borderRadius: "16px",
                  background: index === 1 ? "rgba(212, 175, 55, 0.15)" : "rgba(255,255,255,0.1)",
                  border: index === 1 ? "2px solid #d4af37" : "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <CardHeader>
                  <CardTitle style={{ fontSize: "1.8rem", color: "#d4af37" }}>{tier.name}</CardTitle>
                  <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#fff" }}>{tier.price}</p>
                </CardHeader>
                <CardContent>
                  <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                        <span style={{ color: "#d4af37", marginRight: "0.5rem" }}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/loyalty">
              <Button style={{ background: "#d4af37", color: "#1a3a52", padding: "1rem 3rem", fontSize: "1rem", fontWeight: "bold" }}>
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "100px 0", background: "#f8f9fa" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.8rem", marginBottom: "1rem", color: "#1a3a52" }}>
              Contact Us
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
              We're here to help - reach out to us anytime
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {[
              { icon: "📍", title: "Address", content: "123 Luxury Avenue, Beverly Hills, CA 90210" },
              { icon: "📞", title: "Phone", content: "+1 (555) 123-4567" },
              { icon: "✉️", title: "Email", content: "reservations@luxestay.com" },
              { icon: "🕐", title: "Front Desk", content: "Open 24 hours" },
            ].map((item, index) => (
              <Card key={index} style={{ textAlign: "center", padding: "2rem", borderRadius: "16px" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{ color: "#1a3a52", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "#666", margin: 0 }}>{item.content}</p>
              </Card>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/contact">
              <Button style={{ background: "#1a3a52", color: "#fff", padding: "1rem 3rem", fontSize: "1rem" }}>
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
