import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "@/components/ui/Button";
function MobileMenuSection({ title, links,icon }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col gap-4">
            <div className={twMerge("flex w-full justify-between ")} onClick={() => setOpen(!open)}>
                <div className="flex items-center gap-4">
                    <div className="text-2xl text-neutral-400">{icon}</div>
                    <span className="text-base">{title}</span>
                </div>
                <div className="flex items-center">
                    <Button>
                        <MdKeyboardArrowDown className={twMerge("transition-transform text-2xl text-neutral-400", open ? "rotate-180" : "")} />
                    </Button>
                </div>
            </div>
            <div className={twMerge("overflow-hidden px-8 flex flex-col gap-2 transition-all duration-300 ease-in-out", open ? "max-h-96 opacity-100 translate-y" : "max-h-0 opacity-0 -translate-y-2")}>
                {links.map((item) => (
                    <div key={item.id} className="flex flex-col">
                        <span className="hover:underline cursor-pointer">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MobileMenuSection;