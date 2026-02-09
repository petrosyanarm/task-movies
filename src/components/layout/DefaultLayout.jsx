import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/header/Header"
import { Outlet } from "react-router-dom"

function DefaultLayout() {
    return (
        <div className="h-screen">
            <Header />
            <div className="bg-linear-to-r from-neutral-900 to-gray-700">
                <div className="w-full max-w-7xl mx-auto">
                <Outlet />
                </div>
            </div>
            <div className="bg-black">
                <div className="w-full max-w-7xl mx-auto">
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    )
}
export default DefaultLayout