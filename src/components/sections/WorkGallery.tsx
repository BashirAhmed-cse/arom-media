// components/sections/WorkGallery.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  ThumbsUp,
  Download,
  Share2,
  Grid,
  LayoutGrid,
  Sparkles,
  Utensils,
  Brush,
  Image as ImageIcon,
  FileText,
  Award,
  Star,
  Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Sample image data - replace with your actual images
const galleryItems = [
  // Menu Designs
  {
    id: 1,
    title: "Italian Restaurant Menu",
    category: "menus",
    categoryLabel: "Menu Design",
    image: "/portfolio/menu-italian.jpg",
    client: "Bella Italia",
    description: "Elegant menu design with authentic Italian feel",
    tags: ["Restaurant", "Fine Dining", "Italian"],
    likes: 234,
    views: 1200,
    year: "2024",
    icon: Utensils,
    color: "orange"
  },
  {
    id: 2,
    title: "Cafe Breakfast Menu",
    category: "menus",
    categoryLabel: "Menu Design",
    image: "/portfolio/menu-cafe.jpg",
    client: "Morning Brew Cafe",
    description: "Modern breakfast menu with handwritten style",
    tags: ["Cafe", "Breakfast", "Casual"],
    likes: 156,
    views: 890,
    year: "2024",
    icon: Utensils,
    color: "amber"
  },
  {
    id: 3,
    title: "Wine List Menu",
    category: "menus",
    categoryLabel: "Menu Design",
    image: "/portfolio/menu-wine.jpg",
    client: "Vintage Wine Bar",
    description: "Sophisticated wine list with leather finish",
    tags: ["Wine Bar", "Luxury", "Elegant"],
    likes: 189,
    views: 1100,
    year: "2023",
    icon: Utensils,
    color: "red"
  },

  // Logo Designs
  {
    id: 4,
    title: "Tech Startup Logo",
    category: "logos",
    categoryLabel: "Logo Design",
    image: "/portfolio/logo-tech.jpg",
    client: "InnovateTech",
    description: "Modern minimalist logo for tech company",
    tags: ["Tech", "Minimal", "Modern"],
    likes: 312,
    views: 2100,
    year: "2024",
    icon: Brush,
    color: "blue"
  },
  {
    id: 5,
    title: "Restaurant Brand Logo",
    category: "logos",
    categoryLabel: "Logo Design",
    image: "/portfolio/logo-restaurant.jpg",
    client: "Spice Garden",
    description: "Elegant logo with custom typography",
    tags: ["Restaurant", "Elegant", "Custom"],
    likes: 178,
    views: 950,
    year: "2024",
    icon: Brush,
    color: "green"
  },
  {
    id: 6,
    title: "Fashion Brand Identity",
    category: "logos",
    categoryLabel: "Logo Design",
    image: "/portfolio/logo-fashion.jpg",
    client: "Urban Styles",
    description: "Luxury fashion logo with gold accents",
    tags: ["Fashion", "Luxury", "Gold"],
    likes: 267,
    views: 1800,
    year: "2023",
    icon: Brush,
    color: "purple"
  },

  // Business Cards
  {
    id: 7,
    title: "Corporate Business Cards",
    category: "business-cards",
    categoryLabel: "Business Cards",
    image: "/portfolio/bcard-corporate.jpg",
    client: "Lawson & Co",
    description: "Premium business cards with spot UV",
    tags: ["Corporate", "Premium", "Spot UV"],
    likes: 145,
    views: 670,
    year: "2024",
    icon: FileText,
    color: "indigo"
  },
  {
    id: 8,
    title: "Creative Agency Cards",
    category: "business-cards",
    categoryLabel: "Business Cards",
    image: "/portfolio/bcard-creative.jpg",
    client: "Creative Minds",
    description: "Bold design with foil stamping",
    tags: ["Creative", "Foil", "Bold"],
    likes: 203,
    views: 1300,
    year: "2024",
    icon: FileText,
    color: "pink"
  },
  {
    id: 9,
    title: "Minimalist Business Cards",
    category: "business-cards",
    categoryLabel: "Business Cards",
    image: "/portfolio/bcard-minimal.jpg",
    client: "Nordic Designs",
    description: "Clean, minimal design on matte stock",
    tags: ["Minimal", "Matte", "Elegant"],
    likes: 167,
    views: 890,
    year: "2023",
    icon: FileText,
    color: "gray"
  },

  // Posters
  {
    id: 10,
    title: "Music Festival Poster",
    category: "posters",
    categoryLabel: "Posters",
    image: "/portfolio/poster-festival.jpg",
    client: "Summer Sounds",
    description: "Vibrant poster for annual music festival",
    tags: ["Music", "Festival", "Vibrant"],
    likes: 445,
    views: 3200,
    year: "2024",
    icon: ImageIcon,
    color: "yellow"
  },
  {
    id: 11,
    title: "Movie Poster Design",
    category: "posters",
    categoryLabel: "Posters",
    image: "/portfolio/poster-movie.jpg",
    client: "Indie Film House",
    description: "Dramatic movie poster illustration",
    tags: ["Film", "Dramatic", "Illustration"],
    likes: 289,
    views: 2100,
    year: "2023",
    icon: ImageIcon,
    color: "red"
  },

  // Banners
  {
    id: 12,
    title: "Roller Banner Exhibition",
    category: "banners",
    categoryLabel: "Banners",
    image: "/portfolio/banner-roller.jpg",
    client: "Tech Expo 2024",
    description: "Eye-catching roller banner design",
    tags: ["Exhibition", "Trade Show", "Professional"],
    likes: 134,
    views: 560,
    year: "2024",
    icon: ImageIcon,
    color: "cyan"
  },
  {
    id: 13,
    title: "Outdoor Billboard",
    category: "banners",
    categoryLabel: "Banners",
    image: "/portfolio/banner-outdoor.jpg",
    client: "City Mall",
    description: "Large format outdoor advertising",
    tags: ["Outdoor", "Billboard", "Large Format"],
    likes: 98,
    views: 430,
    year: "2023",
    icon: ImageIcon,
    color: "green"
  },

  // Flyers
  {
    id: 14,
    title: "Event Flyer",
    category: "flyers",
    categoryLabel: "Flyers",
    image: "/portfolio/flyer-event.jpg",
    client: "Night Club",
    description: "High-energy party flyer design",
    tags: ["Event", "Party", "Nightlife"],
    likes: 167,
    views: 980,
    year: "2024",
    icon: FileText,
    color: "purple"
  },
  {
    id: 15,
    title: "Promotional Leaflet",
    category: "flyers",
    categoryLabel: "Flyers",
    image: "/portfolio/flyer-promo.jpg",
    client: "Retail Store",
    description: "Sale promotion leaflet with offers",
    tags: ["Retail", "Promotion", "Sale"],
    likes: 123,
    views: 670,
    year: "2024",
    icon: FileText,
    color: "orange"
  },
]

