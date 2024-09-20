import { useEffect, useState } from "react";
import BookTableCart from "./BookTableCart";
import Loader from "../../component/loader/Loader";
import toast from "react-hot-toast";
import { addLS, getStoreCart } from "../../component/api/LokalStore";

const BookTable = () => {
    const [bookings, setBooking]= useState([])
    const [loading, setLoading]= useState(false)

    const [cartBooking, setCartBooking]= useState([])
    
    useEffect(()=> {
        setLoading(true)
        fetch('tableBook.json')
        .then(res=> res.json())
        .then(data=>setBooking(data))
        setLoading(false)
    },[])


    // load cart local storage

    useEffect(()=>{
      

         if(bookings.length){
            const storeCart = getStoreCart()
            const saveRoom = []       
        
            for( const id of storeCart ){
                console.log(id);

                const tableRoom = bookings.find(room => room.id === id)
                if(tableRoom){
                     saveRoom.push(tableRoom)
                }
            }

            setCartBooking(saveRoom)

         }

    },[bookings])

    // booking room
    const bookingRoom = room =>{

        const cartBooked = [...cartBooking, room]
        setCartBooking(cartBooked)
         addLS(room.id)
        console.log("booked");
        toast.success("booked")
    }

    if(loading){
        return <Loader/>
    }

    return (
        <div>
          <h1 className="text-5xl font-bold text-center   mt-4 max-w-6xl mx-auto">
             The Book The Table  <span className="text-[#8ABA51] mx-3">   OF Your Choice </span>

             <h1> Booked: {cartBooking.length} </h1>
           
          </h1>


            <section className="grid lg:grid-cols-3 grid-cols-1 gap-2 mt-9 max-w-6xl mx-auto pb-12 mt" >
                {
                    bookings.map((booking)=> <BookTableCart key={booking.id} tableBook={booking} bookingRoom={bookingRoom}  ></BookTableCart> )
                }
            </section>

        </div>
    );
};

export default BookTable;