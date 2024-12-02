import { BellRing, Menu, Search } from "lucide-react"
import Link from "next/link"

import { itemsNavbar } from "@/data/itemsNavbar"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Logo } from "../../Logo"

export const NavbarMobile = () => {
  return (
    <div className="p-4 flex justify-between">
      <Logo/>
      <Sheet>
        <SheetTrigger>
          <Menu/>
        </SheetTrigger>
        <SheetContent side="left" className="bg-black">
          <SheetHeader>
            <SheetTitle className="mb-6 mt-2">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4">
            {itemsNavbar.map((item) => (
              <Link 
                key={item.name} 
                href={item.Link} 
                className="hover:text-gray-300 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="border-[1px] border-white/70 my-5"/>
          <div className="flex justify-between gap-6 mt-4">
            <Search/>
            <BellRing/> 
            {/* Todo: user */}
            <p>user</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
export default NavbarMobile