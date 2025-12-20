import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent className="p-4 space-y-2">
        <Link to="/" className="block font-medium">
          🎬 Películas
        </Link>
        <Link to="/favorites" className="block font-medium">
          ⭐ Favoritos
        </Link>
      </SidebarContent>
    </Sidebar>
  )
}
