// app/page.tsx
import HeroMain from "@/components/HeroMain"
import Hero from "@/components/sections/Hero"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Truck, Shield, Headphones } from 'lucide-react'

export default function Home() {
  return (
    <>
    <Hero/>
<HeroMain/>

     <WhyChooseUs/>
      
     
    </>
  )
}