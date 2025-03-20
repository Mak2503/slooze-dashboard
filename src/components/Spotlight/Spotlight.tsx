import React from 'react'
import Card from '../Common/Card'
import SpotlightMap from './SpotlightMap'

const Spotlight = () => {
  return (
    <Card className='rounded-3xl'>
      <div className='flex'>
        <SpotlightMap />
      </div>
    </Card>
  )
}

export default Spotlight