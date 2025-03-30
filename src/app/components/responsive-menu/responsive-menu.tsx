import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
const ResponsiveMenu=({open}: any)=>{
    return(
        <div className="overflow-x-hidden">





            <AnimatePresence mode="wait">

                {
                    open && (
                        <motion.div
                        initial={{opacity: 0, y: -100}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -100}}

                        className="left-0 w-full h-screen  z-20">

                            <div className="bg-orange-950  py-10 m-5 rounded-3xl md:hidden">
                                <ul className="flex flex-col justify-center items-center gap-10">
                                    <li className="text-[20px] font-bold underline  text-white">
                                        <Link href="Pricing">Pricing</Link>
                                    </li >
                                    <li className="text-[20px] font-bold underline  text-white">
                                        <Link href="Product">Product</Link>
                                    </li>
                                    <li className="text-[20px] font-bold underline  text-white">
                                        <Link href="Resources">Resources</Link>
                                    </li>
                                    <li className="text-[20px] font-bold underline  text-white">
                                        <Link href="Solutions">Solutions</Link>
                                    </li>
                                </ul>
                            </div>
                            </motion.div>
                    )
                }

                </AnimatePresence>

        </div>
    )
}

export default ResponsiveMenu