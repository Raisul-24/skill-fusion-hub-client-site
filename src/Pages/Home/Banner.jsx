import banner1 from "/images/banner1.jpeg"
import banner2 from "/images/banner2.jpeg"
import banner3 from "/images/banner3.jpeg"
import banner4 from "/images/banner4.jpeg"
import banner5 from "/images/banner5.jpg"
import banner6 from "/images/banner6.jpeg"

const Banner = () => {
   return (
      <div className="carousel w-full h-[90vh]  my-5">
         <div id="slide1" className="carousel-item relative w-full">
            <img src={banner1} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
               <div className="text-white space-y-7 w-full lg:w-1/2 pl-10">
                  <h2 className="text-2xl md:text-6xl font-extrabold text-sky-400">Make bright <br /> ideas happen!!</h2>
                  <p className="hidden md:flex">Access global talent on the freelancer website trusted <br /> by over 1 million businesses worldwide.</p>
                  <div className="">
                     <h2 className="hidden md:flex text-xl font-semibold mb-0 md:mb-10 ">Popular Skills</h2>
                     <button className="btn btn-info btn-outline mr-5">Web Development</button>
                     <button className="btn btn-error btn-outline mr-5">Graphics Design</button>
                     <button className="btn btn-outline btn-warning">Digital Marketing</button>
                  </div>
               </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
               <a href="#slide4" className="btn btn-circle mr-5">❮</a>
               <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide2" className="carousel-item relative w-full">
            <img src={banner2} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
               <div className="text-white space-y-7 w-full lg:w-1/2 pl-10">
                  <h2 className="text-4xl lg:text-6xl font-extrabold text-yellow-300">Make bright <br /> ideas happen!!</h2>
                  <p className="hidden md:flex">Access global talent on the freelancer website trusted <br /> by over 1 million businesses worldwide.</p>
                  <div className="">
                     <h2 className="hidden md:flex text-xl font-semibold mb-0 lg:mb-10">Popular Skills</h2>
                     <button className="btn btn-info btn-outline mr-5">Web Development</button>
                     <button className="btn btn-error btn-outline mr-5">Graphics Design</button>
                     <button className="btn btn-outline btn-warning">Digital Marketing</button>
                  </div>
               </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
               <a href="#slide1" className="btn btn-circle mr-5">❮</a>
               <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide3" className="carousel-item relative w-full">
            <img src={banner3} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
               <div className="text-white space-y-7 w-full lg:w-1/2 pl-10">
                  <h2 className="text-4xl lg:text-6xl font-extrabold text-amber-200">Make bright <br /> ideas happen!!</h2>
                  <p className="hidden md:flex">Access global talent on the freelancer website trusted <br /> by over 1 million businesses worldwide.</p>
                  <div className="">
                     <h2 className="hidden md:flex text-xl font-semibold mb-0 lg:mb-10">Popular Skills</h2>
                     <button className="btn btn-info btn-outline mr-5">Web Development</button>
                     <button className="btn btn-error btn-outline mr-5">Graphics Design</button>
                     <button className="btn btn-outline btn-warning">Digital Marketing</button>
                  </div>
               </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
               <a href="#slide2" className="btn btn-circle mr-5">❮</a>
               <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide4" className="carousel-item relative w-full">
            <img src={banner4} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
               <div className="text-white space-y-7 w-full lg:w-1/2 pl-10">
                  <h2 className="text-4xl lg:text-6xl font-extrabold text-pink-300">Make bright <br /> ideas happen!!</h2>
                  <p className="hidden md:flex">Access global talent on the freelancer website trusted <br /> by over 1 million businesses worldwide.</p>
                  <div className="">
                     <h2 className="hidden md:flex text-xl font-semibold mb-0 lg:mb-10">Popular Skills</h2>
                     <button className="btn btn-info btn-outline mr-5">Web Development</button>
                     <button className="btn btn-error btn-outline mr-5">Graphics Design</button>
                     <button className="btn btn-outline btn-warning">Digital Marketing</button>
                  </div>
               </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
               <a href="#slide3" className="btn btn-circle mr-5">❮</a>
               <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide5" className="carousel-item relative w-full">
            <img src={banner5} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
               <div className="text-white space-y-7 w-full lg:w-1/2 pl-10">
                  <h2 className="text-4xl lg:text-6xl font-extrabold text-lime-200">Make bright <br /> ideas happen!!</h2>
                  <p className="hidden md:flex">Access global talent on the freelancer website trusted <br /> by over 1 million businesses worldwide.</p>
                  <div className="">
                     <h2 className="hidden md:flex text-xl font-semibold mb-0 lg:mb-10">Popular Skills</h2>
                     <button className="btn btn-info btn-outline mr-5">Web Development</button>
                     <button className="btn btn-error btn-outline mr-5">Graphics Design</button>
                     <button className="btn btn-outline btn-warning">Digital Marketing</button>
                  </div>
               </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
               <a href="#slide4" className="btn btn-circle mr-5">❮</a>
               <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide6" className="carousel-item relative w-full">
            <img src={banner6} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
               <div className="text-white space-y-7 w-full lg:w-1/2 pl-10">
                  <h2 className="text-4xl lg:text-6xl font-extrabold text-teal-200">Make bright <br /> ideas happen!!</h2>
                  <p className="hidden md:flex">Access global talent on the freelancer website trusted <br /> by over 1 million businesses worldwide.</p>
                  <div className="">
                     <h2 className="hidden md:flex text-xl font-semibold mb-0 lg:mb-10">Popular Skills</h2>
                     <button className="btn btn-info btn-outline mr-5">Web Development</button>
                     <button className="btn btn-error btn-outline mr-5">Graphics Design</button>
                     <button className="btn btn-outline btn-warning">Digital Marketing</button>
                  </div>
               </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
               <a href="#slide5" className="btn btn-circle mr-5">❮</a>
               <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
         </div>
      </div>
   );
};

export default Banner;