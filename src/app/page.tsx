// app/page.tsx
import Hero from "@/components/sections/Hero"
import MenuPricing from "@/components/sections/MenuPricing"
import PaperSizePricing from "@/components/sections/PaperSizePricing"
import Pricing from "@/components/sections/Pricing"
import WorkGallery from "@/components/sections/WorkGallery"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Truck, Shield, Headphones } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing/>
      <PaperSizePricing/>
      <MenuPricing/>
      <WorkGallery/>
      {/* Features section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Arom Media?
            </h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Excellence in every print, precision in every design
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle>Premium Quality</CardTitle>
                <CardDescription>
                  Industry-leading printing technology
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle>Fast UK Delivery</CardTitle>
                <CardDescription>
                  Next day delivery available
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle>Quality Guarantee</CardTitle>
                <CardDescription>
                  100% satisfaction guarantee
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Headphones className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle>Expert Support</CardTitle>
                <CardDescription>
                  Dedicated UK-based team
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Upload your existing design or work with our expert designers to create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Upload Design Now
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Request Design Service
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}