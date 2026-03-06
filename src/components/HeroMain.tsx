// app/page.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { 
  Printer,
  Palette,
  CreditCard,
  Image,
  FileText,
  ArrowRight,
  Clock,
  Truck,
  Shield,
  Star,
  X,
  Upload,
  Brush,
  Ruler,
  Layers,
  ChevronRight,
  Sparkles,
  ScrollText,
  Stamp,
  FolderOpen,
  BookOpen,
  Calendar,
  Check,
  Phone,
  Mail,
  MapPin,
  Award,
  TrendingUp,
  Users,
  Zap,
  type Icon as LucideIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import Link from "next/link"

type ServiceType = 'print' | 'design'

interface Service {
  id: string
  name: string
  icon: LucideIcon
  description: string
  basePrice?: number
  designFee?: number
  popular?: boolean
  gradient: string
  glowColor: string
}

interface ServiceOption {
  id: string
  name: string
  icon: LucideIcon
  basePrice: number
  description: string
  popular?: boolean
  premium?: boolean
  options: {
    sizes: Array<{
      id: string
      name: string
      dimensions: string
      price: number
      popular?: boolean
    }>
    papers: Array<{
      id: string
      name: string
      weight: string
      multiplier: number
      description: string
    }>
    finishes: Array<{
      id: string
      name: string
      price: number
      description: string
      premium?: boolean
    }>
    minQuantity: number
    maxQuantity: number
    quantitySteps: number[]
    hasSides?: boolean
    hasPages?: boolean
  }
}

interface OrderOptions {
  size: string
  sides?: 'single' | 'double'
  pages?: number
  quantity: number
  hasDesign: boolean
  paperType: string
  finishing: string
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
}

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotateX: -15,
    y: 50
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotateX: 0,
    y: 0,
    transition: { 
      type: "spring",
      damping: 25,
      stiffness: 200,
      duration: 0.6
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    rotateX: 15,
    y: 50,
    transition: { 
      duration: 0.4,
      ease: "easeInOut"
    }
  }
}

