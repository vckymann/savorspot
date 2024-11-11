import { Divider } from "@mui/material"
import { Card, CardContent } from "@/components/shadcn/Carousel/base/card"
import { Star } from "lucide-react"
import { DrawerDemo } from "../../components/shadcn/Drawer" 
import { IconSearch } from "@tabler/icons-react"
import useMenu from "@/hooks/pageHooks/useMenu"

function Menu() {

  const { drawerOpen, SetShowdrawer, handleClearFilters, filteredItems, handleViewDetails, noItems, register, } = useMenu();
    
  return (
    <div className="max-w-[110rem] mx-auto flex flex-col items-center sm:flex-row sm:items-start">
      <DrawerDemo open={drawerOpen} openChange={SetShowdrawer} />
      <div className="flex flex-col max-w-56 text-white ml-4 mt-12 pb-4 sm:h-screen mr-6 sm:sticky sm:top-0 sm:mt-0">
        <p className="text-4xl font-bold text-center mb-5 mt-8">Filters</p>
        <label htmlFor="search" className="flex items-center border-[1px] border-[#dfd7d7] rounded-md mb-3">
        <input className="placeholder:text-blue-500 rounded-md py-3 -mr-3 lg:-mr-0 pl-1 outline-none text-white bg-transparent" type="text" placeholder="Search..." name="search" id="search" {...register("search")}/>        
        <button className=""><IconSearch color="white" width={28} height={28}/></button>
        </label>
        <form className="flex flex-col">
          <select className="text-lg bg-transparent border-[1px] py-2 pr-4 mb-3 pl-2" {...register("cuisine")}>
            <option value="">Cuisine</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="American">American</option>
            <option value="French">French</option>
          </select>
          <select className="text-lg bg-transparent border-[1px] py-2 pr-4 mb-3 pl-2" {...register("category")}>
          <option value="">category</option>
            <option value="Appetizers">Appetizers</option>
            <option value="Main Course">Main Course</option>
            <option value="Dessert">Dessert</option>
            <option value="Side Dish">Side Dish</option>
          </select>
          <select className="text-lg bg-transparent border-[1px] py-2 pr-4 mb-3 pl-2" {...register("rating")}>
            <option value="">
                Popularity
            </option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          <select className="text-lg bg-transparent border-[1px] py-2 pr-8 mb-3 pl-2" {...register("dietaryPref")}>
            <option value="">Dietary Preferences</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Gluten-Free">Gluten-Free</option>
          </select>
          <input type="number" className="text-lg bg-transparent border-[1px] py-2 pr-8 mb-3 pl-2" placeholder="Max Price (in $)" {...register("price",)} />
          <button className="text-lg bg-blue-500 border-[1px] py-2 pr-8 mb-3 pl-2" onClick={handleClearFilters}>Clear Filters</button>
        </form>
      </div>
      <Divider orientation="horizontal" flexItem className="bg-white" />
      <Divider orientation="vertical" flexItem className="bg-white" />
      <div className="pl-4 mt-4 mx-auto">
        <h2 className="text-4xl text-right w-full font-bold text-white mb-8">{noItems ? 
        "" : "Menu"}</h2>
        {noItems && <p className="text-center text-white text-5xl mt-24">No items found</p>}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-4">
        {!noItems && filteredItems.map((item) => (
            <Card key={item.id} className="max-w-72 flex flex-col justify-between">
            <CardContent className="flex flex-col items-center justify-center gap-4 min-h-[350px]">
                  <div className="flex gap-2 items-center justify-end w-full">
                    <p className="text-zinc-300 text-lg">{item.star_rating}</p>
                    <Star size={20} fill="#FFC107" stroke="#FFC107"/>
                  </div>
                  <div className="border-4 border-blue-500 rounded-full min-h-[176px] flex items-center justify-center">
                  <img src={item.image_url} className="max-w-44 mx-auto p-2" alt="" />
                  </div>
                  <p className="text-xl text-center font-bold">{item.name}</p>                  
                  <p className="text-center text-zinc-400 ">{item.description}</p>                  
            </CardContent>
            <div className="flex px-3 w-full justify-between py-3">
                    <button className="border-2 px-3 text-white py-1 rounded-full">${item.price}</button>                    
                    <button onClick={() => handleViewDetails(item)} className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-full">View Details</button>                    
                  </div>
        </Card>
        ))}        
            </div>
      </div>
    </div>
  )
}

export default Menu
