import { useEffect, useState } from "react";
import BookTableCart from "./BookTableCart";
import Loader from "../../component/loader/Loader";

const BookTable = () => {
    const [bookings, setBooking]= useState([])
    const [loading, setLoading]= useState(false)
    
    useEffect(()=> {
        setLoading(true)
        fetch('tableBook.json')
        .then(res=> res.json())
        .then(data=>setBooking(data))
        setLoading(false)
    },[])

    if(loading){
        return <Loader/>
    }

    return (
        <div>
          <h1 className="text-5xl font-bold text-center   mt-4 max-w-6xl mx-auto">
             The Book The Table  <span className="text-[#8ABA51] mx-3">   OF Your Choice </span>
           
          </h1>


            <section className="grid lg:grid-cols-3 grid-cols-1 gap-2 mt-9 max-w-6xl mx-auto pb-12 mt" >
                {
                    bookings.map((booking)=> <BookTableCart key={booking.id} tableBook={booking} ></BookTableCart> )
                }
            </section>

        </div>
    );
};

export default BookTable;