export default function Home() {
  const [serviceType, setServiceType] = useState<ServiceType>('print')
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 200 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const [orderOptions, setOrderOptions] = useState<OrderOptions>({
    size: 'A5',
    sides: 'double',
    pages: 8,
    quantity: 100,
    hasDesign: false,
    paperType: 'premium',
    finishing: 'standard'
  })

  // Handle window resize and initial size
  useEffect(() => {
    setIsLoaded(true)
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    handleResize() // Set initial size
    window.addEventListener('resize', handleResize)
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [mouseX, mouseY])

  // Print services with bold gradients
  const printServices: Service[] = [
    { 
      id: 'business-card', 
      name: 'Business Cards', 
      icon: CreditCard, 
      description: 'First impressions that last',
      basePrice: 15,
      popular: true,
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      glowColor: 'rgba(99,102,241,0.5)'
    },
    { 
      id: 'menu', 
      name: 'Restaurant Menus', 
      icon: ScrollText, 
      description: 'Culinary experiences on paper',
      basePrice: 25,
      popular: true,
      gradient: 'from-purple-600 via-pink-600 to-rose-600',
      glowColor: 'rgba(236,72,153,0.5)'
    },
    { 
      id: 'poster', 
      name: 'Posters', 
      icon: Image, 
      description: 'Make a statement',
      basePrice: 20,
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
      glowColor: 'rgba(16,185,129,0.5)'
    },
    { 
      id: 'banner', 
      name: 'Banners', 
      icon: Image, 
      description: 'Command attention',
      basePrice: 35,
      popular: true,
      gradient: 'from-orange-600 via-amber-600 to-yellow-600',
      glowColor: 'rgba(245,158,11,0.5)'
    },
    { 
      id: 'flyer', 
      name: 'Flyers', 
      icon: FileText, 
      description: 'Spread the word',
      basePrice: 18,
      gradient: 'from-indigo-600 via-blue-600 to-cyan-600',
      glowColor: 'rgba(59,130,246,0.5)'
    },
    { 
      id: 'brochure', 
      name: 'Brochures', 
      icon: BookOpen, 
      description: 'Tell your story',
      basePrice: 30,
      gradient: 'from-rose-600 via-pink-600 to-fuchsia-600',
      glowColor: 'rgba(244,114,182,0.5)'
    },
    { 
      id: 'sticker', 
      name: 'Stickers', 
      icon: Stamp, 
      description: 'Make your mark',
      basePrice: 20,
      gradient: 'from-amber-600 via-yellow-600 to-lime-600',
      glowColor: 'rgba(251,191,36,0.5)'
    },
    { 
      id: 'folder', 
      name: 'Presentation Folders', 
      icon: FolderOpen, 
      description: 'Professional presence',
      basePrice: 30,
      gradient: 'from-slate-600 via-gray-600 to-zinc-600',
      glowColor: 'rgba(75,85,99,0.5)'
    }
  ]

  // Design services
  const designServices: Service[] = [
    { id: 'menu-design', name: 'Menu Design', icon: ScrollText, description: 'Professional menu design', designFee: 30, gradient: 'from-purple-600 via-pink-600 to-rose-600', glowColor: 'rgba(236,72,153,0.5)' },
    { id: 'business-card-design', name: 'Business Card Design', icon: CreditCard, description: 'Stand out from the crowd', designFee: 25, gradient: 'from-blue-600 via-indigo-600 to-purple-600', glowColor: 'rgba(99,102,241,0.5)' },
    { id: 'banner-design', name: 'Banner Design', icon: Image, description: 'Eye-catching banners', designFee: 35, gradient: 'from-orange-600 via-amber-600 to-yellow-600', glowColor: 'rgba(245,158,11,0.5)' },
    { id: 'poster-design', name: 'Poster Design', icon: FileText, description: 'Impactful posters', designFee: 30, gradient: 'from-green-600 via-emerald-600 to-teal-600', glowColor: 'rgba(16,185,129,0.5)' },
    { id: 'flyer-design', name: 'Flyer Design', icon: FileText, description: 'Effective flyers', designFee: 25, gradient: 'from-indigo-600 via-blue-600 to-cyan-600', glowColor: 'rgba(59,130,246,0.5)' },
    { id: 'brochure-design', name: 'Brochure Design', icon: BookOpen, description: 'Comprehensive brochures', designFee: 40, gradient: 'from-rose-600 via-pink-600 to-fuchsia-600', glowColor: 'rgba(244,114,182,0.5)' }
  ]

  // Detailed options for each print service
  const serviceOptions: Record<string, ServiceOption> = {
    'business-card': {
      id: 'business-card',
      name: 'Business Cards',
      icon: CreditCard,
      basePrice: 15,
      description: 'First impressions that last',
      popular: true,
      options: {
        sizes: [
          { id: 'standard', name: 'Standard', dimensions: '85 × 55mm', price: 15, popular: true },
          { id: 'square', name: 'Square', dimensions: '55 × 55mm', price: 18 },
          { id: 'prestige', name: 'Prestige', dimensions: '90 × 60mm', price: 22 }
        ],
        papers: [
          { id: 'premium', name: 'Premium Silk', weight: '350gsm', multiplier: 1, description: 'Elegant silk finish' },
          { id: 'luxury', name: 'Luxury Matt', weight: '400gsm', multiplier: 1.3, description: 'Sophisticated matt texture' }
        ],
        finishes: [
          { id: 'standard', name: 'Classic Cut', price: 0, description: 'Clean, precise edges' },
          { id: 'spot-uv', name: 'Spot Gloss', price: 25, description: 'High-gloss highlights', premium: true },
          { id: 'foil-gold', name: 'Gold Foil', price: 45, description: 'Luxurious gold detailing', premium: true }
        ],
        minQuantity: 50,
        maxQuantity: 1000,
        quantitySteps: [50, 100, 250, 500, 1000],
        hasSides: true
      }
    },
    'menu': {
      id: 'menu',
      name: 'Restaurant Menus',
      icon: ScrollText,
      basePrice: 25,
      description: 'Culinary experiences on paper',
      popular: true,
      options: {
        sizes: [
          { id: 'A5', name: 'A5', dimensions: '148 × 210mm', price: 25, popular: true },
          { id: 'A4', name: 'A4', dimensions: '210 × 297mm', price: 35 }
        ],
        papers: [
          { id: 'premium', name: 'Premium Silk', weight: '300gsm', multiplier: 1, description: 'Elegant silk finish' },
          { id: 'waterproof', name: 'AquaProtect', weight: '300gsm', multiplier: 1.8, description: 'Fully waterproof' }
        ],
        finishes: [
          { id: 'standard', name: 'Natural Finish', price: 0, description: 'Elegant simplicity' },
          { id: 'lamination-matt', name: 'Soft Touch', price: 25, description: 'Velvety matt protection', premium: true },
          { id: 'uv-spot', name: 'Spot Gloss', price: 35, description: 'Selective highlighting', premium: true }
        ],
        minQuantity: 50,
        maxQuantity: 1000,
        quantitySteps: [50, 100, 250, 500, 1000],
        hasSides: true
      }
    },
    'poster': {
      id: 'poster',
      name: 'Posters',
      icon: Image,
      basePrice: 20,
      description: 'Make a statement',
      options: {
        sizes: [
          { id: 'A4', name: 'A4', dimensions: '210 × 297mm', price: 20, popular: true },
          { id: 'A3', name: 'A3', dimensions: '297 × 420mm', price: 28 }
        ],
        papers: [
          { id: 'premium', name: 'Premium Gloss', weight: '170gsm', multiplier: 1, description: 'Vibrant colours' },
          { id: 'luxury', name: 'Luxury Silk', weight: '200gsm', multiplier: 1.3, description: 'Professional finish' }
        ],
        finishes: [
          { id: 'standard', name: 'Natural', price: 0, description: 'Classic finish' },
          { id: 'lamination-gloss', name: 'Gloss Shield', price: 30, description: 'Protective gloss', premium: true }
        ],
        minQuantity: 1,
        maxQuantity: 500,
        quantitySteps: [1, 5, 10, 25, 50, 100, 250, 500],
        hasSides: true
      }
    },
    'banner': {
      id: 'banner',
      name: 'Banners',
      icon: Image,
      basePrice: 35,
      description: 'Command attention',
      popular: true,
      options: {
        sizes: [
          { id: 'small', name: 'Small', dimensions: '1000 × 500mm', price: 35 },
          { id: 'medium', name: 'Medium', dimensions: '1500 × 500mm', price: 48, popular: true }
        ],
        papers: [
          { id: 'premium', name: 'Premium PVC', weight: '440gsm', multiplier: 1, description: 'Durable outdoor' },
          { id: 'luxury', name: 'Mesh Airflow', weight: '440gsm', multiplier: 1.3, description: 'Wind-permeable' }
        ],
        finishes: [
          { id: 'standard', name: 'Hem & Eyelets', price: 0, description: 'Ready to hang' },
          { id: 'stand', name: 'Roll-up Stand', price: 85, description: 'Complete display system', premium: true }
        ],
        minQuantity: 1,
        maxQuantity: 50,
        quantitySteps: [1, 2, 5, 10, 20, 50]
      }
    },
    'flyer': {
      id: 'flyer',
      name: 'Flyers',
      icon: FileText,
      basePrice: 18,
      description: 'Spread the word',
      options: {
        sizes: [
          { id: 'DL', name: 'DL', dimensions: '99 × 210mm', price: 18, popular: true },
          { id: 'A5', name: 'A5', dimensions: '148 × 210mm', price: 22 }
        ],
        papers: [
          { id: 'premium', name: 'Premium Gloss', weight: '150gsm', multiplier: 1, description: 'Bright and vibrant' },
          { id: 'luxury', name: 'Luxury Silk', weight: '170gsm', multiplier: 1.2, description: 'Professional touch' }
        ],
        finishes: [
          { id: 'standard', name: 'Standard', price: 0, description: 'Clean and simple' },
          { id: 'folded', name: 'Elegant Fold', price: 15, description: 'Half-fold design', premium: true }
        ],
        minQuantity: 100,
        maxQuantity: 5000,
        quantitySteps: [100, 250, 500, 1000, 2500, 5000],
        hasSides: true
      }
    }
  }

  const getCurrentService = () => {
    if (!selectedService || serviceType === 'design') return null
    return serviceOptions[selectedService]
  }

  const calculatePrice = () => {
    const service = getCurrentService()
    if (!service) return 0

    const sizeOption = service.options.sizes.find(s => s.id === orderOptions.size)
    const basePrice = sizeOption?.price || service.basePrice
    
    const minQty = service.options.minQuantity
    const qtyMultiplier = Math.max(1, Math.ceil(orderOptions.quantity / minQty))
    
    const paperOption = service.options.papers.find(p => p.id === orderOptions.paperType)
    const paperMultiplier = paperOption?.multiplier || 1
    
    const sidesMultiplier = orderOptions.sides === 'double' ? 1.5 : 1
    
    const finishOption = service.options.finishes.find(f => f.id === orderOptions.finishing)
    const finishingCost = finishOption?.price || 0
    
    const designFee = !orderOptions.hasDesign ? 35 : 0
    
    const printingCost = basePrice * qtyMultiplier * paperMultiplier * sidesMultiplier
    
    return printingCost + finishingCost + designFee
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId)
    if (serviceType === 'print') {
      const service = serviceOptions[serviceId]
      if (service) {
        setOrderOptions({
          size: service.options.sizes.find(s => s.popular)?.id || service.options.sizes[0].id,
          sides: service.options.hasSides ? 'double' : undefined,
          pages: service.options.hasPages ? 8 : undefined,
          quantity: service.options.minQuantity,
          hasDesign: false,
          paperType: service.options.papers[0].id,
          finishing: service.options.finishes[0].id
        })
      }
      setIsModalOpen(true)
    } else {
      window.location.href = `/design/${serviceId}`
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedService(null), 300)
  }

  // Generate particles only on client side
  const particles = windowSize.width > 0 
    ? [...Array(20)].map((_, i) => ({
        id: i,
        x: Math.random() * windowSize.width,
        y: Math.random() * windowSize.height,
        duration: Math.random() * 10 + 10
      }))
    : []

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(255,51,102,0.1),transparent_50%)]" />
        
        {/* Floating Particles - Only render on client */}
        {windowSize.width > 0 && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
            }}
            animate={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Mouse Follow Glow */}
      <motion.div
        className="fixed w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl pointer-events-none hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <main className="relative z-10">
        {/* Hero Section */}
    

        {/* Services Grid Section */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4">
          <div className="container mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="max-w-7xl mx-auto"
            >
              {/* Section Header */}
              <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 lg:mb-16">
                <Badge className="mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border-white/10 text-white text-xs sm:text-sm">
                  <Zap className="h-3 w-3 mr-1 sm:mr-2 text-purple-400" />
                  Creative Excellence
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                  Choose your{' '}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                    craft
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-white/40 max-w-2xl mx-auto px-4">
                  Each product is meticulously crafted with attention to detail and finished to perfection
                </p>
              </motion.div>

              {/* Card Grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {(serviceType === 'print' ? printServices : designServices).map((service) => {
                  const Icon = service.icon
                  const isHovered = hoveredCard === service.id
                  
                  return (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      onHoverStart={() => setHoveredCard(service.id)}
                      onHoverEnd={() => setHoveredCard(null)}
                      whileHover={{ 
                        scale: 1.02,
                        y: -5
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group cursor-pointer"
                      onClick={() => handleServiceClick(service.id)}
                    >
                      <Card className="relative h-full bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
                        {/* Animated Gradient Background */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${service.glowColor}, transparent 70%)`
                          }}
                          animate={isHovered ? {
                            scale: [1, 1.2, 1],
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        {/* Glowing Border */}
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                          style={{
                            boxShadow: `0 0 20px ${service.glowColor}`
                          }}
                        />

                        <CardContent className="relative p-3 sm:p-4 lg:p-6 z-10">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={cn(
                              "w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br p-2 sm:p-3 mb-2 sm:mb-3 lg:mb-4",
                              service.gradient
                            )}
                          >
                            <Icon className="w-full h-full text-white" />
                          </motion.div>
                          
                          {/* Popular Badge */}
                          <AnimatePresence>
                            {service.popular && (
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="absolute top-2 right-2 sm:top-3 sm:right-3"
                              >
                                <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 text-[10px] sm:text-xs">
                                  <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                                  <span className="hidden xs:inline">Popular</span>
                                </Badge>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          
                          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400">
                            {service.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-white/40 mb-2 sm:mb-3 lg:mb-4 line-clamp-2">{service.description}</p>
                          
                          <div className="flex items-baseline justify-between">
                            <div>
                              <span className="text-lg sm:text-xl lg:text-2xl font-black text-white">
                                £{service.basePrice || service.designFee}
                              </span>
                              {service.basePrice && (
                                <span className="text-[10px] sm:text-xs text-white/40 ml-1">+</span>
                              )}
                            </div>
                            <motion.div
                              animate={{ x: isHovered ? 5 : 0 }}
                              className="text-white/40 group-hover:text-white"
                            >
                              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            </motion.div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Modal */}
        <AnimatePresence>
          {isModalOpen && selectedService && serviceType === 'print' && (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-xl"
              onClick={closeModal}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 bg-gradient-to-r from-gray-900 via-purple-900/20 to-gray-900 p-4 sm:p-6 lg:p-8 border-b border-white/10 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 min-w-0">
                      <motion.div
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: "spring" }}
                        className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl flex-shrink-0"
                      >
                        {(() => {
                          const Icon = serviceOptions[selectedService].icon
                          return <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                        })()}
                      </motion.div>
                      <div className="min-w-0">
                        <motion.h3
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white mb-0.5 sm:mb-1 truncate"
                        >
                          Configure your{' '}
                          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {serviceOptions[selectedService].name}
                          </span>
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-white/40 text-xs sm:text-sm truncate"
                        >
                          Tailor every detail to perfection
                        </motion.p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={closeModal}
                      className="bg-white/10 p-1.5 sm:p-2 rounded-lg hover:bg-white/20 transition-colors flex-shrink-0"
                    >
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </motion.button>
                  </div>
                </div>

                <div className="p-3 sm:p-4 lg:p-6 xl:p-8">
                  <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {/* Options Column */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-4 sm:space-y-5 lg:space-y-6"
                    >
                      {/* Size Selection */}
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-white/60 mb-2 sm:mb-3">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <Ruler className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
                            Size
                          </div>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                          {serviceOptions[selectedService].options.sizes.map((size, index) => (
                            <motion.button
                              key={size.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + index * 0.05 }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setOrderOptions({...orderOptions, size: size.id})}
                              className={cn(
                                "relative p-2 sm:p-2.5 lg:p-3 rounded-lg text-center transition-all duration-300 border-2",
                                orderOptions.size === size.id
                                  ? 'border-purple-500 bg-purple-500/20 text-white'
                                  : 'border-white/10 hover:border-purple-500/50 text-white/60 hover:text-white'
                              )}
                            >
                              {size.popular && (
                                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-amber-900 text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded-full">
                                  Popular
                                </span>
                              )}
                              <div className="text-xs sm:text-sm font-medium">{size.name}</div>
                              <div className="text-[8px] sm:text-[10px] opacity-60 mt-0.5">{size.dimensions}</div>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Sides Selection */}
                      {serviceOptions[selectedService].options.hasSides && (
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-white/60 mb-2 sm:mb-3">
                            <div className="flex items-center gap-1 sm:gap-2">
                              <Layers className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
                              Printing
                            </div>
                          </label>
                          <div className="flex gap-2 sm:gap-3">
                            {(['single', 'double'] as const).map((side, index) => (
                              <motion.button
                                key={side}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setOrderOptions({...orderOptions, sides: side})}
                                className={cn(
                                  "flex-1 p-2 sm:p-3 lg:p-4 rounded-lg text-center transition-all duration-300 border-2",
                                  orderOptions.sides === side
                                    ? 'border-purple-500 bg-purple-500/20 text-white'
                                    : 'border-white/10 hover:border-purple-500/50 text-white/60 hover:text-white'
                                )}
                              >
                                <div className="text-xs sm:text-sm font-medium mb-0.5 capitalize">{side}-sided</div>
                                <div className="text-[8px] sm:text-[10px] opacity-60">
                                  {side === 'single' ? 'One side' : 'Both sides'}
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Quantity */}
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-white/60 mb-2 sm:mb-3">
                          Quantity
                        </label>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 sm:gap-2">
                          {serviceOptions[selectedService].options.quantitySteps.map((qty, index) => (
                            <motion.button
                              key={qty}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + index * 0.03 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setOrderOptions({...orderOptions, quantity: qty})}
                              className={cn(
                                "p-1.5 sm:p-2 lg:p-3 rounded-lg text-center transition-all duration-300 border-2 text-xs sm:text-sm",
                                orderOptions.quantity === qty
                                  ? 'border-purple-500 bg-purple-500/20 text-white'
                                  : 'border-white/10 hover:border-purple-500/50 text-white/60 hover:text-white'
                              )}
                            >
                              {qty}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Design Option */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-purple-500/20"
                      >
                        <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
                          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                            <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg flex-shrink-0">
                              <Brush className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-purple-400" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-medium text-white text-xs sm:text-sm truncate">Design Service</h4>
                              <p className="text-[10px] sm:text-xs text-white/40 truncate">
                                {orderOptions.hasDesign 
                                  ? 'You have a design ready' 
                                  : 'Let our designers create'}
                              </p>
                            </div>
                          </div>
                          <motion.label
                            whileTap={{ scale: 0.95 }}
                            className="relative inline-flex items-center cursor-pointer flex-shrink-0"
                          >
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={orderOptions.hasDesign}
                              onChange={(e) => setOrderOptions({...orderOptions, hasDesign: e.target.checked})}
                            />
                            <div className="w-8 sm:w-10 lg:w-12 h-4 sm:h-5 lg:h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-4 sm:peer-checked:after:translate-x-5 lg:peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-3 sm:after:h-4 lg:after:h-5 after:w-3 sm:after:w-4 lg:after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </motion.label>
                        </div>

                        <AnimatePresence>
                          {!orderOptions.hasDesign && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-purple-500/20"
                            >
                              <div className="flex items-center justify-between text-[10px] sm:text-xs">
                                <span className="text-white/40">Design fee (one-time)</span>
                                <span className="font-medium text-white">£35</span>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <AnimatePresence>
                          {orderOptions.hasDesign && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 sm:mt-3"
                            >
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="border-2 border-dashed border-purple-500/30 rounded-lg p-3 sm:p-4 text-center bg-white/5 cursor-pointer hover:border-purple-500/50 transition-colors"
                              >
                                <Upload className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-purple-400 mx-auto mb-1 sm:mb-2" />
                                <p className="text-[10px] sm:text-xs font-medium text-white mb-0.5">Upload your design</p>
                                <p className="text-[8px] sm:text-[10px] text-white/40 mb-2">PDF, AI, PSD, JPG</p>
                                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xs sm:text-sm h-7 sm:h-8 px-2 sm:px-3">
                                  Choose File
                                </Button>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>

                    {/* Price Column */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="lg:sticky lg:top-24 h-fit"
                    >
                      <Card className="bg-gradient-to-br from-white/5 to-white/0 border-white/10 overflow-hidden backdrop-blur-xl">
                        <CardContent className="p-3 sm:p-4 lg:p-5 xl:p-6">
                          <h3 className="text-xs sm:text-sm font-light text-white/60 mb-3 sm:mb-4">Your quote</h3>

                          <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-1"
                          >
                            {formatCurrency(calculatePrice())}
                          </motion.div>
                          <p className="text-white/20 text-[10px] sm:text-xs mb-3 sm:mb-4">+ VAT | Estimated total</p>

                          <Separator className="bg-white/10 mb-3 sm:mb-4" />

                          <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                            {[
                              { label: 'Size', value: serviceOptions[selectedService].options.sizes.find(s => s.id === orderOptions.size)?.name },
                              orderOptions.sides && { label: 'Printing', value: `${orderOptions.sides}-sided` },
                              { label: 'Quantity', value: orderOptions.quantity },
                              !orderOptions.hasDesign && { label: 'Design fee', value: '£35' }
                            ].filter(Boolean).map((item, index) => (
                              <motion.div
                                key={item?.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                                className="flex justify-between text-[10px] sm:text-xs"
                              >
                                <span className="text-white/40">{item?.label}</span>
                                <span className="font-medium text-white">{item?.value}</span>
                              </motion.div>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Link href={`/order/${selectedService}`}>
                                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg py-3 sm:py-4 text-xs sm:text-sm font-semibold">
                                  Continue to Order
                                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                                </Button>
                              </Link>
                            </motion.div>

                           
                          </div>

                          <div className="grid grid-cols-3 gap-1 sm:gap-2 mt-3 sm:mt-4 text-center">
                            {[
                              { icon: Truck, label: 'Free UK delivery' },
                              { icon: Shield, label: 'Quality assured' },
                              { icon: Clock, label: '24-48hr' }
                            ].map((item, index) => (
                              <motion.div
                                key={index}
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.2 }}
                              >
                                <item.icon className="h-3 w-3 sm:h-4 sm:w-4 mx-auto mb-0.5 sm:mb-1 text-white/40" />
                                <span className="text-[8px] sm:text-[10px] text-white/40">{item.label}</span>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <section className="relative py-16 sm:py-24 lg:py-32 px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {[
                  { value: '10k+', label: 'Happy Customers', icon: Users },
                  { value: '15+', label: 'Years Experience', icon: Award },
                  { value: '50k+', label: 'Orders Completed', icon: TrendingUp },
                  { value: '100%', label: 'Satisfaction Rate', icon: Star }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center"
                    >
                      <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                    </motion.div>
                    <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-white mb-0.5 sm:mb-1">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-white/40">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
          
          <div className="container relative mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge className="mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border-white/20 text-white text-xs sm:text-sm">
                <Sparkles className="h-3 w-3 mr-1 sm:mr-2 text-purple-400" />
                Start Your Project
              </Badge>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6">
                Ready to create{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  something amazing?
                </span>
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-white/60 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto px-4">
                Whether you need a quick quote or design advice, our team is here to help bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-gray-800 hover:bg-white/10 hover:text-amber-100 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    077 37062865
                  </Button>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-8 sm:mt-12 lg:mt-16 text-xs sm:text-sm"
              >
                <div className="flex items-center justify-center gap-2 text-white/40">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="truncate">hello@arommedia.co.uk</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/40">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>Mon-Fri: 9am - 6pm</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/40">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>London, UK</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}