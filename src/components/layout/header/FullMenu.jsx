import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaTv } from "react-icons/fa";
import { MENU_LINKS_AWARDS, MENU_LINKS_CELEBS, MENU_LINKS_COMMUNITY, MENU_LINKS_MOVIES, MENU_LINKS_TV, MENU_LINKS_WATCH } from "@/utils/constants/MenuLinks";
import MenuSection from "@/components/layout/header/MenuSection";
import Button from "@/components/ui/Button";

function FullMenu({open,setOpen}) {
    return(
        <div className={`absolute top-0 left-0 w-full h-screen z-999 bg-neutral-900 text-white transition-transform duration-800 ease-in-out ${open ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="max-w-7xl w-full mx-auto">
                <div className="px-10 pt-6 pb-2 flex justify-between">
                    <div className="w-[9%] flex justify-center items-center">
                        <div className="bg-yellow px-1 cursor-pointer rounded-lg" onClick={()=>navigate('/')}>
                            <span className="text-black text-[35px] font-bold">IMDb</span>
                        </div>
                    </div>
                        <Button onClick={()=>setOpen(false)}>
                        <IoIosCloseCircleOutline className="text-yellow fill-yellow stroke-yellow text-6xl"/>
                        </Button>
                </div>
                <div className="px-11 pt-8 pr-35 flex justify-between pb-0">
                    <MenuSection title={'Movies'} icon={'FaTv'} links={MENU_LINKS_MOVIES}/>
                    <div className="flex flex-col gap-7">
                         <MenuSection title="TV Shows" icon="FaTv" links={MENU_LINKS_TV} />
                         <MenuSection title="Watch" icon="FaTv" links={MENU_LINKS_WATCH} />
                    </div>
                    <MenuSection title="Awards & Events" icon="FaTv" links={MENU_LINKS_AWARDS} />
                </div>
                <div className="px-11 pr-35 flex justify-between ">
                    <MenuSection title="Celebs" icon="FaTv" links={MENU_LINKS_CELEBS} />
                    <MenuSection title="Community" icon="FaTv" links={MENU_LINKS_COMMUNITY} />
                </div>
            </div>
        </div>
    )
}
export default FullMenu;