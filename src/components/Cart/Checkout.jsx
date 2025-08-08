import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PayPalButton from './PayPalButton';

const cart ={
    products:[
        {
        name:"Stylish Jacket",
        size:"m",
        color:"black",
        price:120,
        image:"hhtps://picsum.photos/150?random=1"
        },
        {
        name:"Casual Sneakers",
        size:"42",
        color:"White",
        price:75,
        image:"hhtps://picsum.photos/150?random=2"
        },
    ],
    totalPrice:195,
}

const Checkout = () => {

    const navigate = useNavigate();
    const [checkoutId,setCheckoutId] = useState(null)
    const [shippingAddress, setShippingAdress] = useState({
        firstName:"",
        lastName:"",
        address: "",
        city:"",
        postalCode:"",
        country:"",
        phone:"",
    });

const handleCreateCheckout = (e) =>{
    e.preventDefault();
    setCheckoutId(123);
}

const handlePaymentSucess = (details) =>{
    console.log("Payment Sucessful,details");
    navigate("/order-confirmation")
}

  return (
    <div className='grid grid-cols-1 lg:grid:cols-2 gap-8 max-w-7xl mx-auto px-8 tracking-tighter'>
            {/* left section */}

        <div className="bg-white rounded-lg p-8">
            <h2 className='text-2xl uppercase mb-6 '>Checkout</h2>
            <form onSubmit={handleCreateCheckout}>
                        <h3 className='text-lg mb-4'>Contact Details</h3>
                        <div className='mb-4'>
                        <label className='block text-gray-700 '>Email</label>
                        <input type="email" value="user@example.com" 
                        className='w-96 p-2 border rounded' disabled />
                    </div>
                      <h3 className='text-lg mb-4 '>Delivery</h3>
                <div className='mb-4  grid grid-cols-2 gap-2'> 
                    <div>
                        <label className='block text-gray-700'>First Name</label>
                        <input type="text" 
                        value={shippingAddress.firstName}
                         onChange={(e) =>
                            setShippingAdress({
                                ...shippingAddress,firstName:e.target.value,
                            })
                         }
                         className='w-full p-2 border rounded'
                         required
                          />
                    </div>
                    <div>
                        <label className='block text-gray-700'>Last Name</label>
                        <input type="text" 
                        value={shippingAddress.lastName}
                         onChange={(e) =>
                            setShippingAdress({
                                ...shippingAddress,lastName:e.target.value,
                            })
                         }
                         className='w-full p-2 border rounded'
                         required
                          />
                    </div>
                </div>
        <div className="mb-4">
          <label className='block text-gray-700'>Address</label>
            <input type="text" 
            value={shippingAddress.address} 
                onChange={(e) => setShippingAdress
                    ({...shippingAddress,address: e.target.value,
                     })
                    }
                    className='w-full p-2 border rounded'
                    required
                    />
        </div> 
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
             <label className='block text-gray-700'>City</label>
              <input type="text" 
                 value={shippingAddress.city}
                    onChange={(e) =>
                     setShippingAdress({
                      ...shippingAddress,city:e.target.value,
                         })
                           }
                           className='w-full p-2 border rounded'
                             required
                          />
                  </div>
                    <div>
                        <label className='block text-gray-700'>Postal Code</label>
                        <input type="text" 
                        value={shippingAddress.postalCode}
                         onChange={(e) =>
                            setShippingAdress({
                                ...shippingAddress,postalCode: e.target.value,
                            })
                         }
                         className='w-full p-2 border rounded'
                         required
                          />
                    </div>
        </div>
         <div className="mb-4">
          <label className='block text-gray-700'>Country</label>
            <input type="text" 
            value={shippingAddress.country} 
                onChange={(e) => setShippingAdress
                    ({...shippingAddress,country: e.target.value,
                     })
                    }
                    className='w-full p-2 border rounded'
                    required
                    />
        </div>

          <div className="mb-4">
          <label className='block text-gray-700'>Phone</label>
            <input type="tel" 
            value={shippingAddress.phone} 
                onChange={(e) => setShippingAdress
                    ({...shippingAddress,phone: e.target.value,
                     })
                    }
                    className='w-full p-2 border rounded'
                    required
                    />
        </div>
        <div className="mt-6">
            {!checkoutId ?(
                <button type='submit' className='w-full bg-black text-white py-3 rounded'>Continue to Payment</button>
            ) : (
                <div>
                    <h3 className='text-lg mb-4' >Pay With payPal</h3>
                    {/* paypal component */}
                        <PayPalButton amount={100}onSucess={handlePaymentSucess}
                        onError={(err) => alert=("Payment failed. Try Again.")} />

                </div>
            )}
        </div>
        </form>
    </div>
</div>
  )
}

export default Checkout