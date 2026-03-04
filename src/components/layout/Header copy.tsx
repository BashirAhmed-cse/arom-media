// components/layout/Header.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Palette,
  Printer,
  Sparkles,
  FileText,
  Image,
  Brush,
  Download,
  Phone,
  Mail,
  Menu,
  X,
  ChevronRight,
  PaintBucket,
  Layers,
  ShoppingCart,
  User,
  Quote
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHover, setActiveHover] = useState<string | null>(null)

  const colorPalette = {
    primary: "#7C3AED",    // Vibrant Purple (Arom brand)
    secondary: "#06D6A0",  // Mint Green
    accent: "#FF6B6B",     // Coral Red
    blue: "#118AB2",       // Ocean Blue
    yellow: "#FFD166",     // Sunshine Yellow
    indigo: "#4F46E5",     // Indigo
  }

  const navItems = [
    { 
      name: "Home", 
      href: "/",
      icon: <Sparkles className="h-4 w-4" />,
      color: colorPalette.yellow
    },
    { 
      name: "Design Studio", 
      href: "/design-studio",
      dropdown: [
        { 
          name: "Menu Design", 
          icon: <FileText className="h-4 w-4" />, 
          description: "Restaurant & café menus",
          color: colorPalette.primary 
        },
        { 
          name: "Business Cards", 
          icon: <Brush className="h-4 w-4" />, 
          description: "Premium card printing",
          color: colorPalette.secondary 
        },
        { 
          name: "Banners & Signs", 
          icon: <Image className="h-4 w-4" />, 
          description: "Large format printing",
          color: colorPalette.blue 
        },
        { 
          name: "Brand Identity", 
          icon: <PaintBucket className="h-4 w-4" />, 
          description: "Complete branding packages",
          color: colorPalette.indigo 
        },
        { 
          name: "Social Media Kits", 
          icon: <Layers className="h-4 w-4" />, 
          description: "Graphics & templates",
          color: colorPalette.accent 
        },
      ]
    },
    { 
      name: "Print Services", 
      href: "/services",
      icon: <Printer className="h-4 w-4" />,
      color: colorPalette.blue
    },
    { 
      name: "Portfolio", 
      href: "/portfolio",
      icon: <Palette className="h-4 w-4" />,
      color: colorPalette.indigo
    },
    { 
      name: "Upload & Print", 
      href: "/upload",
      icon: <Download className="h-4 w-4" />,
      color: colorPalette.secondary
    },
  ]

  return (
    <>
      {/* Vibrant Top Bar - UK Focus */}
      <motion.div 
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden bg-gradient-to-r from-purple-900/90 via-purple-800/90 to-indigo-900/90"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 py-2">
            <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
              <div className="flex items-center space-x-4 mb-2 md:mb-0">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm cursor-pointer"
                >
                  <Phone className="h-3 w-3" />
                  <span className="text-xs sm:text-sm">+44 (0)20 7123 4567</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm cursor-pointer"
                >
                  <Mail className="h-3 w-3" />
                  <span className="text-sm">hello@arommedia.co.uk</span>
                </motion.div>
              </div>
              
              <motion.div 
                className="flex items-center space-x-2"
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></div>
                <span className="text-xs sm:text-sm font-bold">
                  FREE UK Delivery • 24-48hr Turnaround
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo - Creative & Vibrant */}
            <Link href="/" className="group relative">
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Animated Logo Container */}
                <div className="relative">
                  <motion.div 
                    className="absolute -inset-3 sm:-inset-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    {[colorPalette.primary, colorPalette.secondary, colorPalette.accent].map((color, i) => (
                      <div
                        key={i}
                        className="absolute h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full"
                        style={{
                          backgroundColor: color,
                          top: `${Math.sin((i * Math.PI * 2) / 3) * 14}px`,
                          left: `${Math.cos((i * Math.PI * 2) / 3) * 14}px`,
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Main Logo */}
                  <motion.div 
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                    className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-xl shadow-lg overflow-hidden group"
                  >
                    {/* Gradient background */}
                    <div 
                      className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${colorPalette.primary}, ${colorPalette.indigo})`
                      }}
                    />
                    
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
                    </div>
                    
                    {/* Logo content */}
                    <div className="relative h-full w-full flex items-center justify-center">
                      <div className="flex items-center space-x-1">
                        <Palette className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        <Printer className="h-4 w-4 sm:h-5 sm:w-5 text-white/90" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Brand Text */}
                <div>
                  <motion.h1 
                    className="text-2xl sm:text-3xl font-black"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Arom
                    </span>
                    <span 
                      className="ml-1 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
                    >
                      Media
                    </span>
                  </motion.h1>
                  <div className="flex items-center space-x-1 sm:space-x-2 mt-0.5">
                    <div className="h-1 w-4 sm:w-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"></div>
                    <div className="h-1 w-4 sm:w-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                    <div className="h-1 w-4 sm:w-6 rounded-full bg-gradient-to-r from-green-500 to-green-600"></div>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium ml-1 sm:ml-2">
                      UK DESIGN & PRINT
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveHover(item.name)}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg group relative"
                  >
                    {item.icon && (
                      <motion.div 
                        className="p-1.5 rounded-md"
                        style={{ 
                          backgroundColor: activeHover === item.name ? item.color : `${item.color}15`,
                          color: activeHover === item.name ? "white" : item.color
                        }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.icon}
                      </motion.div>
                    )}
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item.name}
                    </span>
                    
                    {/* Animated underline */}
                    <motion.div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ 
                        width: activeHover === item.name ? "80%" : "0%",
                        backgroundColor: item.color 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>

                  {/* Design Studio Dropdown */}
                  {item.dropdown && activeHover === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-gray-900">Design Services</h3>
                          <p className="text-sm text-gray-500">Professional design solutions for your business</p>
                        </div>
                        
                        <div className="space-y-2">
                          {item.dropdown.map((service, index) => (
                            <motion.div
                              key={service.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.2 }}
                            >
                              <Link
                                href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex items-center justify-between p-3 rounded-xl hover:shadow-md transition-all group"
                                style={{ 
                                  backgroundColor: `${service.color}08`,
                                  borderLeft: `3px solid ${service.color}`
                                }}
                              >
                                <div className="flex items-center space-x-3">
                                  <div 
                                    className="p-2 rounded-lg"
                                    style={{ 
                                      backgroundColor: `${service.color}15`,
                                      color: service.color
                                    }}
                                  >
                                    {service.icon}
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900">{service.name}</h4>
                                    <p className="text-xs text-gray-500">{service.description}</p>
                                  </div>
                                </div>
                                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        
                        <motion.div 
                          className="mt-4 pt-4 border-t border-gray-100"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.2 }}
                        >
                          <Link
                            href="/services"
                            className="flex items-center justify-center text-sm font-semibold hover:text-purple-600 transition-colors"
                          >
                            View all services
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* User & Cart */}
              <div className="hidden sm:flex items-center space-x-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" className="rounded-full relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
                      3
                    </span>
                  </Button>
                </motion.div>
              </div>

              {/* Quote Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/quote"
                  className="hidden md:flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-sm shadow-sm"
                  style={{ 
                    background: `linear-gradient(135deg, ${colorPalette.secondary}, ${colorPalette.blue})`,
                    color: "white"
                  }}
                >
                  <Quote className="h-4 w-4" />
                  <span>Get Quote</span>
                </Link>
              </motion.div>

              {/* Upload Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/upload"
                  className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm shadow-sm"
                  style={{ 
                    background: `linear-gradient(135deg, ${colorPalette.primary}, ${colorPalette.indigo})`,
                    color: "white"
                  }}
                >
                  <Download className="h-4 w-4" />
                  <span>Upload Design</span>
                </Link>
              </motion.div>

              {/* Main CTA Button */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 8px 25px -5px ${colorPalette.primary}40`
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="rounded-full px-4 sm:px-6 font-bold text-white border-0 shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${colorPalette.primary}, ${colorPalette.indigo})`
                  }}
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Design Now</span>
                  <span className="sm:hidden">Design</span>
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg ml-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ backgroundColor: `${colorPalette.primary}15` }}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: colorPalette.primary }} />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: colorPalette.primary }} />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t shadow-2xl overflow-hidden"
            >
              {/* Gradient top border */}
              <div 
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${colorPalette.primary}, ${colorPalette.secondary}, ${colorPalette.accent})`
                }}
              />
              
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-3 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon && (
                            <div 
                              className="p-2 rounded-lg"
                              style={{ 
                                backgroundColor: `${item.color}15`,
                                color: item.color
                              }}
                            >
                              {item.icon}
                            </div>
                          )}
                          <span className="text-base font-semibold text-gray-900">{item.name}</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:translate-x-2 transition-transform" />
                      </Link>
                      
                      {/* Mobile Dropdown Items */}
                      {item.dropdown && (
                        <div className="pl-12 space-y-2 mt-1">
                          {item.dropdown.map((service) => (
                            <Link
                              key={service.name}
                              href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                              className="flex items-center space-x-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div 
                                className="h-2 w-2 rounded-full flex-shrink-0"
                                style={{ backgroundColor: service.color }}
                              />
                              <span className="text-sm">{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Mobile Action Buttons */}
                  <motion.div 
                    className="pt-4 mt-4 border-t border-gray-100 space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full rounded-full">
                          <User className="h-4 w-4 mr-2" />
                          Account
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full rounded-full">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Cart (3)
                        </Button>
                      </motion.div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/quote"
                        className="block w-full text-center py-3 rounded-lg font-medium text-sm shadow-sm"
                        style={{ 
                          background: `linear-gradient(135deg, ${colorPalette.secondary}, ${colorPalette.blue})`,
                          color: "white"
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get Instant Quote
                      </Link>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/upload"
                        className="block w-full text-center py-3 rounded-lg font-medium text-sm shadow-sm mb-2"
                        style={{ 
                          background: `linear-gradient(135deg, ${colorPalette.primary}, ${colorPalette.indigo})`,
                          color: "white"
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Download className="inline-block h-4 w-4 mr-2" />
                        Upload Your Design
                      </Link>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        className="w-full rounded-full font-bold text-white shadow-lg py-3"
                        style={{ 
                          background: `linear-gradient(135deg, ${colorPalette.primary}, ${colorPalette.indigo})`
                        }}
                        onClick={() => {
                          setIsMenuOpen(false)
                          // Add your design start logic here
                        }}
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Start Creative Project
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}