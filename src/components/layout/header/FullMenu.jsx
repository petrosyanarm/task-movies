import { IoIosCloseCircleOutline } from "react-icons/io";
import { MENU_LINKS_AWARDS, MENU_LINKS_CELEBS, MENU_LINKS_COMMUNITY, MENU_LINKS_MOVIES, MENU_LINKS_TV, MENU_LINKS_WATCH } from "@/utils/constants/MenuLinks";
import MenuSection from "@/components/layout/header/MenuSection";
import Button from "@/components/ui/Button";
import { useMoviesStore } from "@/store/useMoviesStore";
import { twMerge } from "tailwind-merge";
import { FaTv,MdLocalMovies,MdVideoLibrary,MdStars,MdPeople,BiWorld } from "@/components/ui/Icons"
function FullMenu() {
    const { openMenu, setOpenMenu } = useMoviesStore();
    return (
        <div className={twMerge(openMenu ? "translate-y-0 opacity-100 z-99" : "-translate-y-[200vh] z-99", "fixed hidden lg:block top-0 h-screen left-0 w-full  bg-neutral-900 text-white transition-transform duration-800 ease-in-out")}>
            <div className="max-w-7xl w-full mx-auto">
                <div className="px-10 pt-6 pb-2 flex justify-between">
                    <div className="w-[9%] flex justify-center items-center">
                        <div className="bg-yellow px-1 cursor-pointer rounded-lg">
                            <span className="text-black text-4xl font-bold">IMDb</span>
                        </div>
                    </div>
                    <Button onClick={() => setOpenMenu(false)}>
                        <IoIosCloseCircleOutline className="text-yellow transition-colors duration-300  fill-yellow rounded-full hover:bg-yellow hover:fill-white text-6xl" />
                    </Button>
                </div>
                <div className="px-11 pt-8 pr-55 flex justify-between pb-0">
                    <MenuSection title="Movies"  icon={<MdLocalMovies/>}  links={MENU_LINKS_MOVIES} />
                    <div className="flex flex-col gap-7">
                        <MenuSection title="TV Shows" icon={<FaTv/>} links={MENU_LINKS_TV} />
                        <MenuSection title="Watch" icon={<MdVideoLibrary/>} links={MENU_LINKS_WATCH} />
                    </div>
                    <MenuSection title="Awards & Events" icon={<MdStars/>} links={MENU_LINKS_AWARDS} />
                </div>
                <div className="px-11 pr-70 flex justify-between ">
                    <MenuSection title="Celebs" icon={<MdPeople/>} links={MENU_LINKS_CELEBS} />
                    <MenuSection title="Community" icon={<BiWorld/>} links={MENU_LINKS_COMMUNITY} />
                </div>
            </div>
        </div>
    )
}
export default FullMenu;