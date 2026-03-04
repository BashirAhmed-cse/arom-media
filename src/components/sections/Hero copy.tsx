// components/sections/Hero.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Sparkles, 
  Upload, 
  Brush, 
  Zap, 
  ChevronRight,
  Play,
  CheckCircle,
  Palette,
  Printer,
  Smartphone,
  Globe,
  ArrowUpRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'upload' | 'design'>('upload')
  const [isPlaying, setIsPlaying] = useState(false)

  const colorPalette = {
    primary: "#7C3AED",
    secondary: "#06D6A0",
    accent: "#FF6B6B",
    blue: "#118AB2",
    yellow: "#FFD166",
    indigo: "#4F46E5",
  }

  const steps = [
    { 
      number: "01", 
      title: "Upload Design", 
      description: "Send us your files",
      color: colorPalette.primary,
      icon: <Upload className="h-5 w-5" />
    },
    { 
      number: "02", 
      title: "Review & Edit", 
      description: "Our team checks quality",
      color: colorPalette.secondary,
      icon: <CheckCircle className="h-5 w-5" />
    },
    { 
      number: "03", 
      title: "Print & Finish", 
      description: "High-quality production",
      color: colorPalette.blue,
      icon: <Printer className="h-5 w-5" />
    },
    { 
      number: "04", 
      title: "Fast Delivery", 
      description: "UK-wide shipping",
      color: colorPalette.accent,
      icon: <Zap className="h-5 w-5" />
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-indigo-50/20 pt-6 sm:pt-8 md:pt-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-24 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colorPalette.primary}20 0%, transparent 70%)`,
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colorPalette.secondary}20 0%, transparent 70%)`,
          }}
        />
        
        {/* Floating shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            style={{
              width: Math.random() * 40 + 20,
              height: Math.random() * 40 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.05,
              background: `conic-gradient(from 45deg, ${colorPalette.primary}, ${colorPalette.secondary}, ${colorPalette.accent}, ${colorPalette.primary})`,
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '30%' : '10%',
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 px-4 py-2 rounded-full border border-purple-200"
            >
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 animate-pulse" />
              <span className="text-sm font-medium text-purple-700">
                UK's Leading Design & Print Service
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                <span className="block text-gray-900">From</span>
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                    Concept
                  </span>
                  <motion.div
                    animate={{
                      width: ["0%", "100%", "100%"],
                      opacity: [0, 1, 1],
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.5,
                    }}
                    className="absolute bottom-1 left-0 h-3 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full -z-0"
                  />
                </span>
                <span className="block text-gray-900">to</span>
                <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Reality
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 max-w-xl"
            >
              Transform your ideas into stunning printed materials. Whether you have a design ready or need 
              creative help, we deliver excellence across the UK.
            </motion.p>

            {/* Interactive Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 max-w-md"
            >
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === 'upload'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Upload className="h-4 w-4" />
                    I Have Design
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('design')}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === 'design'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Brush className="h-4 w-4" />
                    Need Design Help
                  </div>
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'upload' ? (
                  <motion.div
                    key="upload"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <span>Upload any format: PDF, AI, PSD, JPG</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <span>Free file check by our experts</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        <span>Same-day printing available</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="design"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Palette className="h-4 w-4 mr-2 text-blue-500" />
                        <span>Professional designers on standby</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Smartphone className="h-4 w-4 mr-2 text-purple-500" />
                        <span>Unlimited revisions until perfect</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Globe className="h-4 w-4 mr-2 text-green-500" />
                        <span>Brand identity & marketing materials</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/upload"
                  className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:shadow-2xl transition-all"
                >
                  <Upload className="mr-3 h-5 w-5" />
                  Upload & Print Now
                  <ArrowUpRight className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="group rounded-xl border-2 px-8 py-4 text-lg font-semibold"
                >
                  <div className="relative">
                    <Play className="mr-3 h-5 w-5" />
                    <div className="absolute inset-0 animate-ping rounded-full bg-purple-100 opacity-75" />
                  </div>
                  How It Works
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
            >
              {[
                { number: "24h", label: "Fast Turnaround", color: colorPalette.primary },
                { number: "10k+", label: "Happy Clients", color: colorPalette.secondary },
                { number: "100%", label: "Quality Guarantee", color: colorPalette.accent },
                { number: "UK", label: "Nationwide", color: colorPalette.blue },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div 
                    className="text-2xl sm:text-3xl font-black mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - 3D Process Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-2xl border border-gray-100">
              {/* Card Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Our Process</h3>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-indigo-50 px-3 py-1 rounded-full">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-purple-700">Simple & Fast</span>
                  </div>
                </div>
                <p className="text-gray-600">4 easy steps to get your perfect print</p>
              </div>

              {/* Process Steps */}
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="group relative flex items-center gap-4 p-4 rounded-2xl hover:shadow-lg transition-all duration-300 bg-white border border-gray-100 hover:border-purple-200"
                  >
                    {/* Step Number */}
                    <div 
                      className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black relative overflow-hidden"
                      style={{ 
                        background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                        color: step.color
                      }}
                    >
                      {step.number}
                      <motion.div
                        className="absolute inset-0"
                        style={{ backgroundColor: step.color }}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.1 }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900">{step.title}</h4>
                          <p className="text-sm text-gray-500">{step.description}</p>
                        </div>
                        <div 
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `${step.color}15` }}
                        >
                          {step.icon}
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="mt-3">
                        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${(index + 1) * 25}%` }}
                            transition={{ delay: 1 + index * 0.2, duration: 1 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: step.color }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Connector lines (except last) */}
                    {index < steps.length - 1 && (
                      <div className="absolute -bottom-6 left-7 w-0.5 h-6 bg-gradient-to-b from-gray-200 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Floating Design Preview */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6"
              >
                <div className="relative">
                  <div className="w-40 h-48 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-4 shadow-2xl rotate-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl h-full p-3">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-2 w-2 rounded-full bg-white" />
                        <div className="h-2 w-2 rounded-full bg-white/50" />
                        <div className="h-2 w-2 rounded-full bg-white/30" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-white/30 rounded" />
                        <div className="h-2 w-3/4 bg-white/30 rounded" />
                        <div className="h-16 bg-white/20 rounded mt-4 flex items-center justify-center">
                          <Palette className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-40 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 shadow-2xl -rotate-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl h-full p-3">
                      <div className="text-center text-white">
                        <Printer className="h-8 w-8 mx-auto mb-2" />
                        <div className="text-xs font-bold">PRINT READY</div>
                        <div className="text-[10px] opacity-75">High Quality</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-4 left-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg"
            >
              <div className="flex items-center gap-2 text-sm font-bold">
                <Sparkles className="h-4 w-4" />
                <span>15% Off First Order</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}