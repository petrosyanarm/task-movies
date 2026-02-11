import Button from "@/components/ui/Button";
import { useMoviesStore } from "@/store/useMoviesStore";
import { twMerge } from "tailwind-merge";
import { IoMdClose } from "react-icons/io";
import MobileMenuSection from "@/components/layout/header/MobileMenuSection";
import { MENU_LINKS_AWARDS, MENU_LINKS_CELEBS, MENU_LINKS_COMMUNITY, MENU_LINKS_MOVIES, MENU_LINKS_TV, MENU_LINKS_WATCH } from "@/utils/constants/MenuLinks";
import { useOutsideClick } from "@/utils/hooks/useOutsideClick";
import { useRef } from "react";

function MobileMenu() {
    const { openMenu, setOpenMenu } = useMoviesStore();
    const ref = useRef(null)
    useOutsideClick(ref, () => setOpenMenu(false))
    return (
        <div ref={ref} className={twMerge(openMenu ? "translate-x-0 opacity-100 z-99" : "-translate-x-[200vh] z-99", "fixed overflow-y-scroll lg:hidden top-0 h-screen left-0 w-70  bg-neutral-900 text-white transition-transform duration-800 ease-in-out")}>
            <div className="py-4 px-4 flex justify-end">
                <Button onClick={() => setOpenMenu(false)}>
                    <IoMdClose className="text-[25px]" />
                </Button>
            </div>
            <div className="px-4 py-2 flex flex-col gap-4">
                <MobileMenuSection title='Movies' links={MENU_LINKS_MOVIES} />
                <MobileMenuSection title="TV Shows" links={MENU_LINKS_TV} />
                <MobileMenuSection title="Watch" links={MENU_LINKS_WATCH} />
                <MobileMenuSection title="Awards & Events" links={MENU_LINKS_AWARDS} />
                <MobileMenuSection title="Celebs" links={MENU_LINKS_CELEBS} />
                <MobileMenuSection title="Community" links={MENU_LINKS_COMMUNITY} />
            </div>
            <div className="flex flex-col px-4 py-8">
                <h2 className="font-bold text-base text-neutral-400">IMDbPro</h2>
                <span className="text-[14px] text-white">For Industry Professionals</span>
            </div>
            <div className="flex flex-col px-4 pb-8">
                <h2 className="font-bold text-base text-neutral-400">LANGUAGE</h2>
                <span className="text-[14px] text-white">English (United States)</span>
            </div>
        </div>
    )
}
export default MobileMenu;