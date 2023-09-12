import { Carousel, HomePageCard, CarouselCategories, CarouselProduct} from './'

function HomePage() {
  return (
    <div className='bg-amazonclone-background'>
            <div className='min-w-[1000px] max-w-[1500px] m-auto '>
                <Carousel />
                <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
                 <HomePageCard title={"we have a surprise for you"}
              img={"../images/home_grid_1.jpg"} link={"see terms and condtions"} />
                 <HomePageCard title={"we have a surprise for you"}
              img={"../images/home_grid_2.jpg"} link={"see terms and condtions"} />
               <HomePageCard title={"we have a surprise for you"}
              img={"../images/home_grid_3.jpg"} link={"see terms and condtions"} />
               <HomePageCard title={"we have a surprise for you"}
              img={"../images/home_grid_4.jpg"} link={"see terms and condtions"} />
               <HomePageCard title={"we have a surprise for you"}
              img={"../images/home_grid_5.jpg"} link={"see terms and condtions"} />
               <HomePageCard title={"we have a surprise for you"}
              img={"../images/home_grid_6.jpg"} link={"see terms and condtions"} />
               <HomePageCard title={"we have a surprise for you"}
              img={"../images/home_grid_7.jpg"} link={"see terms and condtions"} />
               <HomePageCard title={"we have a surprise for you"}
              img={"../images/home_grid_8.jpg"} link={"see terms and condtions"} />
               <div className='m-3 pt-8 xl:hidden'>
               <img className='' src="../images/banner_image_2.jpg" />
               </div>
          </div>
            </div>
            <CarouselProduct />
          <CarouselCategories />



       <div className='h-[200px]'>
          <img className='h-[100%] m-auto' src="../images/banner_image.jpg" />
        
        </div>   

    </div>
  )
}

export default HomePage
