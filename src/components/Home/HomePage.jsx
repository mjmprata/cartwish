import React from 'react'
import HeroSection from './HeroSection'

import iphone from '../../assets/iphone-14-pro.webp'
import mac from '../../assets/mac-system-cut.jfif'
import FeaturedProducts from './FeaturedProducts'


const HomePage = () => {
  return (
    <div>
        {/* Hero Section */}
        <HeroSection
          title='Buy iPhone 14 Pro'
          subtitle='Experience the power of the latest iPhone 14 with our most pro camera ever.'
          link='product/65aebb3157b2001ce2eb5ec6'
          image={iphone}/>

        {/* Featured Section */}
        <FeaturedProducts />

        {/* Hero Section */}
        <HeroSection
          title='Build the ultimate setup'
          subtitle='You can add Studio Display and coulor-matched Magig accessories to your bag after configure your Mac mini.'
          link='/product/65aebb3157b2001ce2eb5ece'
          image={mac}/>
    </div>
  )
}

export default HomePage