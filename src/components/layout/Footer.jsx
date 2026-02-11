import { FOOTER_LINKS_1, FOOTER_LINKS_2, FOOTER_LINKS_3 } from "@/utils/constants/FooterLinks";
import { BsQrCode } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";

function Footer() {
    return (
        <div className="max-w-5xl w-full mx-auto">
            <div className="py-4 flex flex-col gap-2">
                <div className="flex justify-center">
                    <Button className="px-8 py-2 bg-yellow rounded-3xl font-bold text-[14px]">Sign in for more success</Button>
                </div>
                <div className="flex flex-col md:flex-row px-6 py-4 gap-4 justify-center">
                    <div className="w-full md:w-auto px-4 py-4 rounded-xl flex flex-col gap-3 border border-gray-400">
                        <div className="text-center">
                            <span className="text-white font-bold text-[18px]">Follow IMDb on social</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {FOOTER_LINKS_1.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div key={item.id} className="px-4 py-4 hover:bg-gray-700 cursor-pointer transition-colors duration-300 rounded-full hover:bg- flex justify-center items-center">
                                        <Icon className="text-white text-[22px]" />
                                    </div>)
                            })}
                        </div>
                    </div>
                    <div className="px-6 py-2.5 rounded-xl flex flex-col md:flex-row items-center md:gap-2 lg:gap-25 border border-gray-400">
                        <div className="flex flex-col pt-3">
                            <span className="text-white font-bold text-[18px]">Get the IMDb App</span>
                            <span className="text-white  text-[16px]">For Android and iOS</span>
                        </div>
                        <div className="border mt-1">
                            <BsQrCode className="text-white w-16 h-16" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-3 px-4 text-center">
                    {FOOTER_LINKS_2.map((item) => (
                        <div key={item.id} className="px-2 py-1">
                            <Link className="text-white hover:underline">{item.title}</Link>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-3 px-4 text-center">
                    {FOOTER_LINKS_3.map((item) => (
                        <div key={item.id} className="px-2 py-1">
                            <Link className="text-white hover:underline">{item.title}</Link>
                        </div>
                    ))}
                </div>
                <div className="py-5 flex flex-col gap-6 items-center">
                    <span className="text-base text-white">An amazon company</span>
                    <span className="text-[14px] text-white">1990-2026 by IMDb.com, Inc.</span>
                </div>
            </div>
        </div>
    )
}
export default Footer;