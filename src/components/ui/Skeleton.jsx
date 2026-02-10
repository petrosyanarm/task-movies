const Skeleton = () => {
    return (
        <div role="status" className ="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className ="flex items-center justify-center  bg-neutral-600  rounded-base sm:w-15 rounded-[5px]">
                <svg className ="w-11 h-15 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" /></svg>
            </div>
            <div className ="w-full">
                <div className ="h-2.5 bg-neutral-600 rounded-full w-35 mb-4"></div>
                <div className ="h-2  bg-neutral-600  rounded-full max-w-45 mb-2.5"></div>
                <div className ="h-2  bg-neutral-600  rounded-full max-w-45 mb-2.5"></div>
            </div>
            <span className ="sr-only">Loading...</span>
        </div>
    )
};

export default Skeleton;