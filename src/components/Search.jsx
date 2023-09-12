import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Search() {
  return (
    <div className='w-[100%]'> 
        <div className='flex items-center text-black h-10 '>
            <select className='p-2 bg-grey-300 h-[100%] text-black border text-xs xl:text-sm'>
                <option value="">All</option>
                <option value="">Deals</option>
                <option value="">Amazon</option>
                <option value="">Fashion</option>
                <option value="">Computers</option>
                <option value="">Home</option>
                <option value="">Mobiles</option>
            </select>
                <input className='flex items-center h-[100%] w-[100%]  text-black type="text" '/>
            <button className='w-[45px] h-[100%] bg-amazonclone-yellow'>
                <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
            </button>

        </div>
</div>
  )
}

export default Search
