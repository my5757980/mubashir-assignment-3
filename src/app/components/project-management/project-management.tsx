import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
export default function ProjectManagement() {
    return (
        <div className="overflow-x-hidden">




            {/* project-management */}
            <div>




                <div className="h-[1450px] bg-white   pt-[133px]">
                    <div className="">


                        <div className="       m-auto w-[311px]    lg:m-auto lg:w-[855px]  ">
                            <div className="lg:grid lg:gap-2 lg:grid-cols-2         flex flex-col gap-6 ">


                                <div className="  flex flex-col gap-6   ">
                                    <h1 className="text-[#212529] pt-[22px] text-[33px] font-extrabold">Project< br /> Management</h1>
                                    <p className="text-[#212529]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                                    <div className="flex items-center ">
                                        <button className="w-[219px] h-[63px] text-white bg-[#4F9CF9] rounded-[8px]">Get Started</button>
                                        <FaArrowRight className="text-white relative right-[55px]" />
                                    </div>
                                </div>



                                <div className="w-[288px] h-[229px] lg:w-[444px] lg:h-[344px] bg-[#C4DEFD]">
                                </div>

                            </div>
                        </div>






                        <div className="lg:m-auto lg:w-[855px]       m-auto w-[311px]      ">
                            <div className="lg:grid lg:gap-2 lg:grid-cols-2      flex flex-col gap-6">

                        <Image className="pt-[44px]   lg:relative top-[99px]"src="/image/Work Together Image.png" alt="logo" width={410} height={561} />

                        <div className=" flex flex-col gap-6   lg:pt-[44px]    lg:relative lg:left-[44px]   lg:top-[166px]">
                        <h1 className="text-[33px] font-extrabold">Work together</h1>
                        <p className="text-[#212529]">With whitepace, share your notes with your colleagues and collaborate on them.You can also publish a note to the internet and share the URL with others.</p>
                        <div className="flex items-center">
                            <button className="w-[219px] h-[63px] text-white bg-[#4F9CF9] rounded-[8px]">Try it now</button>
                            <FaArrowRight className="text-white relative right-[55px]" />
                        </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}