import { useState } from 'react'
import { resourcesData } from './data'
import ResourceCard from './components/ResourceCard'
import BookingCard from './components/BookingCard'
import './App.css'

function App() {
  const [resources, setResources] = useState(resourcesData);
  const [booking , setBooking] = useState([]);
  const [revenue , setRevenue] = useState(0);
  const handleBook = (resource) => {
  const username = prompt("Enter the username : ");
  if (!username) return;

  const booking = {
    id: Date.now(),
    username,
    resourceId: resource.id,
    resourceName: resource.name,
    startTime: Date.now(),
    duration: resource.duration,
    price: resource.price,
    extraCharge: resource.extraCharge,
  };

  setBooking((prev) => [...prev, booking]);

  setResources((prev) =>
    prev.map((r) =>
      r.id === resource.id
        ? { ...r, availableSlots: r.availableSlots - 1 }
        : r
    )
  );
};

  const handleRelease = (
    bookingId , 
    bill 
  ) =>{ const currentBooking = booking.find((b) => b.id === bookingId);
if (!currentBooking) return;
    setRevenue((perv) => perv + bill );
    setBooking((perv) => perv.filter((b) => b.id !== bookingId)); 
    setResources((perv) => perv.map((r)=> 
    r.id === booking.resourceId ? {
      ...r , 
      availableSlots :
        r.availableSlots + 1 ,
    }
  :r )
);
alert (`Total Bill : Rs. ${bill}`);
  };
  return (
  <>
  <div style={{
    padding : "20px",
  }}>
    <h1>GameZone Usage & Billing System !! </h1>
    <h2> Revenue : {revenue}</h2>
    <h2>Resouces </h2>
    <div style={{
      display : "grid",
      gap : "16px",
    }} >
    { resources.map((resource) => (
      <ResourceCard  
      key = {resource.id}
      resource = {resource}
      onBook={handleBook}
      />

    ))}
    <h2 style={{
      marginTop : "30px",
    }}>
      Active Bookings 
    </h2>
    <div style={{
      display : "grid",
      gap : "16px",
    }}>
      {booking.map((booking)=> (
      <BookingCard
      key = {booking.id}
      booking = {booking}
      onRelease={handleRelease}
      />
      ))}

    </div>
    </div>
  </div>
  </>
  );
}

export default App ; 
