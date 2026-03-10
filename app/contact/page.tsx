"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop"
          alt="Contact Us"
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
            Contact Us
          </h1>
          <p style={{ fontSize: "1.5rem", maxWidth: "600px", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
            We're here to help - reach out to us anytime
          </p>
        </div>
      </section>

      {/* Google Maps Section */}
      <section style={{ height: "400px", position: "relative" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584364!2d-118.4003548!3d34.0736204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147d9%3A0x29a9751103a5f3d1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1645564723421!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#1a3a52",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span style={{ fontSize: "1.5rem" }}>📍</span>
          <div>
            <p style={{ margin: 0, fontWeight: "bold" }}>LuxeStay Hotel Beverly Hills</p>
            <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8 }}>123 Luxury Avenue, Beverly Hills, CA 90210</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ padding: "80px 0", background: "#f8f9fa", flex: 1 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 2rem" }}>
          
          {/* Contact Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
              marginBottom: "60px",
            }}
          >
            {[
              { icon: "📍", title: "Address", content: "123 Luxury Avenue, Beverly Hills, CA 90210" },
              { icon: "📞", title: "Phone", content: "+1 (555) 123-4567", sub: "24/7" },
              { icon: "✉️", title: "Email", content: "reservations@luxestay.com", sub: "24/7" },
              { icon: "🕐", title: "Front Desk", content: "Open 24 hours", sub: "Daily" },
            ].map((item, idx) => (
              <Card key={idx} style={{ textAlign: "center", padding: "1.5rem" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{ fontSize: "1.1rem", color: "#1a3a52", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "#666", margin: 0 }}>{item.content}</p>
                {item.sub && (
                  <Badge style={{ marginTop: "0.5rem", background: "#d4af37", color: "#1a3a52" }}>
                    {item.sub}
                  </Badge>
                )}
              </Card>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              marginBottom: "60px",
            }}
          >
            {/* Contact Form */}
            <Card style={{ padding: "2rem" }}>
              <CardHeader>
                <CardTitle style={{ fontSize: "2rem", color: "#1a3a52" }}>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "2rem" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✅</div>
                    <h3 style={{ color: "#1a3a52", marginBottom: "0.5rem" }}>Message Sent!</h3>
                    <p style={{ color: "#666" }}>
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      style={{ marginTop: "1.5rem", background: "#1a3a52", color: "#fff" }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500, color: "#1a3a52" }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          style={{
                            width: "100%",
                            padding: "0.75rem",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            transition: "border-color 0.3s ease",
                          }}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500, color: "#1a3a52" }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          style={{
                            width: "100%",
                            padding: "0.75rem",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            fontSize: "1rem",
                          }}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500, color: "#1a3a52" }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          style={{
                            width: "100%",
                            padding: "0.75rem",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            fontSize: "1rem",
                          }}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500, color: "#1a3a52" }}>
                          Subject *
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          style={{
                            width: "100%",
                            padding: "0.75rem",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            background: "#fff",
                          }}
                        >
                          <option value="">Select a subject</option>
                          <option value="reservation">Reservation Inquiry</option>
                          <option value="feedback">Feedback</option>
                          <option value="wedding">Wedding & Events</option>
                          <option value="corporate">Corporate Events</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500, color: "#1a3a52" }}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          fontSize: "1rem",
                          resize: "vertical",
                        }}
                        placeholder="How can we help you?"
                      />
                    </div>
                    <Button
                      type="submit"
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
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div>
              {/* Map Placeholder */}
              <div
                style={{
                  height: "300px",
                  background: "linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2rem",
                  color: "#fff",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🗺️</div>
                <p style={{ fontSize: "1.2rem" }}>View on Google Maps</p>
                <Button
                  style={{
                    background: "#d4af37",
                    color: "#1a3a52",
                    marginTop: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Get Directions
                </Button>
              </div>

              {/* Department Contacts */}
              <Card style={{ padding: "2rem" }}>
                <CardHeader>
                  <CardTitle style={{ fontSize: "1.5rem", color: "#1a3a52" }}>Department Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  {[
                    { dept: "Reservations", email: "reservations@luxestay.com", phone: "+1 (555) 123-4567" },
                    { dept: "Events & Weddings", email: "events@luxestay.com", phone: "+1 (555) 123-4568" },
                    { dept: "Customer Service", email: "support@luxestay.com", phone: "+1 (555) 123-4569" },
                    { dept: "Corporate Sales", email: "corporate@luxestay.com", phone: "+1 (555) 123-4570" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "1rem 0",
                        borderBottom: idx < 3 ? "1px solid #f0f0f0" : "none",
                      }}
                    >
                      <h4 style={{ color: "#1a3a52", marginBottom: "0.5rem" }}>{item.dept}</h4>
                      <p style={{ color: "#666", margin: 0, fontSize: "0.9rem" }}>✉️ {item.email}</p>
                      <p style={{ color: "#666", margin: 0, fontSize: "0.9rem" }}>📞 {item.phone}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Social Media Section */}
          <Card style={{ padding: "3rem", textAlign: "center", background: "linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%)", color: "#fff" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Follow Us</h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9 }}>
              Stay connected with us on social media for latest updates and offers
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
              {[
                { name: "Instagram", icon: "📷", url: "https://instagram.com/luxehotels" },
                { name: "Facebook", icon: "📘", url: "https://facebook.com/LuxeHotels" },
                { name: "Twitter", icon: "🐦", url: "https://twitter.com/luxehotels" },
                { name: "YouTube", icon: "📺", url: "https://youtube.com/@luxehotels" },
                { name: "LinkedIn", icon: "💼", url: "https://linkedin.com/company/luxehotels" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70px",
                    height: "70px",
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: "50%",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "1.8rem",
                    transition: "all 0.3s ease",
                  }}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
