STEPS TO RUN THE PROJECT :
 1. Clone Repository :
       git clone https://github.com/Akshit-Gupta25/Usage-billingsystem-w3villa-assesment-.git
 2. Navigate to project directory :
       cd <project name >
 3. Install Depependencies :
        npm install

 4. Start development server : 
        npm run dev
 5. Open in browser :
        http://localhost:5173

TECH STACK : 
 React.js 
 Js 
 CSS
 React Hook(useState)

 Data Management

This project uses React's useState hook for in-memory data management.

Resource data is stored in a state variable containing information such as available slots, price, and duration.
Active bookings are stored in a separate state array.
Revenue is tracked using another state variable.
When a booking is created, the corresponding resource's available slots are reduced.
When a booking is released, the bill is calculated, revenue is updated, and the slot is made available again.

Project Logic : 


The system manages gaming resources such as PS5, PC, and VR with a limited number of slots. When a user books a resource, the available slot count decreases and the booking start time is recorded. The bill is calculated based on the usage duration, with additional charges applied for overtime usage. Once the resource is released, the final bill is generated, revenue is updated, and the slot becomes available for booking again.


