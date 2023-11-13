import React from 'react';
import {AiTwotoneStar} from 'react-icons/ai';
import {BsStarHalf} from 'react-icons/bs';
import Client1 from '../../Assets/images/client02.jpg';
import Client2 from '../../Assets/images/client2.png';
import Client3 from '../../Assets/images/client3.png';


const TestiMonial = () => {

  return (
    //  {/* Sixth Section */}
    <>

     <div className="mt-10">
     <div className="section-heading  container m-auto">
       <div className="text-center mt-10 text-[#415161] pt-[50px] font-semibold font-poppins">
         <h2 className="text-[32px]">Our Happy Clients!</h2>
         <div className="text-center m-auto flex justify-center mt-5">
           <hr className="bg-[#ff5151] h-[4px] w-[80px] text-center" />
         </div>
       </div>
     </div>
     <div className="flex mt-10">
      {/*  Testimonials */}


   <div className=" container m-auto bg-gray-100 mt-6 p-6">
     <div className="max-w-5xl flex gap-10 mx-auto">
       {/* Testimonial 1 */}
       <div className="bg-white rounded-lg p-4 ">
        
         <p className="text-gray-700">
         "Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem." </p>
         <div className="text-start mt-4">
               <i className="FaRegStar text-[#ff5151] flex justify-start">
                 <AiTwotoneStar />
                 <AiTwotoneStar />
                 <AiTwotoneStar />
                 <AiTwotoneStar />
                 <BsStarHalf />
               </i>
             
               </div>
         <div className="flex m-auto gap-2">
         <img src={Client1} alt="client" className="mt-3 h-16 w-16"/>
         <p className="text-gray-600 mt-8 font-semibold">John Doe</p>
         </div>
       </div>

       {/* Testimonial 2 */}
       <div className="bg-white rounded-lg p-4">
         <p className="text-gray-700">
         "Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."
            </p>
            <div className="text-center mt-4">
               <i className="FaRegStar text-[#ff5151] flex justify-start">
                 <AiTwotoneStar />
                 <AiTwotoneStar />
                 <AiTwotoneStar />
                 <AiTwotoneStar />
                 <AiTwotoneStar />
               </i>
             
               </div>
         
         <div className="flex m-auto gap-2 ">
           <img src={Client2} alt="client"  className="mt-3 h-16 w-16" />
         <p className="text-gray-600 mt-8 font-semibold ">Jessica Foxx​
</p>
         </div>
       </div>
       {/* Testimonial 3 */}
       <div className="bg-white rounded-lg p-4">
       
         <p className="text-gray-700">
         "Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem." 
         </p>
         <div className="text-center mt-4">
               <i className="FaRegStar text-[#ff5151] flex justify-start">
                 <AiTwotoneStar />
                 <AiTwotoneStar />
                 <AiTwotoneStar />
                 <AiTwotoneStar />
                 <AiTwotoneStar />
               </i>
             
               </div>
       
         <div className="flex m-auto gap-2 ">
           <img src={Client3} alt="client" className="mt-3 h-16 w-16"/>
           <p className="text-gray-600 mt-8 font-semibold">Lily Granger​</p>

         </div>
       </div>

     </div>
   </div>

     </div>

     </div>
     </>
  
  )
}

export default TestiMonial;