const categories = [
  { id: "all", label: "All Work", icon: LayoutGrid, count: galleryItems.length },
  { id: "menus", label: "Menu Design", icon: Utensils, count: galleryItems.filter(i => i.category === "menus").length },
  { id: "logos", label: "Logo Design", icon: Brush, count: galleryItems.filter(i => i.category === "logos").length },
  { id: "business-cards", label: "Business Cards", icon: FileText, count: galleryItems.filter(i => i.category === "business-cards").length },
  { id: "posters", label: "Posters", icon: ImageIcon, count: galleryItems.filter(i => i.category === "posters").length },
  { id: "banners", label: "Banners", icon: ImageIcon, count: galleryItems.filter(i => i.category === "banners").length },
  { id: "flyers", label: "Flyers", icon: FileText, count: galleryItems.filter(i => i.category === "flyers").length },
]

export default function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      orange: "from-orange-500 to-orange-600",
      amber: "from-amber-500 to-amber-600",
      red: "from-red-500 to-red-600",
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      indigo: "from-indigo-500 to-indigo-600",
      pink: "from-pink-500 to-pink-600",
      gray: "from-gray-500 to-gray-600",
      yellow: "from-yellow-500 to-yellow-600",
      cyan: "from-cyan-500 to-cyan-600",
    }
    return colors[color] || "from-purple-500 to-purple-600"
  }

  const nextImage = () => {
    if (!selectedImage) return
    const currentIndex = filteredItems.findIndex(i => i.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex])
  }

  const prevImage = () => {
    if (!selectedImage) return
    const currentIndex = filteredItems.findIndex(i => i.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[prevIndex])
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4"
          >
            <Award className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Our Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Recent Design Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            Explore our latest projects in menu design, branding, and print materials
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm border border-gray-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-end mb-6"
        >
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200 inline-flex">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "grid" ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("masonry")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "masonry" ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <LayoutGrid className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative cursor-pointer"
                  onHoverStart={() => setHoveredId(item.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Image Container */}
                    <div className="aspect-[4/3] relative">
                      {/* Placeholder div - replace with actual Image component */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${getColorClass(item.color)} opacity-20`} />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`bg-gradient-to-r ${getColorClass(item.color)} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1`}>
                          <Icon className="h-3 w-3" />
                          {item.categoryLabel}
                        </span>
                      </div>

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                          {item.year}
                        </span>
                      </div>

                      {/* Overlay on Hover */}
                      <AnimatePresence>
                        {hoveredId === item.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-20 flex items-end p-6"
                          >
                            <div className="text-white">
                              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                              <p className="text-sm text-white/80 mb-2">{item.client}</p>
                              <div className="flex items-center gap-4 text-sm">
                                <span className="flex items-center gap-1">
                                  <Heart className="h-4 w-4" />
                                  {item.likes}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Eye className="h-4 w-4" />
                                  {item.views}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Quick View Button */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: hoveredId === item.id ? 1 : 0,
                          scale: hoveredId === item.id ? 1 : 0
                        }}
                        className="absolute inset-0 flex items-center justify-center z-30"
                      >
                        <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                          <Eye className="h-8 w-8 text-white" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="p-4 bg-white border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 line-clamp-1">{item.title}</h3>
                          <p className="text-xs text-gray-500">{item.client}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {item.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-6 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              View Full Portfolio
              <Eye className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-50"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-50 bg-black/20 rounded-full p-3 hover:bg-black/40"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-50 bg-black/20 rounded-full p-3 hover:bg-black/40"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image Container */}
              <motion.div
                key={selectedImage.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="max-w-6xl w-full max-h-[80vh] relative rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Placeholder - replace with actual Image */}
                <div className={`w-full h-full bg-gradient-to-br ${getColorClass(selectedImage.color)} min-h-[400px]`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-xl">Sample Image - Replace with actual {selectedImage.title}</p>
                  </div>
                </div>

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`bg-gradient-to-r ${getColorClass(selectedImage.color)} text-white text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-1`}>
                          {selectedImage.categoryLabel}
                        </span>
                        <span className="bg-white/20 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-sm">
                          {selectedImage.year}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedImage.title}</h2>
                      <p className="text-white/80 text-lg mb-4">{selectedImage.client}</p>
                      <p className="text-white/60 max-w-2xl">{selectedImage.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {selectedImage.tags.map((tag) => (
                          <span key={tag} className="bg-white/10 text-white px-3 py-1.5 rounded-full text-sm backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl backdrop-blur-sm transition-colors">
                        <ThumbsUp className="h-5 w-5" />
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl backdrop-blur-sm transition-colors">
                        <Download className="h-5 w-5" />
                      </button>
                      <button className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl backdrop-blur-sm transition-colors">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-2 text-white">
                      <Heart className="h-5 w-5" />
                      <span className="font-bold">{selectedImage.likes}</span>
                      <span className="text-white/60">likes</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Eye className="h-5 w-5" />
                      <span className="font-bold">{selectedImage.views}</span>
                      <span className="text-white/60">views</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">500+</div>
            <div className="text-sm text-gray-500">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">200+</div>
            <div className="text-sm text-gray-500">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">15+</div>
            <div className="text-sm text-gray-500">Design Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">8+</div>
            <div className="text-sm text-gray-500">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}