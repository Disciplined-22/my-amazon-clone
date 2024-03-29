import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Search } from './'

function Navbar() {
  return (
   <header  className='min-w-[1000px]'>
    <div className='flex bg-amazonclone text-white h-[60px]'>
   
        <div className='flex items-center m-4'>
          <img className='h-[35px] w-[100px] m-2' src={"../images/amazon.png"} />
              <div className='pr-4 pl-4'>  
                  <div className='text-xs xl:text-sm'>Deliever to </div>
                <div className='text-sm xl:text-base font-bold'>United Kingdom</div>
                </div>  
        </div>
        <div className='flex grow relative items-center'>
          <Search />        
        </div>
        <div className='flex items-center'><div className='pr-4 pl-4'>  
                  <div className='text-xs xl:text-sm'>Hello sign in </div>
                <div className='text-sm xl:text-base font-bold'>Accounts & lists</div>
                </div></div>
                <div className='mt-2'>  
                  <div className='text-xs xl:text-sm'>Returns</div>
                <div className='text-sm xl:text-base font-bold'>& Orders</div>
                </div>

                <div className='flex pr-3 pl-3'>
                <ShoppingCartIcon className='h-[48px]' />
                <div className='mt-7 text-xs xl:text-sm font-bold'>
                  Cart
                </div>

                </div>
    </div>
    <div className='flex bg-amazonclone-light_blue text-white space-x-3 text-sm p-2'>
          <div>Today's deal</div>
          <div>Customer serivce</div>
          <div>Today's deal</div>
          <div>Customer serivce</div>
          <div>Today's deal</div>
    </div>
   </header>
  )
}

export default Navbar
