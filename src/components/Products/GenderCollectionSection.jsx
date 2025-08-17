import React from 'react'
import mensCollectionImage from"../../assets/men.jpg";
import womenCollectionImage from"../../assets/Women.jpg";
import { Link } from 'react-router-dom';
// import { newArrivals } from './NewArrivals';



const GenderCollectionSection = () => {
  return (
  <section className='py-14 px-5 lg:px-0'>
      <div className='container mx-auto flex flex-col md:flex-row gap-8 '>
        {/* {Women collecti on} */}
          <div className='relative flex-1'>
            <img src={womenCollectionImage} alt="Women's Collection"
            className='w-full h-[450px] object-cover' />
            <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-1'>
              <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                Women's Collection
              </h2>
              <Link to="/collection/all?gender=women" className="text-gray-900 underline">
              Shop Now
              </Link>
            </div>
          </div>

                {/* Mens collection */}

        <div className='relative flex-1'>
        <img src={mensCollectionImage} alt="men's Collection"
           className=' w-full h-[450px] object-cover' />
            <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-1'>
              <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                Men's Collection
              </h2>
                <Link to="/collection/all?gender=Men" className="text-gray-900 underline">
                    Shop Now  
                </Link>
            </div>
          </div>
      
      </div>  

    

  </section>

);    
};

export default GenderCollectionSection