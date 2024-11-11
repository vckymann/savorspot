import { CarouselSpacing } from "@/components/shadcn/Carousel";
import { useSelector } from "react-redux";

function Specials() {

  const menuItems = useSelector((state) => state.menu.items);
  console.log(menuItems);
  
  return (
    <div className="px-24 my-40">
        <h2 className="text-6xl font-bold text-white text-center">Chef's Specials</h2>
        <p className="text-center text-zinc-400 py-8 mb-20">
        Discover our Chef's Specials, crafted to perfection and loved by our patrons. Enjoy these exclusive <br />dishes that showcase our culinary expertise and creativity.</p>
        <CarouselSpacing items={menuItems} basis={"sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"} menu={false}/>                
      </div>
  )
}

export default Specials
