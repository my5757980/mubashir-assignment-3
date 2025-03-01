import Image from "next/image"

export default function Footer(){
    return(
        <div className="overflow-x-hidden">






       {/* footer */}

       <div className="h-[700px] bg-[#043873] mt-[11px]      md:flex md:flex-col items-center">

            <div className="m-auto w-[211px]   md:m-auto md:w-[444px]   lg:m-auto lg:w-[888px]   ">

                <div className="md:grid md:gap-8  md:grid-cols-2             lg:grid lg:gap-8  lg:grid-cols-4 ">




               
     
        <div>
         <div className="flex items-center gap-2 pt-[33px] sm:pt-[33px] md:pt-[0px]  ">
               <Image className="pb-[11px]"src="/image/Logo Icon.png" alt="logo" width={37} height={29}/>
               <h1 className="font-bold text-white text-[22px]">whitepace</h1>
               </div>

               <p className="text-white pb-[33px]">whitepace was created for<br /> the new ways we live and<br /> work. We make a better<br /> workspace around the world</p>
                 </div>



                  <div className="flex flex-col gap-2 pb-[33px] sm:pb-[33px] md:pb-[0px]">
                 <h1 className="text-white font-bold">Product</h1>
                 <h2 className="text-[#FFE492]">Overview</h2>
                 <h2 className="text-white">Pricing</h2>
                 <h2 className="text-white">Customer stories</h2>
                 </div>
                
                


                     

                 
                    <div className="flex flex-col gap-2 pb-[33px] sm:pb-[33px] md:pb-[0px]">
                 <h1 className="text-white font-bold">Resources</h1>
                 <h2 className="text-white">Blog</h2>
                 <h2 className="text-white">Guides & tutorials</h2>
                 <h2 className="text-white">Help center</h2>
                 </div>





                 <div className="flex flex-col gap-2">
                 <h1 className="text-white font-bold">Company</h1>
                 <h2 className="text-white">About us</h2>
                 <h2 className="text-white">Careers</h2>
                 <h2 className="text-white">Media kit</h2>
                 </div>
                 

                
                </div>
             
                 

                 <div className="pt-[33px]">
                 <hr className="border-[#2E4E73]  "/>
                 <h1 className="text-white text-center">©2021 Whitepace LLC.</h1>
                 </div>



          </div>


                 


       </div>
        </div>
    )
}