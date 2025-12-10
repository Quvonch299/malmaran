import Features from '@/components/features'
import Hero from '@/components/Hero'
import InfiniteLine from '@/components/InfiniteLine'
import Navbar from '@/components/Navbar'
import Section1 from '@/components/Section1'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <InfiniteLine/>
      <Section1/>
      <Features/>
    </div>
  )
}
