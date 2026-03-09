"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const rooms = [
  {
    id: "standard",
    name: "Standard Room",
    description: "Comfortable room with modern amenities and city view, perfect for business travelers and couples.",
    price: 150,
    size: "32 m²",
    maxGuests: 2,
    bedType: "King Bed",
    images: [
      "/images/download (14).jpeg",
      "/images/download (15).jpeg",
      "/images/images (1).jpeg",
      "/images/images (2).jpeg",
    ],
    features: ["Free WiFi", "Smart TV", "Mini Bar", "Safe", "Air Conditioning", "Room Service"],
    amenities: ["City View", "Work Desk", "Coffee Maker", "Hairdryer", "Iron"],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    description: "Spacious room with premium amenities, panoramic views, and elegant furnishings for the discerning guest.",
    price: 250,
    size: "45 m²",
    maxGuests: 3,
    bedType: "King Bed",
    images: [
      "/images/download (16).jpeg",
      "/images/download (17).jpeg",
      "/images/images (3).jpeg",
      "/images/images (4).jpeg",
    ],
    features: ["Free WiFi", "Smart TV", "Mini Bar", "Safe", "Air Conditioning", "Room Service", "Spa Bath", "Balcony"],
    amenities: ["Panoramic View", "Work Desk", "Nespresso Machine", "Premium Toiletries", "Bathrobes", "Slippers"],
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    description: "Luxurious suite with separate living area, butler service, and exclusive access to the executive lounge.",
    price: 450,
    size: "75 m²",
    maxGuests: 4,
    bedType: "King Bed",
    images: [
      "/images/download (18).jpeg",
      "/images/download (19).jpeg",
      "/images/images (5).jpeg",
      "/images/images.jpeg",
    ],
    features: ["Butler Service", "Executive Lounge", "Free WiFi", "Smart TV", "Mini Bar", "Spa Bath", "Balcony", "Living Room"],
    amenities: ["Panoramic View", "Work Desk", "Nespresso Machine", "Premium Toiletries", "Bathrobes", "Slippers", "Welcome Amenities"],
  },
  {
    id: "penthouse",
    name: "Penthouse Suite",
    description: "The ultimate luxury experience with private terrace, personal chef, and home theater. A destination in itself.",
    price: 1000,
    size: "150 m²",
    maxGuests: 6,
    bedType: "King Bed",
    images: [
      "/images/download (20).jpeg",
      "/images/download (21).jpeg",
      "/images/download (22).jpeg",
      "/images/download (23).jpeg",
    ],
    features: ["Personal Chef", "Private Terrace", "Home Theater", "Jacuzzi", "Butler Service", "Private Pool", "Wine Cellar", "Piano"],
    amenities: ["360° View", "Dining Room", "Full Kitchen", "Premium Toiletries", "Spa Credits", "Airport Transfer", "24/7 Concierge"],
  },
];

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % selectedRoom.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? selectedRoom.images.length - 1 : prev - 1
    );
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navigation />

      {/* Hero Section */}
      <section
        style={{
          height: "60vh",
          position: "relative",
          marginTop: 60,
          overflow: "hidden",
        }}
      >
        <img
          src="/images/download (1).jpeg"
          alt="Luxury Rooms"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, rgba(255,102,0,0.4), rgba(255,102,0,0.7))",            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "4rem", marginBottom: "1rem", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            Luxurious Rooms & Suites
          </h1>
          <p style={{ fontSize: "1.5rem", maxWidth: "600px", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
            Experience unparalleled comfort in our beautifully appointed accommodations
          </p>
        </div>
      </section>

      {/* Room Selection */}
      <section style={{ padding: "80px 0", background: "#f8f9fa", flex: 1 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem" }}>
          
          {/* Room Tabs */}
          <Tabs defaultValue={rooms[0].id} style={{ marginBottom: "60px" }}>
            <TabsList style={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: "1rem", 
              background: "transparent",
              marginBottom: "2rem"
            }}>
              {rooms.map((room) => (
                <TabsTrigger
                  key={room.id}
                  value={room.id}
                  onClick={() => {
                    setSelectedRoom(room);
                    setActiveImageIndex(0);
                  }}
                  style={{
                    padding: "1rem 2rem",
                    fontSize: "1rem",
                    fontWeight: 600,
                    background: "#fff",
                    border: "2px solid #ff6600",
                    borderRadius: "8px",
                    color: "#ff6600",
                  }}
                >
                  {room.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {rooms.map((room) => (
              <TabsContent key={room.id} value={room.id}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.5fr 1fr",
                    gap: "3rem",
                    alignItems: "start",
                  }}
                >
                  {/* Image Gallery */}
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "16px",
                        overflow: "hidden",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                      }}
                    >
                      <img
                        src={room.images[activeImageIndex]}
                        alt={`${room.name} - Image ${activeImageIndex + 1}`}
                        style={{ width: "100%", height: "450px", objectFit: "cover" }}
                      />
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        style={{
                          position: "absolute",
                          left: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "rgba(255,255,255,0.9)",
                          border: "none",
                          borderRadius: "50%",
                          width: "50px",
                          height: "50px",
                          cursor: "pointer",
                          fontSize: "1.5rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#1a3a52",
                          transition: "all 0.3s ease",
                        }}
                      >
                        ❮
                      </button>
                      <button
                        onClick={nextImage}
                        style={{
                          position: "absolute",
                          right: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "rgba(255,255,255,0.9)",
                          border: "none",
                          borderRadius: "50%",
                          width: "50px",
                          height: "50px",
                          cursor: "pointer",
                          fontSize: "1.5rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#1a3a52",
                          transition: "all 0.3s ease",
                        }}
                      >
                        ❯
                      </button>

                      {/* Image Dots */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "20px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        {room.images.map((_, idx) => (
                          <span
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            style={{
                              width: idx === activeImageIndex ? "30px" : "12px",
                              height: "12px",
                              borderRadius: "6px",
                              background: idx === activeImageIndex ? "#d4af37" : "rgba(255,255,255,0.7)",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                            }}
                          />
                        ))}
                      </div>

                      {/* Price Badge */}
                      <Badge
                        style={{
                          position: "absolute",
                          top: "20px",
                          right: "20px",
                          background: "#d4af37",
                          color: "#1a3a52",
                          padding: "0.5rem 1rem",
                          fontSize: "1rem",
                          fontWeight: "bold",
                        }}
                      >
                        {room.size}
                      </Badge>
                    </div>

                    {/* Thumbnail Strip */}
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "15px",
                        overflowX: "auto",
                      }}
                    >
                      {room.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          onClick={() => setActiveImageIndex(idx)}
                          style={{
                            width: "100px",
                            height: "70px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            cursor: "pointer",
                            border: idx === activeImageIndex ? "3px solid #d4af37" : "3px solid transparent",
                            transition: "all 0.3s ease",
                            opacity: idx === activeImageIndex ? 1 : 0.7,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Room Details */}
                  <div>
                    <h2 style={{ fontSize: "2.5rem", color: "#ff6600", marginBottom: "1rem" }}>
                      {room.name}
                    </h2>
                    <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.8, marginBottom: "2rem" }}>
                      {room.description}
                    </p>

                    {/* Quick Info */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "1rem",
                        marginBottom: "2rem",
                      }}
                    >
                      <div style={{ background: "#fff", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
                        <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>👥</div>
                        <div style={{ fontSize: "0.9rem", color: "#666" }}>Max Guests</div>
                        <div style={{ fontWeight: "bold", color: "#ff6600" }}>{room.maxGuests}</div>
                      </div>
                      <div style={{ background: "#fff", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
                        <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>🛏️</div>
                        <div style={{ fontSize: "0.9rem", color: "#666" }}>Bed Type</div>
                        <div style={{ fontWeight: "bold", color: "#ff6600" }}>{room.bedType}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div style={{ marginBottom: "2rem" }}>
                      <h3 style={{ fontSize: "1.2rem", color: "#1a3a52", marginBottom: "1rem" }}>
                        Room Features
                      </h3>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {room.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" style={{ padding: "0.5rem 0.75rem" }}>
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div style={{ marginBottom: "2rem" }}>
                      <h3 style={{ fontSize: "1.2rem", color: "#1a3a52", marginBottom: "1rem" }}>
                        In-Room Amenities
                      </h3>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {room.amenities.map((amenity, idx) => (
                          <span
                            key={idx}
                            style={{
                              background: "#e9ecef",
                              padding: "0.4rem 0.8rem",
                              borderRadius: "20px",
                              fontSize: "0.85rem",
                              color: "#495057",
                            }}
                          >
                            ✓ {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price & Book */}
                    <div
                      style={{
                        background: "#1a3a52",
                        padding: "2rem",
                        borderRadius: "12px",
                        color: "#fff",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                        <div>
                          <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>Starting from</div>
                          <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#d4af37" }}>
                            ${room.price}
                            <span style={{ fontSize: "1rem", fontWeight: "normal" }}>/night</span>
                          </div>
                        </div>
                        <Button
                          style={{
                            background: "#ff6600",
                            color: "#1a3a52",
                            padding: "1rem 2rem",
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                            border: "none",
                          }}
                        >
                          Book Now
                        </Button>
                      </div>
                      <div style={{ fontSize: "0.85rem", opacity: 0.7, textAlign: "center" }}>
                        * Free cancellation up to 24 hours before check-in
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* All Rooms Grid */}
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#ff6600", marginBottom: "50px" }}>
            All Accommodations
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {rooms.map((room) => (
              <Card
                key={room.id}
                style={{ overflow: "hidden", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
              >
                <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
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
                  <CardTitle style={{ color: "#1a3a52" }}>{room.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "#666", marginBottom: "1rem", fontSize: "0.95rem" }}>
                    {room.description.substring(0, 80)}...
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "1.3rem", color: "#d4af37", fontWeight: "bold" }}>
                      ${room.price}<span style={{ fontSize: "0.9rem", color: "#666" }}>/night</span>
                    </span>
                    <Button variant="outline" style={{ borderColor: "#ff6600", color: "#ff6600" }}>
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
