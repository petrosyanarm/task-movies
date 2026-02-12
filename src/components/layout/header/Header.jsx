import { RxHamburgerMenu } from "react-icons/rx";
import SearchDropdown from "@/components/layout/header/SearchDropdown";
import Button from "@/components/ui/Button";
import LanguageDropdown from "@/components/layout/header/LanguageDropdown";
import { useNavigate } from "react-router-dom";
import FullMenu from "@/components/layout/header/FullMenu";
import { useMoviesStore } from "@/store/useMoviesStore";
import MobileMenu from "@/components/layout/header/MobileMenu";
function Header() {
    const { setOpenMenu } = useMoviesStore()
    const navigate = useNavigate()
    return (
        <div className="w-full bg-neutral-900">
            <div className="max-w-7xl mx-auto px-3">
                <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2 flex-1">
                        <div className="bg-yellow px-1 cursor-pointer rounded-lg" onClick={() => navigate('/')}>
                            <span className="text-black text-[24px] font-bold">IMDb</span>
                        </div>
                        <Button variant="primary" className="flex items-center gap-1" onClick={() => setOpenMenu(true)}>
                            <RxHamburgerMenu className="text-white" />
                            <span className="hidden lg:block text-white font-bold text-[16px]">Menu</span>
                        </Button>
                        <FullMenu />
                        <MobileMenu />
                        <div className="flex-1 max-w-180">
                            <SearchDropdown />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="primary" className="hidden lg:flex">
                            <span className="text-white font-bold text-sm">
                                IMDb <span className="text-blue-400">Pro</span>
                            </span>
                        </Button>
                        <Button variant="primary" className="hidden lg:flex">
                            <span className="text-white font-bold text-sm">Watchlist</span>
                        </Button>
                        <Button variant={'primary'} className="px-2 lg:px-3">
                            <span className="text-white text-[11px] lg:text-sm font-bold">Sign in</span>
                        </Button>
                        <LanguageDropdown />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;


