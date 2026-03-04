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
  Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Footer() {
  const colorPalette = {
    primary: "#7C3AED",    // Vibrant Purple (Arom brand)
    secondary: "#06D6A0",  // Mint Green
    accent: "#FF6B6B",     // Coral Red
    blue: "#118AB2",       // Ocean Blue
    yellow: "#FFD166",     // Sunshine Yellow
    indigo: "#4F46E5",     // Indigo
  }

  const footerLinks = {
    services: [
      { name: "Graphic Design", href: "/services/design" },
      { name: "Digital Printing", href: "/services/printing" },
      { name: "Brand Identity", href: "/services/branding" },
      { name: "Large Format Printing", href: "/services/large-format" },
      { name: "Packaging Design", href: "/services/packaging" },
    ],
    quickLinks: [
      { name: "Upload & Print", href: "/upload" },
      { name: "Design Studio", href: "/design-studio" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Get Quote", href: "/quote" },
      { name: "Track Order", href: "/track" },
    ],
    resources: [
      { name: "Design Templates", href: "/templates" },
      { name: "Printing Guide", href: "/guide" },
      { name: "File Requirements", href: "/requirements" },
      { name: "Colour Guide", href: "/colour-guide" },
      { name: "Case Studies", href: "/case-studies" },
    ],
  }

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  ]

  const trustBadges = [
    { icon: <Shield className="h-5 w-5" />, text: "Secure Payments" },
    { icon: <Truck className="h-5 w-5" />, text: "UK Wide Delivery" },
    { icon: <Clock className="h-5 w-5" />, text: "24/7 Support" },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 border-t">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-5"
          style={{
            background: `linear-gradient(90deg, ${colorPalette.primary}, ${colorPalette.secondary}, ${colorPalette.accent})`,
            backgroundSize: "300% 300%",
          }}
        />
        {/* Decorative dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              backgroundColor: [
                colorPalette.primary,
                colorPalette.secondary,
                colorPalette.accent,
                colorPalette.blue,
              ][i % 4],
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Top CTA Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 py-12"
        >
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-purple-100">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-1 text-sm text-white mb-4">
                  <Sparkles className="h-3 w-3 mr-2" />
                  LIMITED TIME OFFER
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Ready to Bring Your Vision to Life?
                </h3>
                <p className="text-gray-600 max-w-2xl">
                  Get 15% off your first order when you upload your design today!
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/upload"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-bold text-white shadow-xl hover:shadow-2xl transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${colorPalette.primary}, ${colorPalette.indigo})`,
                  }}
                >
                  Upload Design & Save 15%
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-14 w-14 rounded-xl shadow-lg overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${colorPalette.primary}, ${colorPalette.indigo})`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center space-x-1">
                      <Palette className="h-6 w-6 text-white" />
                      <Printer className="h-5 w-5 text-white/90" />
                    </div>
                  </div>
                </motion.div>
                <div>
                  <h2 className="text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Arom<span className="text-purple-600">Media</span>
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">UK Design & Print Excellence</p>
                </div>
              </div>
              
              <p className="text-gray-600">
                Transforming ideas into stunning printed materials across the UK since 2015. 
                Professional design services and premium printing solutions.
              </p>

              {/* Trust Badges */}
              <div className="space-y-3">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${colorPalette.primary}15` }}
                    >
                      {badge.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Follow Our Creativity</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-2.5 rounded-full hover:shadow-lg transition-all duration-300"
                      style={{ backgroundColor: `${colorPalette.primary}10` }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-6 rounded-full mr-2" style={{ backgroundColor: colorPalette.primary }} />
                Our Services
              </h3>
              <ul className="space-y-3">
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
                      className="flex items-center text-gray-600 hover:text-purple-600 transition-colors group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-6 rounded-full mr-2" style={{ backgroundColor: colorPalette.secondary }} />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center text-gray-600 hover:text-green-600 transition-colors group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-6 rounded-full mr-2" style={{ backgroundColor: colorPalette.blue }} />
                Resources
              </h3>
              <ul className="space-y-3">
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
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Inspired</h3>
                <p className="text-gray-600">Get design tips and exclusive offers in our newsletter</p>
              </div>
              <div className="flex w-full max-w-md gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 rounded-full border-gray-300 focus:border-purple-500"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="rounded-full px-6 font-semibold"
                    style={{
                      background: `linear-gradient(135deg, ${colorPalette.primary}, ${colorPalette.indigo})`,
                    }}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Subscribe
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Phone className="h-5 w-5" />,
                  title: "Call Us",
                  info: "+44 (0)20 7123 4567",
                  subtitle: "Mon-Fri 9am-6pm",
                  color: colorPalette.primary,
                },
                {
                  icon: <Mail className="h-5 w-5" />,
                  title: "Email Us",
                  info: "hello@arommedia.co.uk",
                  subtitle: "Response within 2 hours",
                  color: colorPalette.secondary,
                },
                {
                  icon: <MapPin className="h-5 w-5" />,
                  title: "Visit Us",
                  info: "London, United Kingdom",
                  subtitle: "By appointment only",
                  color: colorPalette.blue,
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:shadow-md transition-all duration-300"
                  style={{ backgroundColor: `${contact.color}08` }}
                >
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${contact.color}15` }}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{contact.title}</h4>
                    <p className="text-lg font-bold mt-1" style={{ color: contact.color }}>
                      {contact.info}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{contact.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="border-t py-6"
          style={{ borderColor: `${colorPalette.primary}20` }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600">
                  © {new Date().getFullYear()} Arom Media Ltd. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Registered in England No: 12345678 • VAT No: GB 123 4567 89
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link 
                  href="/privacy" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/cookies" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Made with love */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-4 pt-4 border-t"
              style={{ borderColor: `${colorPalette.primary}10` }}
            >
              <p className="text-sm text-gray-500 flex items-center justify-center">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> in the UK • Proudly serving businesses nationwide
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}