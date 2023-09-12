import { StarIcon } from '@heroicons/react/24/outline'
import React from 'react'

function ProductsRatings(props) {
  const starNumber = props.avgRating;
  const ratingNumber = props.ratings;
  
    return (
    <div className='flex'>
        {Array.from({length :starNumber}, (_,i) => <StarIcon key={i} className='stroke-[orange] fill-[orange] h-[20px]' />)}
        {Array.from({length :5 - starNumber}, (_,i) => <StarIcon key={i} className='stroke-[orange]  h-[20px]' />)}
      <span className='ml-3 text-blue-500'>{ratingNumber} ratings</span>
    
    </div>
  )
}

export default ProductsRatings
