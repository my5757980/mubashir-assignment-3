import { FaArrowRight } from "react-icons/fa";
export default function UseAsExtension() {
    return (
        <div className="overflow-x-hidden">





            {/* Use As Extension */}


            <div>


                <div className="h-[600px] bg-[#043873] flex items-center">
                    <div className="m-auto w-[311px]           lg:m-auto  lg:w-[855px]">
                        <div className="lg:grid lg:gap-2 lg:grid-cols-2           flex flex-col gap-6">
                            <div className="flex flex-col gap-5">
                                <h1 className="text-white text-[33px] pt-[22px] font-bold">Use as Extension</h1>
                                <p className="text-white">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                                </p>
                                <div className="flex items-center">
                                    <button className="w-[219px] h-[63px] text-white bg-[#4F9CF9] rounded-[8px]">Let’s Go</button>
                                    <FaArrowRight className="text-white relative right-[66px]" />
                                </div>
                            </div>

                            <div className="w-[288px] h-[229px] bg-[#C4DEFD]         lg:w-[444px] lg:h-[344px] ">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}