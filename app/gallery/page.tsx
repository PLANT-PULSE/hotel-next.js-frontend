"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  // Exterior
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    alt: "Hotel Exterior",
    category: "exterior",
    title: "Grand Entrance",
    description: "Our stunning hotel exterior at dusk"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
    alt: "Hotel Pool View",
    category: "exterior",
    title: "Poolside Paradise",
    description: "Beautiful pool area with tropical landscaping"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    alt: "Hotel Facade",
    category: "exterior",
    title: "Elegant Facade",
    description: "Modern architectural design"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
    alt: "Hotel Building",
    category: "exterior",
    title: "Luxury Resort",
    description: "Expansive hotel grounds"
  },

  // Interior
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    alt: "Lobby",
    category: "interior",
    title: "Grand Lobby",
    description: "Elegant entrance lobby with designer furnishings"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
    alt: "Reception",
    category: "interior",
    title: "Welcome Reception",
    description: "Friendly check-in experience"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    alt: "Corridor",
    category: "interior",
    title: "Designer Corridor",
    description: "Luxuriously appointed hallways"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    alt: "Lounge",
    category: "interior",
    title: "Elegant Lounge",
    description: "Comfortable seating area"
  },

  // Rooms
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    alt: "Deluxe Room",
    category: "rooms",
    title: "Deluxe Suite",
    description: "Spacious bedroom with premium amenities"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    alt: "Bedroom",
    category: "rooms",
    title: "Premium Bedroom",
    description: "King bed with city views"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
    alt: "Bathroom",
    category: "rooms",
    title: "Luxury Bathroom",
    description: "Marble bathroom with soaking tub"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop",
    alt: "Suite",
    category: "rooms",
    title: "Executive Suite",
    description: "Separate living and sleeping areas"
  },

  // Dining
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    alt: "Fine Dining",
    category: "dine",
    title: "Gourmet Restaurant",
    description: "Award-winning culinary experience"
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
    alt: "Bar",
    category: "dine",
    title: "Rooftop Bar",
    description: "Craft cocktails with panoramic views"
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    alt: "Restaurant Interior",
    category: "dine",
    title: "Elegant Dining",
    description: "Sophisticated ambiance"
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=800&h=600&fit=crop",
    alt: "Cafe",
    category: "dine",
    title: "Artisan Cafe",
    description: "Fresh pastries and specialty coffee"
  },

  // Additional images
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
    alt: "Spa",
    category: "interior",
    title: "Wellness Spa",
    description: "Relaxing spa treatments"
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
    alt: "Gym",
    category: "interior",
    title: "Fitness Center",
    description: "State-of-the-art equipment"
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    alt: "Meeting Room",
    category: "interior",
    title: "Meeting Facilities",
    description: "Professional event spaces"
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    alt: "Evening View",
    category: "exterior",
    title: "Evening Ambiance",
    description: "Magical nighttime setting"
  }
];

const categories = [
  { id: "all", label: "All" },
  { id: "exterior", label: "Exterior" },
  { id: "interior", label: "Interior" },
  { id: "rooms", label: "Rooms" },
  { id: "dine", label: "Dining" }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-amber-500/5 to-amber-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">
              Explore Our Property
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">
              Photo Gallery
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover the beauty and luxury of LuxeStay Hotel through our curated collection of stunning photographs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-500/30"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-semibold text-lg">{image.title}</h3>
                        <p className="text-sm text-white/80">{image.description}</p>
                      </div>
                      <motion.div
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </motion.div>
                    </div>
                    <CardContent className="p-4 bg-white">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-700">{image.title}</span>
                        <Badge variant="secondary" className="text-xs capitalize">{image.category}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg shadow-2xl"
                layoutId={`image-${selectedImage.id}`}
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-semibold text-white">{selectedImage.title}</h3>
                <p className="text-white/70 mt-2">{selectedImage.description}</p>
                <Badge className="mt-3 bg-amber-600">{selectedImage.category}</Badge>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { number: "20+", label: "Photos" },
              { number: "5", label: "Categories" },
              { number: "150+", label: "Rooms" },
              { number: "4", label: "Restaurants" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-amber-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
}
