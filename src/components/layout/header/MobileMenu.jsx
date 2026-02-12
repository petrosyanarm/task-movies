import Button from "@/components/ui/Button";
import { useMoviesStore } from "@/store/useMoviesStore";
import { twMerge } from "tailwind-merge";
import { IoMdClose } from "react-icons/io";
import MobileMenuSection from "@/components/layout/header/MobileMenuSection";
import { MENU_LINKS_AWARDS, MENU_LINKS_CELEBS, MENU_LINKS_COMMUNITY, MENU_LINKS_MOVIES, MENU_LINKS_TV, MENU_LINKS_WATCH } from "@/utils/constants/MenuLinks";
import { FaTv, MdLocalMovies, MdVideoLibrary, MdStars, MdPeople, BiWorld } from "@/components/ui/Icons"

function MobileMenu() {
    const { openMenu, setOpenMenu } = useMoviesStore();
    return (
        <div className={twMerge(openMenu ? "translate-x-0 opacity-100 z-99" : "-translate-x-[200vh] z-99", "fixed overflow-y-scroll lg:hidden top-0 h-screen left-0 w-70  bg-neutral-900 text-white transition-transform duration-800 ease-in-out")}>
            <div className="py-4 px-4 flex justify-end">
                <Button onClick={() => setOpenMenu(false)}>
                    <IoMdClose className="text-[25px]" />
                </Button>
            </div>
            <div className="px-4 py-2 flex flex-col gap-4">
                <MobileMenuSection title='Movies' icon={<MdLocalMovies />} links={MENU_LINKS_MOVIES} />
                <MobileMenuSection title="TV Shows" icon={<FaTv />} links={MENU_LINKS_TV} />
                <MobileMenuSection title="Watch" icon={<MdVideoLibrary />} links={MENU_LINKS_WATCH} />
                <MobileMenuSection title="Awards & Events" icon={<MdStars />} links={MENU_LINKS_AWARDS} />
                <MobileMenuSection title="Celebs" icon={<MdPeople />} links={MENU_LINKS_CELEBS} />
                <MobileMenuSection title="Community" icon={<BiWorld />} links={MENU_LINKS_COMMUNITY} />
            </div>
            <div className="flex flex-col px-4 py-8">
                <h2 className="font-bold text-base text-neutral-400">IMDbPro</h2>
                <span className="text-sm text-white">For Industry Professionals</span>
            </div>
            <div className="flex flex-col px-4 pb-8">
                <h2 className="font-bold text-base text-neutral-400">LANGUAGE</h2>
                <span className="text-sm text-white">English (United States)</span>
            </div>
        </div>
    )
}
export default MobileMenu;