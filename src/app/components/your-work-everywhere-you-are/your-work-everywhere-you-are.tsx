import { FaArrowRight } from "react-icons/fa";
export default function YouWorkEveryWhereYouAre(){
    return(
        <div className="overflow-x-hidden">




            {/* You Work Every Where You Are */}

            <div>




                <div className="h-[374px] bg-[#043873] flex items-center">
                <div className="m-auto w-[370px]   lg:m-auto  lg:w-[555px]">
                     <div className="flex flex-col gap-6     ">
                    <h1 className="text-white text-center font-extrabold pt-[22px] text-nowrap lg:text-[33px] text-[18px]">Your work, everywhere you are</h1>
                    <p className="text-white pl-[22px] text-center pr-[22px] text-[10px] lg:text-center ">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                    <div className="flex items-center justify-center lg:justify-center">
                    <button className="w-[219px] h-[63px] text-white bg-[#4F9CF9] rounded-[8px]">Try Taskey</button>
                     <FaArrowRight className="text-white relative right-[61px]" />
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}