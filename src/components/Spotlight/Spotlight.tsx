import Card from '../Common/Card'
import SpotlightMap from './SpotlightMap'
import TopItemsList from './TopItemsList'
import { topItems } from '@/utils/mock-data'

const Spotlight = () => {
  return (
    <Card className='rounded-3xl'>
      <div className='flex w-full gap-4'>
        <SpotlightMap />
        <div className='flex w-7/12 gap-4'>
          <TopItemsList title='Top Items Sold' items={topItems} />
          <TopItemsList title='Top Items Purchased' items={topItems} />
        </div>
      </div>
    </Card>
  )
}

export default Spotlight