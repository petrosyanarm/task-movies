
function MenuSection({ title, links, icon }) {
  return (
    <div className="flex gap-5">
      <div className="text-yellow text-[30px]">
        {icon}
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-bold text-2xl">{title}</span>
        {links.map((item) => (
          <div key={item.id} className="flex flex-col">
            <span className="hover:underline cursor-pointer">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
