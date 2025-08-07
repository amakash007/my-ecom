import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {

const [searchParams,setSearchParams] = useSearchParams();
const [filters, setFilters] = useState({

    category:"",
    gender:"",
    color:"",
    size:[],
    meterial:[],
    brand:[],
    minPrice:0,
    maxPrice:100,

});

const [priceRange,setPriceRange ]= useState([0,100]);

const categories =["Top Wear" ,"Bottom Wear"];

const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
];

const sizes = ["XS","S","M","L","XL","XXL"];
    const materials =[
        "Cotton",
        "Wool",
        "Denim",
        "Silk",
        "Linen",
        "Polyester",
        "Viscose",
        "Fleece",
    ];

    const brands=[
        "Urben Treads",
        "Mordern Fit",
        "Street Style",
        "Beach Breeze",
        "Fashionista",
        "ChicStyle",
    ];

    const genders = ["Men","Women"];

    useEffect(() =>{
        const params = Object.fromEntries([...searchParams]);

        setFilters({
            category:params.category || "", 
            gender:params.gender  || "", 
            color:params.color || "",
            size:params.size? params.size.split(","): [],
            material: params.material ? params.material.split(",") : [],
            brand:params.brand? params.brand.split(","): [],
            minPrice:params.minPrice || 0,
            maxPrice:params.maxPrice || 100,
        });
        setPriceRange([0,params.maxPrice || 100]);
  },      [searchParams]);

  return (
    <div className='p-4'>
        <h3 className='text-xl font-medium text-gray-800 mb-4  '>Filter</h3>

        {/* Cateory Filter */}
        <label className='block text-gray-600 font-medium mb-2 '>Category</label>  
        {categories.map((category) =>(
            <div key={category} className='flex items-center mb-1 '>
                <input type="radio" name="category"
                 className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300' />
            
                <span className="text-gray-700  ">{category}</span>
            </div>
        ))}      
    </div>
  )
}

export default FilterSidebar