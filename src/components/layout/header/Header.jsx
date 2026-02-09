import { RxHamburgerMenu } from "react-icons/rx";
import SearchDropdown from "@/components/layout/header/SearchDropdown";
import Button from "@/components/ui/Button";
import LanguageDropdown from "@/components/layout/header/LanguageDropdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FullMenu from "@/components/layout/header/FullMenu";
function Header() {
    const[open,setOpen]=useState(false)
    const navigate=useNavigate()
    return (
        <div className="w-full bg-neutral-900">
            <div className="max-w-7xl w-full mx-auto">
                <div className="px-3 py-3 flex gap-4 items-center">
                    <div className="flex gap-2 items-center">
                    <div className="bg-yellow px-1 cursor-pointer rounded-lg" onClick={()=>navigate('/')}>
                        <span className="text-black text-[24px] font-bold">IMDb</span>
                    </div>
                    <div>
                        <Button variant={'primary'} onClick={()=>setOpen(!open)}>
                            <RxHamburgerMenu className="text-white" />
                            <span className="text-white font-bold text-[16px]">Menu</span>
                        </Button>
                        <FullMenu open={open} setOpen={setOpen}/>     
                    </div>
                    <div className="w-170">
                        <SearchDropdown/>
                    </div>
                    <Button variant={'primary'}>
                        <span className="text-white text-[14px] font-bold">IMDb<span className="text-[14px] font-bold text-blue-400">Pro</span></span>
                    </Button>
                    </div>
                    <div className="flex gap-3 items-center">
                    <Button variant={'primary'}>
                        <span className="text-white text-[14px] font-bold">Watchlist</span>
                    </Button>
                    <Button variant={'primary'}>
                        <span className="text-white text-[14px] font-bold">Sign in</span></Button>
                    <div>
                        <LanguageDropdown />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;


