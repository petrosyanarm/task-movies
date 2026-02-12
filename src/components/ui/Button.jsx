import { twMerge } from "tailwind-merge";

function Button({ type = "button", onClick, children, className, variant }) {
    const variantClasses = {
        primary: 'px-3 py-1 items-center gap-2 hover:bg-gray-700 cursor-pointer transition-colors duration-300 rounded-[25px]',
        secondary: 'w-full flex gap-1 items-center justify-between rounded text-white',
        danger: 'w-full flex gap-1 items-center focus:outline-none',
        fourth: 'px-4 py-2 border hover:bg-neutral-600  text-sm rounded-3xl',
        five: 'px-3 flex justify-center items-center gap-1 hover:bg-neutral-600 text-sm rounded-3xl'
    }
    return (
        <button type={type} onClick={onClick} className={twMerge(className, "cursor-pointer", variantClasses[variant])}>{children}</button>
    )
}
export default Button;