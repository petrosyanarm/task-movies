import { useState, useRef } from "react";
import { LANGUAGES } from "@/utils/constants/Languages";
import { RiArrowDownSFill } from "react-icons/ri";
import Button from "@/components/ui/Button";
import { useOutsideClick } from "@/utils/hooks/useOutsideClick";
import { twMerge } from "tailwind-merge";

function LanguageDropdown() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(LANGUAGES[0]);
    const ref = useRef(null);
    useOutsideClick(ref, () => setOpen(false))
    return (
        <div className='hidden lg:flex' >
            <div ref={ref} onClick={() => setOpen(!open)} className="relative px-2 py-1 cursor-pointer rounded-2xl flex items-center gap-2 hover:bg-gray-700">
                <Button variant={'secondary'}>
                    <span className="flex text-sm items-center font-bold text-white gap-2">
                        {selected.code}
                    </span><RiArrowDownSFill className={twMerge("transition-transform text-[18px]", open ? "rotate-180" : "")}/>
                </Button>
                <div>
                    {open && (
                        <ul className="absolute w-70 py-3 flex flex-col gap-2 justify-center right-0 top-10 bg-neutral-900 rounded shadow z-999">
                            {LANGUAGES.map((item) => {
                                const Icon = item.icon
                                return (
                                    <li key={item.id} onClick={() => { setSelected(item); setOpen(false) }} className={`px-3 py-2 cursor-pointer text-white hover:bg-gray-700 flex items-center gap-2`}>
                                        <Icon className={twMerge(selected.id === item.id ? 'text-yellow' : 'text-white')} /> {item.title}</li>
                                )
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
export default LanguageDropdown;
