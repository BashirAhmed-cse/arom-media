// components/sections/WhyChooseUs.tsx
"use client"

import { motion } from "framer-motion"
import { 
  CheckCircle, 
  Truck, 
  Shield, 
  Headphones,
  Sparkles,
  Award,
  Clock,
  Users,
  Star,
  Zap
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

const features = [
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Premium Quality",
    description: "Industry-leading printing technology",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    glowColor: "rgba(99,102,241,0.5)",
    stats: "10k+ prints"
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Fast UK Delivery",
    description: "Next day delivery available",
    gradient: "from-purple-600 via-pink-600 to-rose-600",
    glowColor: "rgba(236,72,153,0.5)",
    stats: "24-48hr"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee",
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    glowColor: "rgba(16,185,129,0.5)",
    stats: "100%"
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "Expert Support",
    description: "Dedicated UK-based team",
    gradient: "from-orange-600 via-amber-600 to-yellow-600",
    glowColor: "rgba(245,158,11,0.5)",
    stats: "24/7"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gray-50/50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(255,51,102,0.05),transparent_50%)]" />
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-200/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [null, "-20%"],
              x: [null, `${Math.random() * 20 - 10}%`],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-white border-purple-200 text-purple-700">
            <Sparkles className="h-3.5 w-3.5 mr-2 text-purple-500" />
            Why Choose Us
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Excellence in{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Every Print
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Precision in every design, delivered with care across the UK
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative"
              >
                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${feature.glowColor}, transparent 70%)`
                  }}
                />
                
                <Card className="relative h-full bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-transparent transition-all duration-300 overflow-hidden">
                  {/* Gradient Border on Hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, ${feature.glowColor}20, transparent)`
                    }}
                  />
                  
                  <CardContent className="p-6 text-center relative z-10">
                    {/* Icon with Gradient */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring" }}
                      className="flex justify-center mb-4"
                    >
                      <div className={cn(
                        "relative p-3 rounded-xl bg-gradient-to-br text-white",
                        feature.gradient
                      )}>
                        {feature.icon}
                        
                        {/* Floating Sparkle */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="absolute -top-1 -right-1"
                        >
                          <Sparkles className="h-3 w-3 text-yellow-300" />
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-3">
                      {feature.description}
                    </p>
                    
                    {/* Stat Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="inline-block"
                    >
                      <Badge variant="outline" className="bg-white border-gray-200 text-gray-700">
                        <Zap className="h-3 w-3 mr-1 text-purple-500" />
                        {feature.stats}
                      </Badge>
                    </motion.div>
                    
                    {/* Decorative Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-purple-200 to-transparent"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: <Award className="h-5 w-5" />, text: "10+ Years Excellence" },
              { icon: <Users className="h-5 w-5" />, text: "10k+ Happy Clients" },
              { icon: <Star className="h-5 w-5" />, text: "4.9/5 Trustpilot" },
              { icon: <Clock className="h-5 w-5" />, text: "24-48hr Turnaround" }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 text-gray-600"
              >
                <span className="text-purple-600">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  )
}