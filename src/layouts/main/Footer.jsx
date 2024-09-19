import { Image } from "antd";
import logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className=" bg-[#232323] mt-16">
      <footer>
        <div className=" px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
          <div className="grid lg:grid-cols-2 grid-cols-1 justify-center pt-6 lg:justify-between">
            <div className=" lg:mx-5">
              {/* <img className=""  style={{width:230}} src={logo} </> */}
              <div className="flex items-center md:items-start justify-center md:justify-start">
                 <Image src={logo} ></Image>
                {/* <img src={logo} alt="logo" /> */}
              </div>
              <p className="text-[#F8FAFC] font-medium mt-5">
                {" "}
                The Food we had enjoyed at the time of dinner. It was really
                delicious taste with great quality, everything had unique taste
                which we had ordered, nice arrangement and services from the
                staff while eating, we found nothing bad about this hotel.{" "}
              </p>
            </div>

            <div className=" flex gap-[40px] lg:justify-end justify-center md:mx-6 mt-5">
              <div>
                <h1 className=" text-[#F8FAFC] text-center"> Follow us </h1>
                <div className=" flex justify-center gap-3 mt-3 text-gray-200">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaTwitter />
                </div>
              </div>

              <div>
                <h1 className=" text-[#F8FAFC] text-center"> Call Us </h1>
                <p className=" mt-3 text-gray-200">
                  <a href="tel:+4733378901">+47 333 78 901</a>
                </p>
              </div>
            </div>
          </div>

          <div className="grid justify-center py-9 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <h1 className=" text-[#F8FAFC] text-[18px] font-semibold lg:mx-3">
                {" "}
                Design & Developed by Jahid{" "}
              </h1>
            </div>
            <div className=" grid lg:grid-cols-3 grid-cols-1 justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
              <p className=" text-[19px] text-[#F8FAFC] text-center">
                {" "}
                Privacy Policy{" "}
              </p>
              <p className=" text-[19px] text-[#F8FAFC] text-center">
                {" "}
                Terms of Use{" "}
              </p>
              <p className=" text-[19px] text-[#F8FAFC] text-center">
                {" "}
                About Us{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
