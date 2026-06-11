import { calculateBill } from "../utils"
function BookingCard({booking , onRelease}){
    const bill = calculateBill(
        booking.startTime , 
        booking.duration , 
        booking.price,
        booking.extraCharge
    );
    return(
        <div style = {{
            border : "1px solid green" ,
            padding : "16px",
            borderRadius : "8px"
        }}>
            <h4>{booking.resourceName}</h4>
            <p>User : {booking.username}</p>
            <p> Current Bill : Rs.{bill}</p>
            <button
            onClick={() => onRelease(booking.id , bill)}>
                Release
            </button>
        </div>
    );
}

export default BookingCard;