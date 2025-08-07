import React, { useEffect, useState } from 'react'
import {FaFilter} from "react-icons/fa"
import FilterSidebar from '../components/Products/FilterSidebar';
const CollectionPage = () => {

const [products, setProducts] = useState([]);

useEffect (() => {
    setTimeout(() => {
        const fetchedProducts = [
      {
        _id:1,
        name: "Product 1",
        price:100,
        image: [{url:"https://picsum.photos/300/300?random=3" }],
      },
     {
        _id:2,
        name: "Product 2",
        price:100,
        image: [{url:"https://picsum.photos/300/300?random=4" }],
       },
     {
        _id:3,
        name: "Product 3",
        price:100,
        image: [{url:"https://picsum.photos/300/300?random=5" }],
       },
     {
        _id:4,
        name: "Product 4",
        price:100,
        image: [{url:"https://picsum.photos/300/300?random=6" }],
      },
     {
        _id:5,
        name: "Product 1",
        price:100,
        image: [{url:"https://picsum.photos/300/300?random=7" }],
      },
     {
        _id:6,
        name: "Product 2",
        price:100,
        image: [{url:"https://picsum.photos/300/300?random=8" }],
       },
     {
        _id:7,
        name: "Product 3",
        price:100,
        image: [{url:"https://picsum.photos/300/300?random=9" }],
       },
     {
        _id:8,
        name: "Product 4",
        price:100,
        image: [{url:"https://picsum.photos/300/300?random=10" }],
       },
    ]; 
    setProducts(fetchedProducts);      
    }, 1000);
}, []);

  return (
    <div className='flex flex-col lg:flex-row'>
        {/* {Mobile filter button} */}
        <button className='lg:hidden border p-2 flex justify-center items-center'>
        <FaFilter className='mr-2' />
        </button>

        {/* filter sidebar */}
        <FilterSidebar/>

    </div>
  )
}

export default CollectionPage