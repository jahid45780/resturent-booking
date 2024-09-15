import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
 <section className="relative flex items-center justify-center h-screen p-16 dark:bg-gray-800 dark:text-gray-100">
  <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://example.com/background-image.jpg')" }}></div>
  
  <div className="container relative flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8">
    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
      <span className="sr-only">Error</span>404
    </h2>
    <p className="text-2xl font-semibold md:text-3xl text-center">
      Oops! We couldnt find that page.
    </p>
    <p className="mt-4 mb-8 text-lg text-center dark:text-gray-400">
      But dont worry, you can find plenty of other things on our homepage.
    </p>

    <Link to={'/'} > <button className="relative inline-block px-8 py-3 font-semibold text-gray-50 bg-violet-600 rounded-lg shadow-lg hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-300 transition ease-in-out duration-300" >  Back to homepage </button> </Link>

  
  </div>

</section>

    </div>
  )
}
