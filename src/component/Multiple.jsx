import { Image } from "antd";
import service from "../assets/InjoyPleplo.png";
import Icone from "../assets/Injoy-Head.png";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
const Multiple = () => {
  return (
    <div>
      <div className="py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Main Section */}
          <div className=" flex justify-center">
            <img className="rotate-12 -mb-9 -mr-56 md:block hidden " src={Icone} alt="" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}

            <div className="flex justify-center lg:justify-start">
              <Image src={service}></Image>
            </div>

            {/* Text and Services Section */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                We are <span className="text-green-500">more</span> than
                multiple service
              </h1>
              <p className="text-gray-600 mt-4">
                This is a type of restaurant which typically serves food and
                drink, in addition to light refreshments such as baked goods or
                snacks. The term comes from the French word meaning food.
              </p>

              {/* Services List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
                <div className="flex items-center space-x-2">
                  <img src={service1} alt="Online Ordering" />
                  <p className="text-gray-700 text-[18px]">Online Ordering</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={service2} alt="Advanced Reservations" />
                  <p className="text-gray-700 text-[18px]">
                    Advanced Reservations
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={service3} alt="Top Chefs" />
                  <p className="text-gray-700 text-[18px]">Top Chefs</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={service4} alt="24/7 Availability" />
                  <p className="text-gray-700 text-[18px]">
                    Curated Dining Spaces
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multiple;
