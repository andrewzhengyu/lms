import SidebarRoutes from "./SidebarRoutes"


const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
        <div className="p-4 font-extrabold text-[20px] text-center">
            Oomgandrew
        </div>
        <div className="flex flex-col w-full">
            <SidebarRoutes/>
        </div>
    </div>
  )
}

export default Sidebar