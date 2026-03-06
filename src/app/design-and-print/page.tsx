// app/design-and-print/page.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Palette,
  Menu,
  CreditCard,
  Image,
  FileText,
  ArrowRight,
  Check,
  Clock,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DesignAndPrintPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    { 
      id: 'menu', 
      name: 'Restaurant Menu Design', 
      icon: Menu, 
      designFee: 30,
      description: 'Professional menu design that attracts customers',
      turnaround: '2-3 days',
      includes: ['Design concept', '3 revisions', 'Print-ready files']
    },
    { 
      id: 'business-card', 
      name: 'Business Card Design', 
      icon: CreditCard, 
      designFee: 25,
      description: 'Stand out with premium business cards',
      turnaround: '1-2 days',
      includes: ['2 design concepts', 'Unlimited revisions', 'Both sides design']
    },
    { 
      id: 'banner', 
      name: 'Banner & Sign Design', 
      icon: Image, 
      designFee: 35,
      description: 'Eye-catching banners for any occasion',
      turnaround: '2-3 days',
      includes: ['Custom artwork', '3 revisions', 'Multiple sizes']
    },
    { 
      id: 'poster', 
      name: 'Poster Design', 
      icon: FileText, 
      designFee: 30,
      description: 'Creative posters for events and promotions',
      turnaround: '1-2 days',
      includes: ['Original design', '2 revisions', 'High-res files']
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Design + Print Service</h1>
          <p className="text-xl text-gray-600">One-time design fee + printing cost. Free revisions included.</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl border-2 p-6 cursor-pointer transition-all
                  ${selectedService === service.id 
                    ? 'border-purple-600 shadow-lg' 
                    : 'border-gray-200 hover:border-purple-300'}`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="p-4 bg-purple-100 rounded-2xl">
                    <service.icon className="h-8 w-8 text-purple-600" />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    
                    {/* Includes */}
                    <div className="flex flex-wrap gap-3 mb-3">
                      {service.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-1 text-sm text-gray-500">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{service.turnaround}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span>Free revisions</span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Design Fee</div>
                    <div className="text-3xl font-bold text-purple-600">£{service.designFee}</div>
                    <div className="text-sm text-gray-500">+ printing cost</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            {selectedService ? (
              <Link href={`/design/quote?service=${selectedService}`}>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-lg rounded-xl">
                  Continue with Design + Print
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Button size="lg" disabled className="bg-gray-300 text-gray-500 px-12 py-6 text-lg rounded-xl">
                Select a service to continue
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}