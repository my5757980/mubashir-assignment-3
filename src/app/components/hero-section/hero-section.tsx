import { FaArrowRight } from "react-icons/fa";
export default function HeroSection() {
    return (
        <div className="overflow-x-hidden">




            {/* hero section */}

            <div>



                <div className="h-[629px] bg-[#043873] flex items-center">

                    <div className="m-auto w-[311px]       lg:m-auto  lg:w-[855px]">
                        <div className="lg:grid lg:gap-2 lg:grid-cols-2           flex flex-col gap-6">

                            <div className="flex flex-col gap-5">
                                <h1 className="text-white text-[33px] pt-[22px] font-bold ">Get More Done with<br /> whitepace</h1>

                                <p className="text-white ">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                                <div className="flex items-center">
                                    <button className="w-[219px] h-[63px] text-white bg-[#4F9CF9] rounded-[8px]">Try Whitepace free</button>
                                    <FaArrowRight className="text-white relative right-[33px]" />
                                </div>
                            </div>

                            <div className="w-[288px] h-[229px] lg:w-[444px] lg:h-[344px] bg-[#C4DEFD]">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}