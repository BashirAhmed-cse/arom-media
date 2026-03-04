// components/sections/PricingTable.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Check,
  Sparkles,
  Printer,
  FileText,
  Image,
  Brush,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Award,
  Clock,
  Truck,
  Info
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PricingTable() {
  const [selectedCategory, setSelectedCategory] = useState("business-cards")
  const [selectedOption, setSelectedOption] = useState("matt-laminated")
  const [quantity, setQuantity] = useState(500)
  const [showComparison, setShowComparison] = useState(false)

  const categories = [
    { id: "business-cards", name: "Business Cards", icon: Brush, color: "purple" },
    { id: "menus", name: "Menus", icon: FileText, color: "green" },
    { id: "banners", name: "Banners", icon: Image, color: "blue" },
    { id: "flyers", name: "Flyers", icon: Printer, color: "orange" },
  ]

  // Business Cards Options (from your existing table)
  const businessCardOptions = [
    {
      id: "matt-laminated",
      name: "Matt Laminated Both Sides",
      description: "Premium 400gsm with matt lamination on both sides",
      size: "Standard (85×55mm)",
      features: ["Enhanced durability", "Professional finish", "Fingerprint resistant"],
      popular: true,
      tiers: [
        { qty: 500, price: 45 },
        { qty: 1000, price: 50 },
        { qty: 2000, price: 80 },
        { qty: 3000, price: 100 },
        { qty: 4000, price: 125 },
        { qty: 5000, price: 150 },
        { qty: 10000, price: 245 },
        { qty: 15000, price: 330 },
      ],
    },
    {
      id: "non-laminated-400",
      name: "400gsm Non-Laminated",
      description: "High-quality 400gsm uncoated stock",
      size: "Standard (85×55mm)",
      features: ["Natural paper feel", "Eco-friendly option", "Great for writing"],
      tiers: [
        { qty: 500, price: 40 },
        { qty: 1000, price: 45 },
        { qty: 2000, price: 70 },
        { qty: 3000, price: 88 },
        { qty: 4000, price: 110 },
        { qty: 5000, price: 130 },
        { qty: 10000, price: 200 },
        { qty: 15000, price: 255 },
      ],
    },
    {
      id: "non-laminated-300",
      name: "300gsm Non-Laminated",
      description: "Standard 300gsm uncoated stock",
      size: "Standard (85×55mm)",
      features: ["Economical choice", "Lightweight", "Classic look"],
      tiers: [
        { qty: 500, price: 35 },
        { qty: 1000, price: 40 },
        { qty: 2000, price: 60 },
        { qty: 3000, price: 76 },
        { qty: 4000, price: 96 },
        { qty: 5000, price: 115 },
        { qty: 10000, price: 180 },
        { qty: 15000, price: 230 },
      ],
    },
  ]

  // Menu Options
  const menuOptions = [
    {
      id: "a5-single",
      name: "A5 Single-sided",
      description: "Perfect for daily specials or simple menus",
      size: "A5 (148×210mm)",
      features: ["250gsm gloss paper", "Full colour", "Fast turnaround"],
      tiers: [
        { qty: 50, price: 45 },
        { qty: 100, price: 75 },
        { qty: 250, price: 160 },
        { qty: 500, price: 280 },
      ],
    },
    {
      id: "a5-double",
      name: "A5 Double-sided",
      description: "More space for your offerings",
      size: "A5 (148×210mm)",
      features: ["250gsm gloss paper", "Both sides printed", "Waterproof option"],
      popular: true,
      tiers: [
        { qty: 50, price: 55 },
        { qty: 100, price: 95 },
        { qty: 250, price: 200 },
        { qty: 500, price: 350 },
      ],
    },
    {
      id: "a4-folded",
      name: "A4 Folded Menu",
      description: "4-page menu in A5 format when folded",
      size: "A4 folded to A5",
      features: ["Multi-page layout", "Premium feel", "Restaurant quality"],
      tiers: [
        { qty: 50, price: 75 },
        { qty: 100, price: 130 },
        { qty: 250, price: 280 },
        { qty: 500, price: 480 },
      ],
    },
  ]

  // Get current options based on category
  const getCurrentOptions = () => {
    switch(selectedCategory) {
      case "business-cards":
        return businessCardOptions
      case "menus":
        return menuOptions
      default:
        return businessCardOptions
    }
  }

  const currentOptions = getCurrentOptions()
  const currentOption = currentOptions.find(opt => opt.id === selectedOption) || currentOptions[0]
  const currentTier = currentOption.tiers.find(t => t.qty >= quantity) || currentOption.tiers[currentOption.tiers.length - 1]
  const unitPrice = currentTier.price / currentTier.qty

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const formatQty = (qty: number) => {
    return qty >= 1000 ? `${qty/1000}k` : qty
  }

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4"
          >
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Transparent Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Print Pricing Calculator
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            Select your product and quantity for instant pricing
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setSelectedOption(category.id === "business-cards" ? "matt-laminated" : "a5-double")
                  setQuantity(500)
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:text-gray-900 hover:shadow-md'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </button>
            )
          })}
        </motion.div>

        {/* Main Pricing Card */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden mb-8"
        >
          {/* Options Tabs */}
          <div className="border-b border-gray-200 bg-gray-50 p-4">
            <div className="flex flex-wrap gap-2">
              {currentOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    selectedOption === option.id
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  {selectedOption === option.id && (
                    <motion.div
                      layoutId="activeOption"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{option.name}</span>
                  {option.popular && (
                    <span className="relative z-10 ml-2 text-xs bg-yellow-400 text-yellow-900 px-1.5 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Product Info */}
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedOption}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {currentOption.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{currentOption.description}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm text-gray-500">Size:</span>
                      <span className="font-medium text-gray-900">{currentOption.size}</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {currentOption.features.map((feature, index) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <Check className="h-4 w-4 text-green-500" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column - Pricing Calculator */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Price Calculator</h4>
                
                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Quantity:
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  >
                    {currentOption.tiers.map((tier) => (
                      <option key={tier.qty} value={tier.qty}>
                        {formatQty(tier.qty)} copies
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Display */}
                <div className="bg-white rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Total Price:</span>
                    <span className="text-3xl font-bold text-purple-600">
                      {formatCurrency(currentTier.price)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Price per item:</span>
                    <span className="font-medium text-gray-900">
                      {formatCurrency(unitPrice)} each
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link href={`/order/${selectedCategory}`}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 text-lg rounded-xl hover:shadow-lg transition-all">
                      Order Now - {formatCurrency(currentTier.price)}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  
                  <button
                    onClick={() => setShowComparison(!showComparison)}
                    className="w-full flex items-center justify-center gap-2 text-purple-600 font-medium py-2 hover:text-purple-700 transition-colors"
                  >
                    <Info className="h-4 w-4" />
                    {showComparison ? 'Hide' : 'Show'} price comparison
                    {showComparison ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
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
              className="overflow-hidden"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Comparison</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Quantity</th>
                        {currentOptions.map((option) => (
                          <th key={option.id} className="text-left py-3 px-4 text-sm font-semibold text-gray-900">
                            {option.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {currentOption.tiers.map((tier) => (
                        <tr key={tier.qty} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm font-medium text-gray-900">
                            {formatQty(tier.qty)} copies
                          </td>
                          {currentOptions.map((option) => {
                            const optionTier = option.tiers.find(t => t.qty === tier.qty)
                            return (
                              <td 
                                key={`${option.id}-${tier.qty}`}
                                className={`py-3 px-4 text-sm ${
                                  option.id === selectedOption 
                                    ? 'bg-purple-50 font-semibold text-purple-700'
                                    : 'text-gray-600'
                                }`}
                              >
                                {optionTier ? formatCurrency(optionTier.price) : '-'}
                                {optionTier && (
                                  <div className="text-xs text-gray-500">
                                    {formatCurrency(optionTier.price / optionTier.qty)}/item
                                  </div>
                                )}
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  * All prices exclude VAT. Free UK delivery on orders over £50.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
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
              <Clock className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">10k+</div>
              <div className="text-xs text-gray-500">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}