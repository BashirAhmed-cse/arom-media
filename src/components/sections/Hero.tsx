// components/sections/Hero.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Upload, 
  Brush, 
  CheckCircle,
  Printer,
  Clock,
  Truck,
  Shield,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'upload' | 'design'>('upload')

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Simple Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            <span className="text-sm font-medium text-purple-700">
              UK Printing & Design Services
            </span>
          </motion.div>

          {/* Main Headline - Clean & Clear */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Professional Printing & 
            <span className="text-purple-600 block mt-2">Design Services in the UK</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            From business cards to banners. Upload your design or let our experts create one for you. 
            Fast turnaround, premium quality, nationwide delivery.
          </motion.p>

          {/* Simple Tab Selector */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-1 rounded-2xl shadow-sm border border-gray-200 inline-flex mb-8"
          >
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'upload'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                I Have a Design
              </div>
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'design'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Brush className="h-4 w-4" />
                I Need Design Help
              </div>
            </button>
          </motion.div>

          {/* Dynamic Content Based on Selection */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-200"
          >
            {activeTab === 'upload' ? (
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Upload PDF, AI, PSD, JPG</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-gray-300"></div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Free file check</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-gray-300"></div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Same-day printing</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span>Professional designers</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-gray-300"></div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span>Unlimited revisions</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-gray-300"></div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span>Brand identity experts</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            {activeTab === 'upload' ? (
              <Link href="/upload">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl">
                  Upload Your Design
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Link href="/design">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl">
                  Start Your Design Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            )}
            
            <Link href="/quote">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl border-2">
                Get a Quote
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Printer className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">24-48hr</div>
                <div className="text-xs text-gray-500">Turnaround</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Truck className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Free UK</div>
                <div className="text-xs text-gray-500">Delivery over £50</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">100%</div>
                <div className="text-xs text-gray-500">Quality Guarantee</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">10k+</div>
                <div className="text-xs text-gray-500">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}