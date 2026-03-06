// components/layout/Header.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Printer,
  Palette,
  Sparkles,
  Menu,
  X,
  ChevronDown,
  User,
  Phone,
  Mail,
  Clock,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar - Modern Dark with Gradient */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-sm border-b border-white/10"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-4">
              <motion.a 
                href="tel:+442071234567" 
                className="flex items-center gap-1 hover:text-purple-400 transition-colors group"
                whileHover={{ x: 2 }}
              >
                <Phone className="h-3 w-3 text-purple-400 group-hover:rotate-12 transition-transform" />
                <span>077 37062865</span>
              </motion.a>
              <motion.a 
                href="mailto:hello@arommedia.co.uk" 
                className="flex items-center gap-1 hover:text-purple-400 transition-colors group"
                whileHover={{ x: 2 }}
              >
                <Mail className="h-3 w-3 text-purple-400 group-hover:rotate-12 transition-transform" />
                <span>hello@arommedia.co.uk</span>
              </motion.a>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Clock className="h-3 w-3 text-purple-400" />
              <span>Mon-Fri: 9am - 6pm</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-gray-900/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" 
            : "bg-gray-900"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo - Modern with Animation */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative h-12 w-12"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 rounded-xl opacity-80 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all" />
                <div className="relative h-full w-full bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 rounded-xl flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/10 rounded-xl" />
                  <div className="relative flex gap-1">
                    <Printer className="h-5 w-5 text-white" />
                    <Palette className="h-5 w-5 text-white" />
                  </div>
                </div>
              </motion.div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-black text-white">AROM</span>
                  <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ml-1">MEDIA</span>
                </div>
                <p className="text-xs text-white/40">Print & Design</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              {/* Print Only Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered('print')}
                onHoverEnd={() => setIsHovered(null)}
              >
                <Link href="/print">
                  <Button 
                    variant="outline" 
                    className="relative overflow-hidden border-2 border-purple-500/50 text-white hover:text-white px-6 py-5 bg-transparent hover:border-purple-500 transition-all"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity"
                      animate={isHovered === 'print' ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="relative z-10 flex items-center">
                      <Printer className="h-4 w-4 mr-2" />
                      Print Only
                    </span>
                  </Button>
                </Link>
              </motion.div>

              {/* Design + Print Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered('design')}
                onHoverEnd={() => setIsHovered(null)}
              >
                <Link href="/design-and-print">
                  <Button 
                    className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-5 border-0 shadow-lg shadow-purple-600/20"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-white/20"
                      animate={isHovered === 'design' ? { scale: [1, 1.5, 1], opacity: [0, 0.3, 0] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="relative z-10 flex items-center">
                      <Palette className="h-4 w-4 mr-2" />
                      Design + Print
                    </span>
                  </Button>
                </Link>
              </motion.div>

              {/* User Button */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" size="icon" className="rounded-full text-white/60 hover:text-white hover:bg-white/10">
                  <User className="h-5 w-5" />
                </Button>
              </motion.div>

              {/* Decorative Badge */}
              <Badge variant="outline" className="border-purple-500/30 text-purple-400 bg-purple-500/10">
                <Zap className="h-3 w-3 mr-1 text-purple-400" />
                UK Based
              </Badge>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <X className="h-5 w-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Menu className="h-5 w-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-gray-900 border-t border-white/10"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-3">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link href="/print" className="block" onClick={() => setIsMenuOpen(false)}>
                      <Button 
                        variant="outline" 
                        className="w-full border-2 border-purple-500/50 text-white hover:text-white bg-transparent hover:bg-purple-600/20 relative overflow-hidden group"
                      >
                        <Printer className="h-4 w-4 mr-2" />
                        Print Only
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link href="/design-and-print" className="block" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                        <Palette className="h-4 w-4 mr-2" />
                        Design + Print
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="pt-4 border-t border-white/10"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <a href="tel:+442071234567" className="flex items-center gap-2 text-white/60 hover:text-white text-sm">
                        <Phone className="h-4 w-4 text-purple-400" />
                        <span>Call us</span>
                      </a>
                      <a href="mailto:hello@arommedia.co.uk" className="flex items-center gap-2 text-white/60 hover:text-white text-sm">
                        <Mail className="h-4 w-4 text-purple-400" />
                        <span>Email</span>
                      </a>
                    </div>
                    <div className="flex items-center gap-2 mt-3 text-white/40 text-xs">
                      <Clock className="h-3 w-3 text-purple-400" />
                      <span>Mon-Fri: 9am - 6pm</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mt-4"
                  >
                    <Badge variant="outline" className="border-purple-500/30 text-purple-400 bg-purple-500/10">
                      <Zap className="h-3 w-3 mr-1 text-purple-400" />
                      UK Based Printer
                    </Badge>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated Progress Bar on Scroll */}
        {isScrolled && (
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 origin-left"
          />
        )}
      </motion.header>
    </>
  )
}