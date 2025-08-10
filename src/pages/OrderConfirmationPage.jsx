// import React from 'react'

// const checkout ={
//     _id: "12345",
//     createdAt:new Date(),
//     checkoutItems:[
//         {
//             productId:"1",
//             name:"Jacket",
//             color:"black",
//             size:"m",
//             price:150,
//             quantity:1,
//             image:"https://picsum.photos/150?random=1",

//         },
//           {
//             productId:"2",
//             name:"T-shirt",
//             color:"black",
//             size:"M",
//             price:120,
//             quantity:2,
//             image:"https://picsum.photos/150?random=1",

//         },
//     ],
//     shippingAddress:{
//         address:"123 Fashion Street ",
//         city:"NASHIK",
//         country:"INDIA",

//     }
// };

// const OrderConfirmationPage = () => {
//   return (
//     <div className='max-w-4xl mx-auto p-6 bg-white'>
//         <h1 className='text-4xl font-bold text-center text-emerald-700 mb-8'>
//             Thank You For Your Order!
//         </h1>
//             {checkout &&(
//                 <div className="p-6 rounded-lg border ">
//                     <div className="flex justify-between mb-20">
//                         {/* {order id and date} */}

//                         <div>
//                             <h2 className='text-xl font-semibold'>
//                             Order Id:{checkout._id}
//                             </h2>
//                             <p className='text-gray-500'>
//                                 Order date:{new Date(checkout.createdAt ).toLocaleString()}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             )

//             }
//     </div>
//   )
// }

// export default OrderConfirmationPage

import React from 'react';

const checkout = {
  _id: '12345',
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: '1',
      name: 'Jacket',
      color: 'black',
      size: 'm',
      price: 150,
      quantity: 1,
      image: 'https://picsum.photos/150?random=1',
    },
    {
      productId: '2',
      name: 'T-shirt',
      color: 'black',
      size: 'M',
      price: 120,
      quantity: 2,
      image: 'https://picsum.photos/150?random=2',
    },
  ],
  shippingAddress: {
    address: '123 Fashion Street ',
    city: 'NASHIK',
    country: 'INDIA',
  },
};

const OrderConfirmationPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You For Your Order!
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between items-start">
            {/* Left side - Order details */}
            <div>
              <h2 className="text-xl font-semibold">
                Order Id: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order date:{' '}
                {new Date(checkout.createdAt).toLocaleString()}
              </p>
            </div>

            {/* Right side - Shipping address */}
            <div className="text-right">
              <h2 className="text-xl font-semibold">Shipping Address</h2>
              <p>{checkout.shippingAddress.address}</p>
              <p>{checkout.shippingAddress.city}</p>
              <p>{checkout.shippingAddress.country}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
