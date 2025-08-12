import React from 'react'

const AdminHomePage = () => {

    const orders = [
        {
            _id:12345,
            user:{
                name:"John Doe",
            },
            totalPrice:100,
            status:"processing",
        },

    ];
  return (
    <div className='max-w-7xl mx-auto p-6 '>
        <h1 className='text-3xl font-bold mb-6'>Admin Dashboard</h1>
        <div className='grid gird-col-1 sm:grid-col-2 lg:grid-cols-3 gap-6'>
            <div className="p-4 shadow rounded-lg ">
                <h2 className='text-xl font-semibold '>Revenue</h2>
                <p className='text-2xl '>$1000</p>
            </div>
             <div className="p-4 shadow rounded-lg ">
                <h2 className='text-xl font-semibold '>Total Orders</h2>
                <p className='text-2xl '>200</p>
            </div>
             <div className="p-4 shadow rounded-lg ">
                <h2 className='text-xl font-semibold '>Revenue</h2>
                <p className='text-2xl '>$1000</p>
            </div>
        </div>
    </div>
  )
}

export default AdminHomePage