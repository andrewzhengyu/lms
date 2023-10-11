import MobileSidebar from "./MobileSidebar"
import NavbarRoutes from "./NavbarRoutes"



const Navbar = () => {

  return (
    <div className="flex items-center">
      <MobileSidebar/>
      <NavbarRoutes/>
    </div>
  )
}

export default Navbar