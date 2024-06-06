const SidebarIconLi = ({ sidNavLi, handleComponent ,currentComp}) => {
  return (
    <ul className="flex flex-col w-full h-auto gap-1 p-4 overflow-hidden">
      {sidNavLi.map((data) => (
        <li
          key={data.id}
          //For filter box
          onClick={() => handleComponent && handleComponent(data.navHead)}
          className={`flex hover:bg-slate-200 px-2 min-w-8 ${currentComp == data.navHead && 'bg-slate-200' } rounded-sm cursor-pointer gap-3 h-12 items-center`}
        >
          <h4>
            <data.icon sx={{ fontSize: "1.1rem" }} />
          </h4>
          <h3 className="text-[.85rem] whitespace-nowrap">{data.navHead}</h3>
        </li>
      ))}
    </ul>
  );
};

export default SidebarIconLi;
