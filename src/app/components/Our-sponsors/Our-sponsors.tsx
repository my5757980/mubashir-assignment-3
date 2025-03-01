import Image from "next/image";
import { FaApple } from "react-icons/fa";
export default function OurSponsors() {
    return (


        <div className="overflow-x-hidden">



            {/* our sponsors */}

            <div>


                <div className="h-[500px] bg-white flex items-center">
                <div className="m-auto w-[211px] lg:m-auto lg:w-[1288px]">
                    <h1 className="text-[#212529] font-extrabold lg:text-center text-[33px] text-nowrap pt-[22px] ">Our sponsors</h1>
                  <div className="lg:grid lg:gap-24 lg:grid-cols-4           flex flex-col gap-6">
                    <FaApple className="size-20" />

                    <div className="flex gap-2">
                        <Image className="size-16"src="/image/microsoft 1.PNG" alt="logo" width={88} height={35} />
                        <h1 className="text-[#706D6E] text-[44px]">Microsoft</h1>
                    </div>

                    <div className="flex gap-2">
                        <Image src="/image/Slack.PNG" alt="logo" width={66} height={35} />
                        <h1 className="text-[44px] text-[#000000]">slack</h1>
                    </div>

                    <h1 className="text-[44px]">
                        <span className="text-[#4285F4] ">G</span>
                        <span className="text-[#EA4335]">o</span>
                        <span className="text-[#FBBC05]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#34A853]">l</span>
                        <span className="text-[#EA4335]">e</span>
                    </h1>
                </div>
              </div>
            </div>
            </div>
        </div>
    )
}