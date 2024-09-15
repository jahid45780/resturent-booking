import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Recipe = () => {
    return (
        <div>
            <section className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-6 mt-6">
                <h1 className="text-[32px] lg:text-[48px] text-center lg:text-left">
                    Explore <span className="text-[#8ABA51]">Yummy Recipe</span>
                </h1>

                <Link to={'/foods'} >
                    <button className="flex gap-2 items-center text-[16px] lg:text-[20px] mt-4 lg:mt-0">
                        See All <IoIosArrowForward />
                    </button>
                </Link>
            </section>

            <section className="grid lg:grid-cols-3 grid-cols-1 gap-2 mt-5">
                <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm lg:max-w-md">
                    <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
                        <img
                          className="object-cover w-full h-full hover:scale-110 duration-300 object-center"
                            alt="food"
                            src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg"
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-xl font-bold mb-2 truncate">Spinach & Mushroom</h2>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                            White Spinach Pizza consectetur adipiscing elit. Etiam ut imperdiet lectus.
                        </p>
                        <h4 className="text-lg font-bold font-custom mb-2">$ 592.00</h4>
                        <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
                            Order Now
                        </button>
                    </div>
                </div>

                {/* Repeat for other food cards */}
                <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm lg:max-w-md">
                    <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
                        <img
                          
                        
                            className="object-cover w-full h-full hover:scale-110 duration-300 object-center"
                            alt="food"
                            src="https://www.createwithnestle.ph/sites/default/files/srh_recipes/d02b91f6ff525faab20ea606fd235d44.jpg"
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-xl font-bold mb-2 truncate">Spinach & Pizza</h2>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                            Creamy Spinach Pizza consectetur adipiscing elit. Etiam ut imperdiet lectus.
                        </p>
                        <h4 className="text-lg font-bold font-custom mb-2">$20.30</h4>
                        <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
                            Order Now
                        </button>
                    </div>
                </div>

                <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm lg:max-w-md">
                    <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
                        <img
                         
                            className="object-cover w-full h-full hover:scale-110 duration-300 object-center"
                            alt="food"
                            src="https://img-global.cpcdn.com/recipes/acb16cfca0f1bdb0/680x482cq70/sushi-with-spinach-leaves-recipe-main-photo.jpg"
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-xl font-bold mb-2 truncate">Spinach & Sushi</h2>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                            Sushi with spinach leaves Recipe by Priyanka Shah Sanghvi - Cookpad
                        </p>
                        <h4 className="text-lg font-bold font-custom mb-2">$ 22.00</h4>
                        <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
                            Order Now
                        </button>
                    </div>
                </div>

                <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm lg:max-w-md">
                    <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
                        <img
                            className="object-cover w-full h-full hover:scale-110 duration-300 object-center"
                            alt="food"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8fsW5LdkGrG35mHJXLNjkGU7NZw9XidTJQ&s"
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-xl font-bold mb-2 truncate">Spinach & Tacos</h2>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                            Asadero Spinach Tacos - V&V Supremo Foods, Inc imperdiet lectus.
                        </p>
                        <h4 className="text-lg font-bold font-custom mb-2">$ 192.00</h4>
                        <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
                            Order Now
                        </button>
                    </div>
                </div>

                <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm lg:max-w-md">
                    <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
                        <img
                            className="object-cover w-full h-full hover:scale-110 duration-300 object-center"
                            alt="food"
                            src="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl.jpg"
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-xl font-bold mb-2 truncate">Spinach & Pasta </h2>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        Creamy Tomato and Spinach Pasta Supremo Foods, Inc imperdiet lectus.
                        </p>
                        <h4 className="text-lg font-bold font-custom mb-2">$ 98.00</h4>
                        <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
                            Order Now
                        </button>
                    </div>
                </div>


                <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm lg:max-w-md">
                    <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
                        <img
                            className="object-cover w-full h-full hover:scale-110 duration-300 object-center"
                            alt="food"
                            src="https://www.thespeckledpalate.com/wp-content/uploads/2011/06/The-Speckled-Palate-Spinach-Feta-Burgers-Horizontal-Photo.jpg"
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-xl font-bold mb-2 truncate">Spinach & Burger </h2>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        Spinach and Feta Burgers - V&V Supremo Foods, Inc imperdiet lectus.
                        </p>
                        <h4 className="text-lg font-bold font-custom mb-2">$ 34.00</h4>
                        <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
                            Order Now
                        </button>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Recipe;
