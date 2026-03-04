// components/sections/PaperSizePricing.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Ruler,
  Weight,
  Hash,
  Sparkles,
  Printer,
  ChevronDown,
  ChevronUp,
  Info,
  Check,
  ArrowRight,
  Truck,
  Clock,
  Award,
  FileText,
  Download,
  Eye
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PaperSizePricing() {
  const [selectedSize, setSelectedSize] = useState("A5")
  const [selectedWeight, setSelectedWeight] = useState("130 GSM")
  const [quantity, setQuantity] = useState(1000)
  const [showComparison, setShowComparison] = useState(false)
  const [showSpecs, setShowSpecs] = useState(false)
  const [animatedPrice, setAnimatedPrice] = useState(0)

  const paperWeights = [
    { label: "130 GSM", multiplier: 1.0, description: "Standard flyer weight", color: "blue" },
    { label: "150 GSM", multiplier: 1.1, description: "Premium flyer weight", color: "green" },
    { label: "170 GSM", multiplier: 1.2, description: "Brochure weight", color: "purple" },
    { label: "300 GSM", multiplier: 1.3, description: "Card weight", color: "amber" },
  ]

  const sizes = [
    {
      size: "A6",
      name: "A6 Flyers",
      finished: "148.5 x 105 mm",
      popular: false,
      description: "Perfect for small flyers, coupons, and handouts",
      uses: ["Flyers", "Coupons", "Handouts", "Small cards"],
      tiers: [
        { qty: 1000, price: 50 },
        { qty: 2500, price: 55 },
        { qty: 5000, price: 70 },
        { qty: 10000, price: 100 },
        { qty: 15000, price: 130 },
        { qty: 20000, price: 160 },
        { qty: 25000, price: 200 },
        { qty: 30000, price: 245 },
        { qty: 40000, price: 285 },
        { qty: 50000, price: 345 },
      ],
    },
    {
      size: "DL",
      name: "DL Leaflets",
      finished: "210 x 99 mm",
      popular: true,
      description: "Standard leaflet size, fits in DL envelopes",
      uses: ["Leaflets", "Brochures", "Mailers", "Menus"],
      tiers: [
        { qty: 1000, price: 55 },
        { qty: 2500, price: 65 },
        { qty: 5000, price: 85 },
        { qty: 10000, price: 120 },
        { qty: 15000, price: 155 },
        { qty: 20000, price: 190 },
        { qty: 25000, price: 235 },
        { qty: 30000, price: 285 },
        { qty: 40000, price: 335 },
        { qty: 50000, price: 405 },
      ],
    },
    {
      size: "A5",
      name: "A5 Flyers",
      finished: "210 x 148.5 mm",
      popular: true,
      description: "Versatile size for flyers, menus, and leaflets",
      uses: ["Flyers", "Menus", "Leaflets", "Invitations"],
      tiers: [
        { qty: 1000, price: 65 },
        { qty: 2500, price: 75 },
        { qty: 5000, price: 90 },
        { qty: 10000, price: 150 },
        { qty: 15000, price: 200 },
        { qty: 20000, price: 250 },
        { qty: 25000, price: 310 },
        { qty: 30000, price: 375 },
        { qty: 40000, price: 455 },
        { qty: 50000, price: 555 },
      ],
    },
    {
      size: "A4",
      name: "A4 Flyers",
      finished: "297 x 210 mm",
      popular: false,
      description: "Standard document size, perfect for brochures and posters",
      uses: ["Brochures", "Posters", "Catalogues", "Reports"],
      tiers: [
        { qty: 1000, price: 105 },
        { qty: 2500, price: 135 },
        { qty: 5000, price: 195 },
        { qty: 10000, price: 300 },
        { qty: 15000, price: 400 },
        { qty: 20000, price: 500 },
        { qty: 25000, price: 600 },
        { qty: 30000, price: 690 },
        { qty: 40000, price: 870 },
        { qty: 50000, price: 1020 },
      ],
    },
    {
      size: "A3",
      name: "A3 Posters",
      finished: "420 x 297 mm",
      popular: false,
      description: "Large format for posters and presentations",
      uses: ["Posters", "Presentations", "Art prints", "Signage"],
      tiers: [
        { qty: 1000, price: 180 },
        { qty: 2500, price: 235 },
        { qty: 5000, price: 335 },
        { qty: 10000, price: 515 },
        { qty: 15000, price: 690 },
        { qty: 20000, price: 865 },
        { qty: 25000, price: 1040 },
        { qty: 30000, price: 1205 },
        { qty: 40000, price: 1535 },
        { qty: 50000, price: 1840 },
      ],
    },
  ]

  const currentSize = sizes.find(s => s.size === selectedSize) || sizes[0]
  const currentWeight = paperWeights.find(w => w.label === selectedWeight) || paperWeights[0]
  
  // Find price based on quantity
  const getPriceForQuantity = () => {
    const tier = currentSize.tiers.find(t => t.qty >= quantity) || 
                 currentSize.tiers[currentSize.tiers.length - 1]
    return Math.round(tier.price * currentWeight.multiplier)
  }

  const price = getPriceForQuantity()
  const unitPrice = price / quantity

  // Animate price changes
  useEffect(() => {
    setAnimatedPrice(price)
  }, [price])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const formatQty = (qty: number) => {
    return qty >= 1000 ? `${qty/1000}K` : qty.toString()
  }

  const getWeightColor = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      amber: "from-amber-500 to-amber-600"
    }
    return colors[color as keyof typeof colors] || "from-gray-500 to-gray-600"
  }

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header with Offer Banner */}
        <div className="relative mb-12">
          {/* New Client Offer Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 rounded-2xl p-6 mb-8 text-white shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">New Client Special Offers</h3>
                  <p className="text-white/80 text-sm">Exclusive discounts for first-time customers</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <span className="text-2xl font-bold">10% OFF</span>
                  <span className="text-sm ml-2">First Order</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <span className="text-2xl font-bold">5% OFF</span>
                  <span className="text-sm ml-2">Second Order</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <span className="text-2xl">🚚</span>
                  <span className="text-sm ml-2">Free UK Delivery</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-white/60 text-center md:text-right mt-4">
              *Minimum order £100. UK mainland only. Terms apply.
            </p>
          </motion.div>

          {/* Main Header */}
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4"
            >
              <Ruler className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Paper Size Calculator</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Choose Your Paper Size
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600"
            >
              Select from A6 to A3. Adjust quantity and paper weight for instant pricing.
            </motion.p>
          </div>
        </div>

        {/* Main Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
        >
          {/* Size Selector Grid */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 border-b border-gray-200">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {sizes.map((size) => (
                <motion.button
                  key={size.size}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedSize(size.size)}
                  className={`relative p-4 rounded-xl transition-all ${
                    selectedSize === size.size
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:shadow-md'
                  }`}
                >
                  {size.popular && (
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="text-center">
                    <div className="text-lg font-bold">{size.size}</div>
                    <div className="text-xs opacity-80">{size.name}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Size Preview & Info */}
              <div className="lg:col-span-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedSize}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    {/* Size Preview Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Ruler className="h-5 w-5 text-purple-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900">Size Details</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <span className="text-sm text-gray-500">Size:</span>
                          <span className="font-medium text-gray-900">{currentSize.size}</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <span className="text-sm text-gray-500">Dimensions:</span>
                          <span className="font-medium text-gray-900">{currentSize.finished}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Best for:</span>
                          <span className="font-medium text-gray-900">{currentSize.uses.slice(0, 3).join(", ")}</span>
                        </div>
                      </div>

                      {/* Visual Size Indicator */}
                      <div className="mt-6 flex justify-center">
                        <div 
                          className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg border-2 border-purple-300 flex items-center justify-center"
                          style={{
                            width: selectedSize === "A3" ? "120px" : 
                                   selectedSize === "A4" ? "100px" :
                                   selectedSize === "A5" ? "80px" :
                                   selectedSize === "DL" ? "70px" : "60px",
                            height: selectedSize === "A3" ? "85px" :
                                    selectedSize === "A4" ? "70px" :
                                    selectedSize === "A5" ? "55px" :
                                    selectedSize === "DL" ? "33px" : "40px",
                          }}
                        >
                          <span className="text-xs font-medium text-purple-700">{currentSize.size}</span>
                        </div>
                      </div>
                    </div>

                    {/* Common Uses */}
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Common Uses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentSize.uses.map((use) => (
                          <span key={use} className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 shadow-sm">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Middle Column - Options */}
              <div className="lg:col-span-1 space-y-6">
                {/* Paper Weight Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <div className="flex items-center gap-2">
                      <Weight className="h-4 w-4 text-purple-600" />
                      Paper Weight
                    </div>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {paperWeights.map((weight) => (
                      <button
                        key={weight.label}
                        onClick={() => setSelectedWeight(weight.label)}
                        className={`relative p-3 rounded-xl text-left transition-all ${
                          selectedWeight === weight.label
                            ? `bg-gradient-to-r ${getWeightColor(weight.color)} text-white shadow-md`
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <div className="text-sm font-bold">{weight.label}</div>
                        <div className="text-xs opacity-80">{weight.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <div className="flex items-center gap-2">
                      <Hash className="h-4 w-4 text-purple-600" />
                      Select Quantity
                    </div>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {currentSize.tiers.map((tier) => (
                      <button
                        key={tier.qty}
                        onClick={() => setQuantity(tier.qty)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                          quantity === tier.qty
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {formatQty(tier.qty)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-xl"
                    onClick={() => setShowSpecs(!showSpecs)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {showSpecs ? 'Hide' : 'View'} Specs
                  </Button>
                  <Link href="/quote" className="flex-1">
                    <Button variant="outline" className="w-full rounded-xl">
                      <FileText className="h-4 w-4 mr-2" />
                      Get Quote
                    </Button>
                  </Link>
                </div>

                {/* Specifications Panel */}
                <AnimatePresence>
                  {showSpecs && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-blue-50 rounded-xl p-4 overflow-hidden"
                    >
                      <h4 className="text-sm font-semibold text-blue-900 mb-2">Print Specifications</h4>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          Full colour both sides
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          Crop marks & bleed included
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          PDF print-ready files
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          Free artwork check
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column - Price Display */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-6 text-white h-full flex flex-col">
                  <h3 className="text-lg font-semibold mb-2">Your Price</h3>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${selectedSize}-${selectedWeight}-${quantity}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex-1"
                    >
                      <div className="text-5xl font-bold mb-2">
                        {formatCurrency(price)}
                      </div>
                      <p className="text-white/80 text-sm mb-6">
                        + VAT | {formatCurrency(unitPrice)} per item
                      </p>

                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-white/80">Size:</span>
                          <span className="font-medium">{currentSize.size} ({currentSize.finished})</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-white/80">Paper:</span>
                          <span className="font-medium">{selectedWeight}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-white/80">Quantity:</span>
                          <span className="font-medium">{formatQty(quantity)} copies</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Link href={`/order/paper-sizes?size=${selectedSize}&weight=${selectedWeight}&qty=${quantity}`}>
                          <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 rounded-xl py-6 text-lg font-semibold">
                            Order Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                        
                        <button
                          onClick={() => setShowComparison(!showComparison)}
                          className="w-full flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors py-2"
                        >
                          <Info className="h-4 w-4" />
                          {showComparison ? 'Hide' : 'Show'} price comparison
                          {showComparison ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-8"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Comparison by Size</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Quantity</th>
                        {sizes.map((size) => (
                          <th key={size.size} className="text-left py-3 px-4 text-sm font-semibold text-gray-900">
                            {size.size}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentSize.tiers.map((tier) => (
                        <tr key={tier.qty} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm font-medium text-gray-900">
                            {formatQty(tier.qty)} copies
                          </td>
                          {sizes.map((size) => {
                            const sizeTier = size.tiers.find(t => t.qty === tier.qty)
                            return (
                              <td 
                                key={`${size.size}-${tier.qty}`}
                                className={`py-3 px-4 text-sm ${
                                  size.size === selectedSize 
                                    ? 'bg-purple-50 font-semibold text-purple-700'
                                    : 'text-gray-600'
                                }`}
                              >
                                {sizeTier ? formatCurrency(sizeTier.price) : '-'}
                                <div className="text-xs text-gray-500">
                                  {sizeTier && `${formatCurrency(sizeTier.price / sizeTier.qty)}/item`}
                                </div>
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  * All prices for {selectedWeight}. Prices exclude VAT. Free UK delivery on orders over £50.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust & Delivery Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Printer className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">24-48hr</div>
              <div className="text-xs text-gray-500">Turnaround</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="p-2 bg-green-100 rounded-lg">
              <Truck className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Free UK</div>
              <div className="text-xs text-gray-500">Delivery over £50</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Award className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Quality</div>
              <div className="text-xs text-gray-500">Guaranteed</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Download className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Free</div>
              <div className="text-xs text-gray-500">Artwork Check</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}