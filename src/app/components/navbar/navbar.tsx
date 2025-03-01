
'use client'

import Image from "next/image"
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link"
import ResponsiveMenu from "../responsive-menu/responsive-menu";
import { useState } from "react"
export default function Navbar(){
    const [open,setOpen] = useState(false)
    return(
        <div className="overflow-x-hidden ">





           {/* navbar */}

           <div>
           <div className="md:bg-[#043873] md:h-[92px]   md:flex md:items-center md:justify-around    hidden">
            

            <div className="md:flex md:items-center md:gap-2 ">
       <Image className=""src="/image/Logo Icon.png" alt="logo" width={37} height={29}/>
       <h1 className="md:font-bold md:text-white md:text-[22px]">whitepace</h1>
       </div>
         
          <div className="md:flex md:flex-row md:gap-3  ">
        <Link className="md:text-white"href="Products">Products</Link>
        <Link className="md:text-white"href="Solutions">Solutions</Link>
        <Link className="md:text-white"href="Resources">Resources</Link>
        <Link className="md:text-white"href="Pricing">Pricing</Link>
        </div>
        
            

            <div className="">
        <button className="md:text-[#043873] md:w-[76px] md:h-[43px] md:bg-[#FFE492] md:rounded-[8px]">Login</button>
        </div>


        </div>


        {/* Mobile Hamburger */}

        <div className="w-full h-[60px] flex flex-row justify-end items-center md:hidden" onClick={()=>
            setOpen(!open)
        }>

       
           <RxHamburgerMenu className="size-20 pr-5 "/>
           </div>

           {/* Mobile Sidebar */}
           <ResponsiveMenu open={open}/>



        </div>


        </div>
    )
}