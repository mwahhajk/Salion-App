import React from 'react'

function MyBookings() {
  const bookings = [
    {
      id: "BK-001",
      service: "Hair Style",
      price: "125",
      date: "2024-11-12",
      time: "10:00 AM",
      status: "Confirmed",
      name: "John Doe",
      phone: "+1 234 567 8900",
    },
    {
      id: "BK-002",
      service: "Men Facial",
      price: "150",
      date: "2024-11-15",
      time: "02:30 PM",
      status: "Pending",
      name: "John Doe",
      phone: "+1 234 567 8900",
    },
    {
      id: "BK-003",
      service: "Beard Trimming",
      price: "95",
      date: "2024-11-08",
      time: "11:00 AM",
      status: "Completed",
      name: "John Doe",
      phone: "+1 234 567 8900",
    },
  ];
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className='max-w-4xl mx-auto '>
        <div>
          {bookings.map((booking,index)=>(
            <div key={index}>
              <div className='grid grid-cols-1 min-h-8 border border-gray-800 my-4'>

                {/* first div */}
                <div className='flex justify-between'>
                  <div className='flex'>
                    <h1>{booking.service}</h1>
                    <h2>Booking Id: {booking.id }</h2>
                  </div>
                  <h2>{booking.status}</h2>
                </div>

                {/* second div */}
                <div>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <div className='w-10 h-10 rounded-lg bg-gray-900'></div>
                    <div>
                      <h2>Date</h2>
                      <h1>{booking.date}</h1>
                      </div>
                  </div>
                  <div className='flex'>
                    <div className='w-10 h-10 rounded-lg bg-gray-900'></div>
                    <div className='mr-12'>
                      <h2>Time</h2>
                      <h1>{booking.time}</h1>
                      </div>
                  </div>
                </div>

                <div className='flex justify-between'>
                  <div className='flex'>
                    <div className='w-10 h-10 rounded-lg bg-gray-900'></div>
                    <div className=''>
                      <h2>Name</h2>
                      <h1>{booking.name}</h1>
                      </div>
                  </div>
                  <div className='flex'>
                    <div className='w-10 h-10 rounded-lg bg-gray-900'></div>
                    <div>
                      <h2>Phone</h2>
                      <h1>{booking.phone}</h1>
                      </div>
                  </div>
                </div>
                </div>


              {/* third div */}
              <h1 className='flex '>{booking.price}</h1>
                

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyBookings