import banner from '../assets/Frame 34616.png'
import arrow from '../assets/Arrow.png'
const Mobile = () => {
    return (
        <div className=' py-10' >
            <div className='  flex justify-end -mb-12 '>
            <img className=' rotate-12 mr-44 md:block hidden ' src={arrow} alt="" />
            </div>
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-lg">
      {/* Text Section */}
       
      <div className="md:w-2/3 mb-6 md:mb-0">
        <h1 className="text-[45px] font-bold text-gray-800">
          Its Now More Easy to <span className="text-green-500">Booking</span> <br /> by Our Mobile App
        </h1>
        <p className="mt-4 text-gray-600">
          All you need to do is download one of the best delivery apps, make a booking,
          and most companies are opting for mobile app development for food delivery.
        </p>
        {/* App Download Buttons */}
        <div className="flex mt-6">
          <a href="#" className="mr-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="w-[193.79px] h-[57.42px]" />
          </a>
          <a href="#">
            <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png" alt="Download on the App Store" className="w-[193.79px] h-[57.42px]" />
          </a>
        </div>
      </div>

      {/* Chef Image Section */}
      <div className="md:w-1/3 flex justify-center">
        <div className="relative">
          {/* Image Circle with Chef */}
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-green-500">
            <img src={banner} alt="Chef holding a phone" className="object-cover w-full h-full" />
          </div>
        
        </div>
      </div>
    </div>
        </div>
    );
};

export default Mobile;