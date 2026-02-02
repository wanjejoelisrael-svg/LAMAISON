import React from 'react'
import HeroSection from './HeroSection'
import Vuebiens from './Vuebiens'
import Searchbar from '../../components/Searchbar'

const Home : React.FC = () => {
  return (
    <div className='bg-white'>
      <HeroSection />
      <Searchbar />
      <Vuebiens />
    </div>
  )
}

export default Home
