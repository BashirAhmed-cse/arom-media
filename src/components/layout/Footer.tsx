// components/layout/Footer.tsx
"use client"

import { motion } from "framer-motion"
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Shield,
  Truck,
  Sparkles,
  ArrowRight,
  Palette,
  Printer,
  Send,
  Heart,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: "Business Cards", href: "/business-cards" },
      { name: "Restaurant Menus", href: "/menus" },
      { name: "Posters & Banners", href: "/posters" },
      { name: "Flyers & Leaflets", href: "/flyers" },
      { name: "Brochures", href: "/brochures" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Get a Quote", href: "/quote" },
      { name: "Contact", href: "/contact" },
      { name: "FAQs", href: "/faqs" },
    ],
    resources: [
      { name: "Design Templates", href: "/templates" },
      { name: "Printing Guide", href: "/guide" },
      { name: "File Setup", href: "/file-setup" },
      { name: "Delivery Info", href: "/delivery" },
      { name: "Case Studies", href: "/case-studies" },
    ],
  }

  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: <Instagram className="h-4 w-4" />, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: <Twitter className="h-4 w-4" />, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: <Linkedin className="h-4 w-4" />, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
  ]

  const contactInfo = [
    { icon: <Phone className="h-4 w-4" />, text: "077 37062865", href: "tel:+07737062865" },
    { icon: <Mail className="h-4 w-4" />, text: "hello@arommedia.co.uk", href: "mailto:hello@arommedia.co.uk" },
    { icon: <Clock className="h-4 w-4" />, text: "Mon-Fri: 9am - 6pm" },
    { icon: <MapPin className="h-4 w-4" />, text: "London, UK" },
  ]

  return (
    <footer className="relative bg-gray-900 border-t border-white/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(255,51,102,0.1),transparent_50%)]" />
        
        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [null, "-30%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Column - 3 cols */}
            <div className="lg:col-span-3 space-y-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative h-12 w-12"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 rounded-xl opacity-80 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all" />
                  <div className="relative h-full w-full bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 rounded-xl flex items-center justify-center">
                    <div className="relative flex gap-1">
                      <Printer className="h-5 w-5 text-white" />
                      <Palette className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </motion.div>
                <div>
                  <span className="text-2xl font-black text-white">AROM</span>
                  <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ml-1">MEDIA</span>
                </div>
              </Link>

              <p className="text-white/40 text-sm leading-relaxed">
                UK-based design and print specialists, bringing your creative visions to life with uncompromising quality since 2010.
              </p>

              {/* Trust Badges */}
              <div className="flex items-center gap-4 pt-2">
                <Badge variant="outline" className="border-white/10 text-white/60 bg-white/5">
                  <Shield className="h-3 w-3 mr-1 text-purple-400" />
                  Secure
                </Badge>
                <Badge variant="outline" className="border-white/10 text-white/60 bg-white/5">
                  <Truck className="h-3 w-3 mr-1 text-purple-400" />
                  Free Delivery*
                </Badge>
                <Badge variant="outline" className="border-white/10 text-white/60 bg-white/5">
                  <Clock className="h-3 w-3 mr-1 text-purple-400" />
                  24/48hr
                </Badge>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={cn(
                      "p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white transition-all duration-300",
                      social.color
                    )}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services Links - 3 cols */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <span className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-2" />
                Our Services
              </h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 text-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Company Links - 3 cols */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <span className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-2" />
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 text-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Resources Links - 3 cols */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <span className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-2" />
                Resources
              </h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 text-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Send className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Stay Updated</h3>
                  <p className="text-white/40 text-sm">Get design tips and exclusive offers</p>
                </div>
              </div>
              <div className="flex w-full max-w-md gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-lg focus:border-purple-500 focus:ring-purple-500/20"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-6">
                    Subscribe
                    <Send className="h-4 w-4 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors"
              >
                {item.href ? (
                  <a href={item.href} className="flex items-center gap-2">
                    <span className="text-purple-400">{item.icon}</span>
                    <span className="text-xs sm:text-sm">{item.text}</span>
                  </a>
                ) : (
                  <>
                    <span className="text-purple-400">{item.icon}</span>
                    <span className="text-xs sm:text-sm">{item.text}</span>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-white/40">
                  © {currentYear} Arom Media Ltd. All rights reserved.
                </p>
                <p className="text-xs text-white/20 mt-1">
                  Registered in England • VAT: GB 123 4567 89
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-xs">
                <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-white/40 hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="/cookies" className="text-white/40 hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>

              {/* UK Badge */}
              <Badge variant="outline" className="border-purple-500/30 text-purple-400 bg-purple-500/10">
                <Zap className="h-3 w-3 mr-1" />
                UK Based
              </Badge>
            </div>

            {/* Made with love */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-6 pt-4 border-t border-white/5"
            >
              <p className="text-xs text-white/20 flex items-center justify-center">
                Made with <Heart className="h-3 w-3 mx-1 text-pink-500" /> in London
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}