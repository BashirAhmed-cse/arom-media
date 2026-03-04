// components/sections/MenuPricing.tsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Menu,
  Utensils,
  Coffee,
  Wine,
  Pizza,
  Sparkles,
  Check,
  ArrowRight,
  Info,
  ChevronDown,
  ChevronUp,
  Printer,
  Brush,
  Download,
  Eye,
  Ruler,
  Layers,
  Palette,
  Clock,
  Truck,
  Award,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MenuPricing() {
  const [selectedMenuType, setSelectedMenuType] = useState("a5-double")
  const [selectedPaper, setSelectedPaper] = useState("premium-matt")
  const [selectedFinish, setSelectedFinish] = useState("standard")
  const [quantity, setQuantity] = useState(100)
  const [showComparison, setShowComparison] = useState(false)
  const [showSpecs, setShowSpecs] = useState(false)
  const [includeDesign, setIncludeDesign] = useState(false)

  // Menu Types
  const menuTypes = [
    {
      id: "a5-single",
      name: "A5 Single-sided",
      size: "A5 (148 x 210mm)",
      description: "Perfect for daily specials, lunch menus, or drink lists",
      icon: Coffee,
      popular: false,
      basePrice: 45,
      pages: "1 side",
      suitable: ["Cafés", "Coffee Shops", "Daily Specials"],
      tiers: [
        { qty: 50, price: 45 },
        { qty: 100, price: 75 },
        { qty: 250, price: 160 },
        { qty: 500, price: 280 },
        { qty: 1000, price: 450 },
      ],
    },
    {
      id: "a5-double",
      name: "A5 Double-sided",
      size: "A5 (148 x 210mm)",
      description: "Ideal for full menus with multiple sections",
      icon: Utensils,
      popular: true,
      basePrice: 55,
      pages: "2 sides",
      suitable: ["Restaurants", "Bistros", "Pubs"],
      tiers: [
        { qty: 50, price: 55 },
        { qty: 100, price: 95 },
        { qty: 250, price: 200 },
        { qty: 500, price: 350 },
        { qty: 1000, price: 550 },
      ],
    },
    {
      id: "a4-folded",
      name: "A4 Folded (4 pages)",
      size: "A4 folded to A5",
      description: "4-page menu - perfect for full restaurant menus",
      icon: Pizza,
      popular: false,
      basePrice: 75,
      pages: "4 pages",
      suitable: ["Full Service", "Fine Dining", "Wine Lists"],
      tiers: [
        { qty: 50, price: 75 },
        { qty: 100, price: 130 },
        { qty: 250, price: 280 },
        { qty: 500, price: 480 },
        { qty: 1000, price: 750 },
      ],
    },
    {
      id: "a3-folded",
      name: "A3 Folded (8 pages)",
      size: "A3 folded to A5",
      description: "8-page booklet - extensive menu options",
      icon: Wine,
      popular: false,
      basePrice: 120,
      pages: "8 pages",
      suitable: ["Extensive Menus", "Wine Lists", "Cocktail Books"],
      tiers: [
        { qty: 50, price: 120 },
        { qty: 100, price: 200 },
        { qty: 250, price: 420 },
        { qty: 500, price: 720 },
        { qty: 1000, price: 1200 },
      ],
    },
    {
      id: "dl-flyer",
      name: "DL Flyer Menu",
      size: "DL (99 x 210mm)",
      description: "Slim format - great for takeaway menus",
      icon: Menu,
      popular: false,
      basePrice: 40,
      pages: "1 or 2 sides",
      suitable: ["Takeaway", "Fast Food", "Price Lists"],
      tiers: [
        { qty: 50, price: 40 },
        { qty: 100, price: 65 },
        { qty: 250, price: 140 },
        { qty: 500, price: 240 },
        { qty: 1000, price: 380 },
      ],
    },
  ]

  // Paper Options
  const paperOptions = [
    {
      id: "standard-gloss",
      name: "Standard Gloss",
      description: "150gsm gloss - vibrant colours",
      multiplier: 1.0,
      color: "blue",
      suitable: "Cafés & Casual Dining",
    },
    {
      id: "premium-matt",
      name: "Premium Matt",
      description: "170gsm matt - elegant finish",
      multiplier: 1.15,
      color: "purple",
      suitable: "Restaurants & Bistros",
      popular: true,
    },
    {
      id: "luxury-textured",
      name: "Luxury Textured",
      description: "250gsm textured - premium feel",
      multiplier: 1.3,
      color: "amber",
      suitable: "Fine Dining",
    },
    {
      id: "waterproof",
      name: "Waterproof",
      description: "Synthetic - spill resistant",
      multiplier: 1.5,
      color: "green",
      suitable: "Outdoor & Bars",
    },
  ]

  // Finishing Options
  const finishingOptions = [
    {
      id: "standard",
      name: "Standard",
      description: "Cut & trimmed",
      price: 0,
    },
    {
      id: "rounded-corners",
      name: "Rounded Corners",
      description: "Soft touch finish",
      price: 15,
    },
    {
      id: "lamination",
      name: "Matt Lamination",
      description: "Protective coating",
      price: 25,
    },
    {
      id: "spot-uv",
      name: "Spot UV",
      description: "High gloss accents",
      price: 35,
    },
  ]

  const currentMenu = menuTypes.find(m => m.id === selectedMenuType) || menuTypes[0]
  const currentPaper = paperOptions.find(p => p.id === selectedPaper) || paperOptions[0]
  const currentFinish = finishingOptions.find(f => f.id === selectedFinish) || finishingOptions[0]

  // Calculate price
  const getBasePrice = () => {
    const tier = currentMenu.tiers.find(t => t.qty >= quantity) || 
                 currentMenu.tiers[currentMenu.tiers.length - 1]
    return Math.round(tier.price * currentPaper.multiplier)
  }

  const designFee = includeDesign ? 95 : 0
  const finishingFee = currentFinish.price
  const subtotal = getBasePrice() + designFee + finishingFee
  const unitPrice = subtotal / quantity

  // Animate price changes
  const [animatedPrice, setAnimatedPrice] = useState(subtotal)
  useEffect(() => {
    setAnimatedPrice(subtotal)
  }, [subtotal])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getPaperColor = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      amber: "from-amber-500 to-amber-600",
      green: "from-green-500 to-green-600"
    }
    return colors[color as keyof typeof colors] || "from-gray-500 to-gray-600"
  }

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4"
          >
            <Menu className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">Restaurant Menu Printing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Menu Design & Print
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600"
          >
            From café specials to fine dining - create the perfect menu for your establishment
          </motion.p>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
        >
          {/* Menu Type Selector */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 border-b border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-4 flex items-center gap-2">
              <Layers className="h-4 w-4 text-orange-600" />
              Select Menu Format
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {menuTypes.map((menu) => {
                const Icon = menu.icon
                return (
                  <motion.button
                    key={menu.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedMenuType(menu.id)}
                    className={`relative p-4 rounded-xl transition-all ${
                      selectedMenuType === menu.id
                        ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:shadow-md'
                    }`}
                  >
                    {menu.popular && (
                      <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                    <div className="text-center">
                      <Icon className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-sm font-bold">{menu.name}</div>
                      <div className="text-xs opacity-80 mt-1">{menu.pages}</div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-8">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left Column - Preview */}
              <div className="lg:col-span-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedMenuType}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    {/* Menu Preview Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Eye className="h-5 w-5 text-orange-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900">Menu Preview</h3>
                      </div>
                      
                      {/* Visual Menu Representation */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          {/* Main menu representation */}
                          <div 
                            className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg border-2 border-orange-300 shadow-lg overflow-hidden"
                            style={{
                              width: selectedMenuType.includes("a5") ? "140px" : 
                                     selectedMenuType.includes("a4") ? "180px" :
                                     selectedMenuType.includes("a3") ? "220px" : "120px",
                              height: selectedMenuType.includes("dl") ? "60px" : "180px",
                            }}
                          >
                            <div className="h-8 bg-gradient-to-r from-orange-500 to-amber-500 flex items-center px-3">
                              <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                              <div className="w-2 h-2 bg-white/60 rounded-full mr-1"></div>
                              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                            </div>
                            <div className="p-3">
                              <div className="h-2 w-16 bg-orange-300 rounded mb-2"></div>
                              <div className="h-2 w-12 bg-orange-200 rounded mb-3"></div>
                              <div className="space-y-1">
                                <div className="h-1.5 w-full bg-gray-300 rounded"></div>
                                <div className="h-1.5 w-3/4 bg-gray-300 rounded"></div>
                                <div className="h-1.5 w-5/6 bg-gray-300 rounded"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Page count indicator */}
                          <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {currentMenu.pages}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Size:</span>
                          <span className="font-medium text-gray-900">{currentMenu.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Ideal for:</span>
                          <span className="font-medium text-gray-900">{currentMenu.suitable[0]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Suitable For Tags */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Perfect for:</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentMenu.suitable.map((item) => (
                          <span key={item} className="bg-white px-3 py-1.5 rounded-full text-xs text-gray-600 shadow-sm border border-gray-100">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Middle Column - Options */}
              <div className="lg:col-span-5 space-y-6">
                {/* Paper Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <div className="flex items-center gap-2">
                      <Palette className="h-4 w-4 text-orange-600" />
                      Paper Quality
                    </div>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {paperOptions.map((paper) => (
                      <button
                        key={paper.id}
                        onClick={() => setSelectedPaper(paper.id)}
                        className={`relative p-3 rounded-xl text-left transition-all ${
                          selectedPaper === paper.id
                            ? `bg-gradient-to-r ${getPaperColor(paper.color)} text-white shadow-md`
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {paper.popular && (
                          <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                        <div className="text-sm font-bold">{paper.name}</div>
                        <div className="text-xs opacity-80 mt-1">{paper.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Finishing Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-orange-600" />
                      Finishing Options
                    </div>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {finishingOptions.map((finish) => (
                      <button
                        key={finish.id}
                        onClick={() => setSelectedFinish(finish.id)}
                        className={`p-3 rounded-xl text-center transition-all ${
                          selectedFinish === finish.id
                            ? 'bg-orange-600 text-white shadow-md'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <div className="text-sm font-bold">{finish.name}</div>
                        {finish.price > 0 && (
                          <div className="text-xs opacity-80">+{formatCurrency(finish.price)}</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <div className="flex items-center gap-2">
                      <Ruler className="h-4 w-4 text-orange-600" />
                      Quantity
                    </div>
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {currentMenu.tiers.map((tier) => (
                      <button
                        key={tier.qty}
                        onClick={() => setQuantity(tier.qty)}
                        className={`py-3 px-2 rounded-lg text-sm font-medium transition-all ${
                          quantity === tier.qty
                            ? 'bg-orange-600 text-white shadow-md'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {tier.qty} copies
                      </button>
                    ))}
                  </div>
                </div>

                {/* Design Service Toggle */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Brush className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Need Menu Design?</h4>
                        <p className="text-sm text-gray-600">Professional menu design service</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={includeDesign}
                        onChange={(e) => setIncludeDesign(e.target.checked)}
                      />
                      <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  {includeDesign && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 text-sm text-purple-600 bg-purple-100 rounded-lg p-2"
                    >
                      ✓ Professional menu design - £95 one-time fee
                    </motion.div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-xl"
                    onClick={() => setShowSpecs(!showSpecs)}
                  >
                    <Info className="h-4 w-4 mr-2" />
                    {showSpecs ? 'Hide' : 'View'} Specs
                  </Button>
                  <Link href="/quote" className="flex-1">
                    <Button variant="outline" className="w-full rounded-xl">
                      <Download className="h-4 w-4 mr-2" />
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
                      <ul className="grid grid-cols-2 gap-2 text-sm text-blue-800">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          Full colour both sides
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          Crop marks included
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          3mm bleed
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          PDF/X-1a ready
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          Free artwork check
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          24-48hr turnaround
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column - Price & Order */}
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl p-6 text-white sticky top-24">
                  <h3 className="text-lg font-semibold mb-4">Your Menu Price</h3>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${selectedMenuType}-${selectedPaper}-${selectedFinish}-${quantity}-${includeDesign}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-4"
                    >
                      <div>
                        <div className="text-4xl font-bold mb-1">
                          {formatCurrency(subtotal)}
                        </div>
                        <p className="text-white/80 text-sm">
                          + VAT | {formatCurrency(unitPrice)} per menu
                        </p>
                      </div>

                      <div className="space-y-2 py-4 border-y border-white/20">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/80">Menu type:</span>
                          <span className="font-medium">{currentMenu.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/80">Paper:</span>
                          <span className="font-medium">{currentPaper.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/80">Finish:</span>
                          <span className="font-medium">{currentFinish.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/80">Quantity:</span>
                          <span className="font-medium">{quantity} menus</span>
                        </div>
                        {includeDesign && (
                          <div className="flex justify-between text-sm">
                            <span className="text-white/80">Design service:</span>
                            <span className="font-medium">{formatCurrency(95)}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-3">
                        <Link href={`/order/menus?type=${selectedMenuType}&qty=${quantity}`}>
                          <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 rounded-xl py-6 text-lg font-semibold">
                            Order Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                        
                        <button
                          onClick={() => setShowComparison(!showComparison)}
                          className="w-full flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors py-2 text-sm"
                        >
                          <Star className="h-4 w-4" />
                          {showComparison ? 'Hide' : 'Compare'} menu options
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Menu Format Comparison</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Format</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Size</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Pages</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">50</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">100</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">250</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">500</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">1000</th>
                      </tr>
                    </thead>
                    <tbody>
                      {menuTypes.map((menu) => (
                        <tr 
                          key={menu.id} 
                          className={`border-b border-gray-100 hover:bg-gray-50 ${
                            menu.id === selectedMenuType ? 'bg-orange-50' : ''
                          }`}
                        >
                          <td className="py-3 px-4 text-sm font-medium text-gray-900">
                            {menu.name}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">{menu.size}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{menu.pages}</td>
                          {menu.tiers.map((tier) => (
                            <td key={tier.qty} className="py-3 px-4 text-sm text-gray-900">
                              {formatCurrency(tier.price)}
                              <div className="text-xs text-gray-500">
                                {formatCurrency(tier.price / tier.qty)}/item
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  * Prices for {currentPaper.name} paper. Design service and finishing options extra.
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Printer className="h-5 w-5 text-orange-600" />
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
              <div className="font-semibold text-gray-900">Restaurant</div>
              <div className="text-xs text-gray-500">Quality Guarantee</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Brush className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Design</div>
              <div className="text-xs text-gray-500">Service Available</div>
            </div>
          </div>
        </motion.div>

        {/* Restaurant Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 text-center"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">🍽️ Restaurant Menu Specialists</h3>
          <p className="text-gray-700 mb-4">Over 500+ restaurants trust us with their menu printing. Free design consultation available.</p>
          <Link href="/consultation">
            <Button variant="outline" className="bg-white border-orange-300 text-orange-700 hover:bg-orange-50">
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}