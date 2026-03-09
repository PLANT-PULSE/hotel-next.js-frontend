"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const loyaltyTiers = [
  {
    id: "silver",
    name: "Silver Member",
    price: "Free",
    color: "#C0C0C0",
    gradient: "linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 100%)",
    benefits: [
      "5% discount on all bookings",
      "Late checkout (upon availability)",
      "Welcome drink on arrival",
      "Member-exclusive offers",
      "Earn 1 point per $1 spent"
    ],
    pointsMultiplier: 1,
    requirements: "Open to all guests",
    nextTier: "Gold",
    pointsToNext: 5000,
  },
  {
    id: "gold",
    name: "Gold Member",
    price: "$99/year",
    color: "#FFD700",
    gradient: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
    benefits: [
      "10% discount on all bookings",
      "Room upgrades (upon availability)",
      "Free breakfast for two",
      "Early check-in / Late checkout",
      "Complimentary spa treatment",
      "Earn 1.5 points per $1 spent",
      "Priority reservations"
    ],
    pointsMultiplier: 1.5,
    requirements: "5,000 points or $99/year",
    nextTier: "Platinum",
    pointsToNext: 15000,
  },
  {
    id: "platinum",
    name: "Platinum Member",
    price: "$299/year",
    color: "#E5E4E2",
    gradient: "linear-gradient(135deg, #E5E4E2 0%, #B8860B 100%)",
    benefits: [
      "15% discount on all bookings",
      "Suite upgrades (upon availability)",
      "All meals included",
      "Quarterly spa credits ($100)",
      "Free airport transfers",
      "Dedicated concierge service",
      "Earn 2 points per $1 spent",
      "Exclusive member events",
      "Complimentary night on your birthday"
    ],
    pointsMultiplier: 2,
    requirements: "20,000 points or $299/year",
    nextTier: null,
    pointsToNext: 0,
  }
];

const memberBenefits = [
  { icon: "🎁", title: "Redeem Points", description: "Use points for free nights, upgrades, dining, and more" },
  { icon: "⭐", title: "Earn Rewards", description: "Earn points on every stay and unlock exclusive benefits" },
  { icon: "🏨", title: "Room Upgrades", description: "Get upgraded to better rooms based on your tier" },
  { icon: "🍽️", title: "Dining Benefits", description: "Enjoy complimentary meals and exclusive restaurant access" },
  { icon: "✈️", title: "Travel Perks", description: "Airport transfers and late checkout privileges" },
  { icon: "🎂", title: "Special Occasions", description: "Birthday perks and anniversary rewards" },
];

const howItWorks = [
  { step: 1, title: "Join Free", description: "Sign up for LuxeStay Rewards and get your membership instantly" },
  { step: 2, title: "Stay & Earn", description: "Earn points on every qualifying stay at any of our properties" },
  { step: 3, title: "Unlock Benefits", description: "As you earn points, unlock exclusive member benefits" },
  { step: 4, title: "Redeem Rewards", description: "Use your points for free nights, upgrades, and experiences" },
];

