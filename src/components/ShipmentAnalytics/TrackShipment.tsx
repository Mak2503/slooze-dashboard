import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

interface TrackShipmentProps {
  shipmentId: string;
  from: string;
  to: string;
  progress?: number; // to be done at last
}

const TrackShipment: React.FC<TrackShipmentProps> = ({
  shipmentId,
  from,
  to,
  progress,
}) => {
  return (
    <div className='bg-primaryBg py-3 pl-4 rounded-lg'>
      <div className='flex justify-between'>
        <div className='space-y-2'>
          <p className='text-xxs opacity-50'>Shipment ID</p>
          <p className='font-bold'>{shipmentId}</p>
        </div>
        <Image src='/truck-with-progress.svg' alt='truck' width={110} height={55} />
      </div>
      <div className='flex items-center gap-2 text-xxs'>
        <div className='flex items-center gap-2'>
          <Image src="/from-point.svg" alt='from-point' width={12} height={12} />
          <p>{from}</p>
        </div>
        <MoveRight />
        <div className='flex items-center gap-2'>
          <Image src="/to-point.svg" alt='to-point' width={12} height={12} />
          <p>{to}</p>
        </div>
      </div>
    </div>
  )
}

export default TrackShipment