import React from 'react'

function ProductBadge({badge}) {
    if(bage==="choice"){
        return (
            <span className='text-xs xl:text-sm text-white bg-slate-800 p-1'>
              AMazon's 
              <span className='text-orange-500'>
            choice
            </span>
            </span>
          )
    }
    else if(badge === "seller"){

        return (
            <span className='text-xs xl:text-sm text-white bg-slate-800 p-1'>
              #1 Best seller
            </span>
          )
        }

    else if(badge === "limited"){
        return (
            <span className='text-xs xl:text-sm text-white bg-slate-800 p-1'>
              Limited time deal
            </span>
          )
    }
 
}

export default ProductBadge