export default function LoyaltyPage() {
  const [selectedTier, setSelectedTier] = useState(loyaltyTiers[1]);

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
          src="/images/download (4).jpeg"
          alt="Loyalty Program"
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
          }}
        >
          <h1 style={{ fontSize: "4rem", marginBottom: "1rem", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            LuxeStay Rewards
          </h1>
          <p style={{ fontSize: "1.5rem", maxWidth: "600px", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
            Unlock exclusive benefits and earn rewards with every stay
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#1a3a52", marginBottom: "50px" }}>
            How It Works
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem",
            }}
          >
            {howItWorks.map((item, idx) => (
              <div key={idx} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "#ff6600",
                    color: "#fff",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    border: "4px solid #d4af37",
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontSize: "1.3rem", color: "#ff6600", marginBottom: "0.75rem" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#666", lineHeight: 1.6 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section style={{ padding: "80px 0", background: "#f8f9fa", flex: 1 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#1a3a52", marginBottom: "20px" }}>
            Membership Tiers
          </h2>
          <p style={{ textAlign: "center", fontSize: "1.1rem", color: "#666", marginBottom: "50px" }}>
            Choose the tier that best fits your travel style
          </p>

          {/* Tier Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
              marginBottom: "60px",
            }}
          >
            {loyaltyTiers.map((tier) => (
              <Card
                key={tier.id}
                style={{
                  textAlign: "center",
                  border: selectedTier.id === tier.id ? `3px solid ${tier.color}` : "1px solid #e0e0e0",
                  transition: "all 0.3s ease",
                  transform: selectedTier.id === tier.id ? "scale(1.05)" : "scale(1)",
                  overflow: "visible",
                }}
              >
                {selectedTier.id === tier.id && (
                  <Badge
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: tier.color,
                      color: "#1a3a52",
                      fontWeight: "bold",
                      padding: "0.5rem 1.5rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    Recommended
                  </Badge>
                )}
                <CardHeader style={{ padding: "2rem 2rem 1rem" }}>
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      background: tier.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                      fontSize: "2.5rem",
                    }}
                  >
                    {tier.id === "platinum" ? "👑" : tier.id === "gold" ? "🏆" : "⭐"}
                  </div>
                  <CardTitle style={{ fontSize: "1.8rem", color: "#ff6600" }}>{tier.name}</CardTitle>
                  <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ff6600" }}>
                    {tier.price}
                  </div>
                </CardHeader>
                <CardContent style={{ padding: "1rem 2rem 2rem" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: "1.5rem 0", textAlign: "left" }}>
                    {tier.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        style={{
                          padding: "0.6rem 0",
                          borderBottom: "1px solid #f0f0f0",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                        }}
                      >
                        <span style={{ color: "#d4af37", fontWeight: "bold" }}>✓</span>
                        <span style={{ color: "#555", fontSize: "0.9rem" }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setSelectedTier(tier)}
                    style={{
                      background: selectedTier.id === tier.id ? "#ff6600" : "#ff6600",
                      color: selectedTier.id === tier.id ? "#fff" : "#fff",
                      padding: "0.75rem 1.5rem",
                      fontWeight: "bold",
                      border: "none",
                      width: "100%",
                    }}
                  >
                    {tier.id === "platinum" ? "Join Now" : "Select Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Member Benefits */}
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#1a3a52", marginBottom: "50px" }}>
            Member Benefits
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
              marginBottom: "60px",
            }}
          >
            {memberBenefits.map((benefit, idx) => (
              <Card key={idx} style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{benefit.icon}</div>
                <h3 style={{ fontSize: "1.2rem", color: "#ff6600", marginBottom: "0.75rem" }}>
                  {benefit.title}
                </h3>
                <p style={{ color: "#666", fontSize: "0.95rem" }}>{benefit.description}</p>
              </Card>
            ))}
          </div>

          {/* Points Value */}
          <Card
            style={{
              background: "linear-gradient(135deg, #ff6600 0%, #cc5200 100%)",
              color: "#fff",
              padding: "3rem",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Your Points, Your Rewards</h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9 }}>
              1,000 points = $10 credit towards your next stay
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "2rem", borderRadius: "12px", minWidth: "200px" }}>
                <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🏨</div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#d4af37" }}>Free Night</div>
                <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>15,000 points</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "2rem", borderRadius: "12px", minWidth: "200px" }}>
                <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>⬆️</div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#d4af37" }}>Room Upgrade</div>
                <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>5,000 points</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "2rem", borderRadius: "12px", minWidth: "200px" }}>
                <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🍽️</div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#d4af37" }}>Dining Credit</div>
                <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>2,500 points</p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "2rem", color: "#ff6600", marginBottom: "1.5rem" }}>
              Ready to Start Earning?
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "2rem" }}>
              Join LuxeStay Rewards today and enjoy exclusive benefits
            </p>
            <Button
              style={{
                background: "#d4af37",
                color: "#1a3a52",
                padding: "1rem 3rem",
                fontSize: "1.1rem",
                fontWeight: "bold",
                border: "none",
              }}
            >
              Join Free Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
