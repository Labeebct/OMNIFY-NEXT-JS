const SidebarIconLi = ({ sidNavLi }) => {
  return (
    <ul className="flex flex-col w-full h-auto p-4">
      {sidNavLi.map((data) => (
        <li key={data.id} className="flex hover:bg-slate-200 px-2 min-w-8 rounded-sm cursor-pointer gap-3 h-12 items-center">
          <h4 ><data.icon sx={{ fontSize: '1.1rem' }} /></h4>
          <h3 className="text-[.9rem]">{data.navHead}</h3>
        </li>
      ))}
    </ul>
  );
};

export default SidebarIconLi;
