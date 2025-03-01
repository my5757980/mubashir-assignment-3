import { FaArrowRight } from "react-icons/fa";
export default function CustomiseItToYourNeeds() {
    return (
        <div className="overflow-x-hidden">




            {/* Customise It To Your Needs */}

            <div>



                <div className=" bg-white h-[700px] flex items-center">
                    <div className="m-auto w-[311px]              lg:m-auto  lg:w-[855px]">
                        <div className="lg:grid lg:gap-28 lg:grid-cols-2           flex flex-col gap-6">
                            <div className="w-[288px] h-[229px] mt-[22px] bg-[#C4DEFD]      lg:w-[444px] lg:h-[344px]">
                            </div>
                            <div className="flex flex-col gap-5  lg:relative lg:top-[22px] ">
                                <h1 className="text-[33px] font-bold">Customise it to your needs</h1>
                                <p className="text-[#212529]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                                <div className="flex items-center">
                                    <button className="w-[219px] h-[63px] text-white bg-[#4F9CF9] rounded-[8px]">Let’s Go</button>
                                    <FaArrowRight className="text-white relative right-[66px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}