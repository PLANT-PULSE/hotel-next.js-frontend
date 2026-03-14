"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: "corporate",
    title: "Corporate Retreats",
    subtitle: "Business Events & Conferences",
    description: "Host your next corporate event in our state-of-the-art conference facilities. From board meetings to large-scale conferences, we have the perfect space for your business needs.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    capacity: "Up to 500 guests",
    duration: "Full day or half day",
    features: [
      "State-of-the-art AV equipment",
      "High-speed WiFi",
      "Catering services",
      "Dedicated event coordinator",
      "Multiple room configurations",
      "Parking available"
    ],
    packages: [
      { name: "Essential", price: 1500, features: ["Room rental", "Basic AV", "Coffee breaks"] },
      { name: "Premium", price: 3500, features: ["Full catering", "AV equipment", "Event coordinator", "Parking"] },
      { name: "Executive", price: 6500, features: ["All Premium features", "Private lounge", "Welcome reception", "VIP amenities"] }
    ]
  },
  {
    id: "wedding",
    title: "Wedding Celebrations",
    subtitle: "Make Your Special Day Unforgettable",
    description: "Exchange vows in our elegant ballroom or outdoor garden. Our wedding specialists will ensure every detail is perfect for your celebration of love.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop",
    capacity: "Up to 300 guests",
    duration: "Full day celebration",
    features: [
      "Elegant ballroom & garden venues",
      "Customizable menu",
      "Wedding planning services",
      "Photography packages",
      "Live entertainment",
      "Honeymoon suite"
    ],
    packages: [
      { name: "Silver Wedding", price: 8500, features: ["Basic venue", "Catering for 100", "Wedding coordinator"] },
      { name: "Gold Wedding", price: 15000, features: ["Premium venue", "Full catering", "Photography", "Entertainment"] },
      { name: "Platinum Wedding", price: 28000, features: ["All inclusive", "Premium catering", "Live band", "Honeymoon suite", "Spa package"] }
    ]
  },
  {
    id: "gala",
    title: "Gala Dinners",
    subtitle: "Exclusive Evening Events",
    description: "Host an unforgettable gala dinner in our sophisticated venues. Perfect for charity events, award ceremonies, and milestone celebrations.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=500&fit=crop",
    capacity: "Up to 400 guests",
    duration: "Evening event",
    features: [
      "Elegant table settings",
      "Gourmet dining experience",
      "Professional lighting",
      "Live entertainment",
      "Open bar available",
      "Valet parking"
    ],
    packages: [
      { name: "Classic", price: 4500, features: ["3-course dinner", "Basic decor", "Background music"] },
      { name: "Prestige", price: 8500, features: ["5-course dinner", "Premium decor", "Live band", "Open bar"] },
      { name: "Royal", price: 15000, features: ["7-course tasting menu", "VIP reception", "Full entertainment", "Champagne service"] }
    ]
  },
  {
    id: "social",
    title: "Social Gatherings",
    subtitle: "Birthdays, Anniversaries & More",
    description: "Celebrate life's special moments with friends and family in our intimate event spaces. From birthday parties to anniversary dinners, we make it memorable.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=500&fit=crop",
    capacity: "Up to 100 guests",
    duration: "Flexible timing",
    features: [
      "Intimate spaces available",
      "Customizable menus",
      "Cake service",
      "Decorations",
      "Music & entertainment",
      "Photo opportunities"
    ],
    packages: [
      { name: "Celebration", price: 1200, features: ["Room rental", "Buffet for 30", "Basic decor"] },
      { name: "Festive", price: 2500, features: ["Private dining", "Full catering", "DJ", "Custom cake"] },
      { name: "Grand", price: 4500, features: ["Exclusive venue", "Premium catering", "Live entertainment", "Professional photos"] }
    ]
  }
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
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
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      {/* Hero Section */}
      <section
        style={{
          height: isMobile ? "40vh" : "60vh",
          position: "relative",
          marginTop: 60,
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop"
          alt="Events"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
            padding: isMobile ? "0 1rem" : "0 2rem",
          }}
        >
          <h1 style={{ fontSize: isMobile ? "2rem" : "4rem", marginBottom: "1rem", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            Events & Conferences
          </h1>
          <p style={{ fontSize: isMobile ? "1rem" : "1.5rem", maxWidth: "600px", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
            Create unforgettable memories in our stunning event spaces
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section style={{ padding: isMobile ? "40px 0" : "80px 0", background: "#f8f9fa", flex: 1 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "0 1rem" : "0 2rem" }}>
          
          {/* Event Type Selection */}
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "50px", flexWrap: "wrap" }}>
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  background: selectedEvent.id === event.id ? "#1a3a52" : "#fff",
                  border: "2px solid #1a3a52",
                  borderRadius: "8px",
                  color: selectedEvent.id === event.id ? "#fff" : "#1a3a52",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {event.title}
              </button>
            ))}
          </div>

          {/* Selected Event Details */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              marginBottom: "60px",
              background: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            }}
          >
            {/* Event Image */}
            <div style={{ position: "relative" }}>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "500px" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "2rem",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  color: "#fff",
                }}
              >
                <Badge style={{ background: "#d4af37", color: "#1a3a52", fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {selectedEvent.capacity}
                </Badge>
                <p style={{ fontSize: "1rem", margin: 0 }}>📅 {selectedEvent.duration}</p>
              </div>
            </div>

            {/* Event Info */}
            <div style={{ padding: "3rem" }}>
              <h2 style={{ fontSize: "2.5rem", color: "#1a3a52", marginBottom: "0.5rem" }}>
                {selectedEvent.title}
              </h2>
              <p style={{ fontSize: "1.2rem", color: "#d4af37", marginBottom: "1.5rem", fontWeight: 500 }}>
                {selectedEvent.subtitle}
              </p>
              <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.8, marginBottom: "2rem" }}>
                {selectedEvent.description}
              </p>

              {/* Features */}
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.2rem", color: "#1a3a52", marginBottom: "1rem" }}>
                  Included Features
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  {selectedEvent.features.map((feature, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#555" }}>
                      <span style={{ color: "#d4af37" }}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <Button
                style={{
                  background: "#1a3a52",
                  color: "#fff",
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  border: "none",
                  width: "100%",
                }}
              >
                Request Quote
              </Button>
            </div>
          </div>

          {/* Packages */}
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#1a3a52", marginBottom: "50px" }}>
            Event Packages
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginBottom: "60px",
            }}
          >
            {selectedEvent.packages.map((pkg, idx) => (
              <Card
                key={idx}
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  border: idx === 1 ? "3px solid #d4af37" : "1px solid #e0e0e0",
                  position: "relative",
                  overflow: "visible",
                }}
              >
                {idx === 1 && (
                  <Badge
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#d4af37",
                      color: "#1a3a52",
                      fontWeight: "bold",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle style={{ fontSize: "1.5rem", color: "#1a3a52" }}>{pkg.name}</CardTitle>
                  <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#d4af37" }}>
                    ${pkg.price.toLocaleString()}
                  </div>
                  <p style={{ color: "#666", fontSize: "0.9rem" }}>Starting price</p>
                </CardHeader>
                <CardContent>
                  <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0", textAlign: "left" }}>
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} style={{ padding: "0.5rem 0", borderBottom: "1px solid #f0f0f0", color: "#555" }}>
                        <span style={{ color: "#d4af37", marginRight: "0.5rem" }}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    style={{
                      background: idx === 1 ? "#d4af37" : "#1a3a52",
                      color: idx === 1 ? "#1a3a52" : "#fff",
                      padding: "0.75rem 1.5rem",
                      fontWeight: "bold",
                      border: "none",
                      width: "100%",
                      marginTop: "1rem",
                    }}
                  >
                    Book This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Events Grid */}
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#1a3a52", marginBottom: "50px" }}>
            All Event Types
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {events.map((event) => (
              <Card
                key={event.id}
                style={{ overflow: "hidden", cursor: "pointer", transition: "transform 0.3s ease" }}
              >
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
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
                      background: "rgba(26, 58, 82, 0.3)",
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle style={{ color: "#1a3a52" }}>{event.title}</CardTitle>
                  <p style={{ color: "#d4af37", fontWeight: 500 }}>{event.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1rem" }}>
                    {event.capacity} • {event.duration}
                  </p>
                  <Button 
                    variant="outline" 
                    style={{ borderColor: "#1a3a52", color: "#1a3a52", width: "100%" }}
                    onClick={() => setSelectedEvent(event)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div
            style={{
              marginTop: "80px",
              background: "linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%)",
              padding: "60px",
              borderRadius: "20px",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Ready to Plan Your Event?</h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9 }}>
              Our dedicated events team is here to make your vision a reality
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Button
                style={{
                  background: "#d4af37",
                  color: "#1a3a52",
                  padding: "1rem 2.5rem",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  border: "none",
                }}
              >
                Schedule a Visit
              </Button>
              <Button
                style={{
                  background: "transparent",
                  color: "#fff",
                  padding: "1rem 2.5rem",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  border: "2px solid #fff",
                }}
              >
                Call +1 (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
