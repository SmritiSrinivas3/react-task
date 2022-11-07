import React from 'react'
import Hero from '../../components/Hero/Hero'
import Card from '../../components/Card/Card'

const Home = () => {
  return (
    <div>
      <Hero />
        <div className="cardGroups">
          <Card />
          <Card />
          <Card />
        </div>
    </div>
  )
}

export default Home
