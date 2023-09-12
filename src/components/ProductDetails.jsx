import { ProductBadge, ProductRatings } from './'

function ProductDetails({product, ratings}) {
  return (
    <div className='mb-1'>
            <div className='text-xl xl:text-2xl mb-1'>{product.title}</div>
            <div className='text-sm xl:text-base font-medium mb-1'>by <span className='text-blue-500'>{product.brand}</span></div>
            { ratings &&
                <div className='text-sm xl:text-base mb-1'>ProductRatings avgRating={product.avgRating}
                ratings={product.ratings}
                </div>
            }
            <div className='text-sm xl:text-base font-medium mb-1'>{product.avgRating}</div>
            <div className='text-sm xl:text-base font-medium mb-1'>{product.attribute}</div>
            <div className='text-sm xl:text-base font-medium mb-1'>{product.badge}</div>
          <div><ProductBadge badge={product.badge} /></div>
    </div>
  )
}

export default ProductDetails
