// components/layout/Header.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Palette,
  Printer,
  Sparkles,
  FileText,
  Brush,
  Download,
  Phone,
  Mail,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  PaintBucket,
  Layers,
  ShoppingCart,
  User,
  Quote,
  Clock,
  Shield,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      icon: <Palette className="h-4 w-4" />,
      color: colorPalette.primary,
      dropdown: [
        { 
          name: "Menu Design", 
          icon: FileText, 
          description: "Restaurant & café menus",
          color: colorPalette.primary,
          href: "/services/menu-design"
        },
        { 
          name: "Business Cards", 
          icon: Brush, 
          description: "Premium card printing",
          color: colorPalette.secondary,
          href: "/services/business-cards"
        },
        { 
          name: "Banners & Signs", 
          icon: Image, 
          description: "Large format printing",
          color: colorPalette.blue,
          href: "/services/banners"
        },
        { 
          name: "Brand Identity", 
          icon: PaintBucket, 
          description: "Complete branding packages",
          color: colorPalette.indigo,
          href: "/services/brand-identity"
        },
        { 
          name: "Social Media Kits", 
          icon: Layers, 
          description: "Graphics & templates",
          color: colorPalette.accent,
          href: "/services/social-media"
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
      {/* Enhanced Top Bar */}
      <motion.div 
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-indigo-900"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2 py-2 text-white text-sm">
            {/* Contact Info */}
            <div className="flex items-center flex-wrap gap-3">
              <a 
                href="tel:+442071234567" 
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
              >
                <Phone className="h-3 w-3" />
                <span className="text-xs sm:text-sm">+44 (0)20 7123 4567</span>
              </a>
              <a 
                href="mailto:hello@arommedia.co.uk" 
                className="hidden md:flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
              >
                <Mail className="h-3 w-3" />
                <span className="text-sm">hello@arommedia.co.uk</span>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center space-x-1 text-white/80">
                <Shield className="h-3 w-3" />
                <span className="text-xs">Secure</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1 text-white/80">
                <Clock className="h-3 w-3" />
                <span className="text-xs">24-48hr</span>
              </div>
              <motion.div 
                className="flex items-center space-x-2 bg-green-500/20 px-3 py-1 rounded-full"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-xs font-bold text-green-400">FREE UK DELIVERY</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg" 
            : "bg-white shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo - Using actual logo.png */}
            <Link href="/" className="group relative flex items-center">
              <div className="flex items-center space-x-3">
                {/* Logo Image */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-12 w-auto sm:h-14 overflow-hidden"
                >
                  <Image
                    src="/logo.png"
                    alt="Arom Media"
                    width={100}
                    height={150}
                    className="h-full w-auto object-contain"
                    priority
                  />
                </motion.div>

                {/* Colored bars and text */}
                <div className="flex items-center mt-0.5">
                  <div className="flex space-x-1 mr-2">
                    <div className="h-1 w-4 rounded-full bg-purple-500" />
                    <div className="h-1 w-4 rounded-full bg-blue-500" />
                    <div className="h-1 w-4 rounded-full bg-green-500" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
                    DESIGN & PRINT STUDIO
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-purple-50 transition-all group"
                  >
                    <span 
                      className="p-1.5 rounded-md transition-colors group-hover:bg-purple-100"
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </span>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
                      {item.name}
                    </span>
                    {item.dropdown && (
                      <ChevronDown className="h-3 w-3 text-gray-400 group-hover:text-purple-600 transition-colors" />
                    )}
                  </Link>

                  {/* Enhanced Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="p-2">
                        <div className="px-3 py-2">
                          <h3 className="text-sm font-semibold text-gray-900">Design Services</h3>
                          <p className="text-xs text-gray-500">Professional solutions for your business</p>
                        </div>
                        
                        <div className="space-y-1">
                          {item.dropdown.map((service, index) => {
                            const Icon = service.icon
                            return (
                              <motion.div
                                key={service.name}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={service.href}
                                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all group"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div 
                                      className="p-2 rounded-lg"
                                      style={{ 
                                        backgroundColor: `${service.color}15`,
                                        color: service.color
                                      }}
                                    >
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <div>
                                      <h4 className="text-sm font-semibold text-gray-900">{service.name}</h4>
                                      <p className="text-xs text-gray-500">{service.description}</p>
                                    </div>
                                  </div>
                                  <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all" />
                                </Link>
                              </motion.div>
                            )
                          })}
                        </div>
                        
                        <Link
                          href="/services"
                          className="mt-2 block text-center text-sm font-medium text-purple-600 hover:text-purple-700 py-2 border-t border-gray-100"
                        >
                          View all services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons - Shopping cart removed */}
            <div className="flex items-center space-x-2">
              {/* User Menu - Only user icon remaining */}
              <div className="hidden sm:flex items-center space-x-1">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-50">
                  <User className="h-5 w-5 text-gray-600" />
                </Button>
              </div>

              {/* Primary CTA */}
              <Button 
                className="rounded-full px-4 sm:px-6 font-semibold text-white shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                <span>Design Now</span>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-purple-600" />
                ) : (
                  <Menu className="h-5 w-5 text-purple-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Enhanced */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t shadow-xl overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-green-500" />
              
              <div className="container mx-auto px-4 py-4">
                <nav className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                            className="flex items-center justify-between w-full py-3 text-gray-900 font-semibold"
                          >
                            <div className="flex items-center space-x-3">
                              <span style={{ color: item.color }}>{item.icon}</span>
                              <span>{item.name}</span>
                            </div>
                            <ChevronDown className={`h-4 w-4 transition-transform ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-8 space-y-2 mt-1"
                              >
                                {item.dropdown.map((service) => {
                                  const Icon = service.icon
                                  return (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      className="flex items-center space-x-3 py-2 text-gray-600 hover:text-gray-900"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      <div 
                                        className="p-1.5 rounded"
                                        style={{ backgroundColor: `${service.color}15`, color: service.color }}
                                      >
                                        <Icon className="h-3 w-3" />
                                      </div>
                                      <span className="text-sm">{service.name}</span>
                                    </Link>
                                  )
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center space-x-3 py-3 text-gray-900 font-semibold"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span style={{ color: item.color }}>{item.icon}</span>
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Action Buttons - Only Account button remaining */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Button variant="outline" className="w-full rounded-lg">
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                </div>

                {/* Quick Contact */}
                <div className="mt-4 text-xs text-gray-500 flex items-center justify-center space-x-4">
                  <a href="tel:+442071234567" className="flex items-center space-x-1">
                    <Phone className="h-3 w-3" />
                    <span>Call</span>
                  </a>
                  <a href="mailto:hello@arommedia.co.uk" className="flex items-center space-x-1">
                    <Mail className="h-3 w-3" />
                    <span>Email</span>
                  </a>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>24-48hr</span>
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}