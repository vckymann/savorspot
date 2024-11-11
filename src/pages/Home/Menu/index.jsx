import { CarouselSpacing } from "@/components/shadcn/Carousel"
import { useSelector } from "react-redux"

function SpecialMenu() {

  const menuItems = useSelector((state) => state.menu.items);
  return (
    <div className="px-24 my-40">
        <h2 className="text-6xl font-bold text-white text-center">Special Menu</h2>
        <p className=" text-center text-zinc-400 py-8 mb-20">Some of our special food menu is here these are what our customers <br /> usually order. If you want you can order from here.</p>
        <CarouselSpacing items={menuItems} basis={"sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"} menu={true} />
      </div>
  )
}

export default SpecialMenu
