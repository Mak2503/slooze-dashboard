import React from 'react'
import Card from '../Common/Card'
import SpotlightMap from './SpotlightMap'
import TopItemsList from './TopItemsList'
import { topItems } from '@/utils/mock-data'

const Spotlight = () => {
  return (
    <Card className='rounded-3xl'>
      <div className='flex gap-4 w-full'>
        <SpotlightMap />
        <div className='w-7/12 flex gap-4'>
          <TopItemsList title='Top Items Sold' items={topItems} />
          <TopItemsList title='Top Items Purchased' items={topItems} />
        </div>
      </div>
    </Card>
  )
}

export default Spotlight