import Navbar from "./_components/Navbar"
import Sidebar from "./_components/Sidebar"




const DashboardLayout = ({
    children
}:{children:React.ReactNode}) => {
  return (
    <div className="h-full">
        <div className="p-4 md:pl-56 fixed w-full z-50 border-b bg-white">
            <Navbar/>
        </div>
        <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
            <Sidebar/>
        </div>
        <main className="md:pl-56 h-screen pt-[80px]">
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout