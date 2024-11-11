import { Rating } from "@mui/material"
import { Card, CardContent } from "./base/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./base/carousel"
import { ShoppingBagIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setSelectedItem } from "@/store/slices/menuSlice"
import PropTypes from "prop-types"

export function CarouselSpacing({ basis,menu, items}) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  if (!items) return null;

  const handleBuyNow = (item) => {
    dispatch(setSelectedItem(item));
    navigate("/menu");
  };



  
  return (
    <Carousel className="w-full">
      {!menu ? 
      <CarouselContent className="-ml-1">      
        {items.slice(5, 11).map((item) => (
          <CarouselItem key={item.id} className={`pl-1 ${basis}`}>
            <div className="p-1">
              <Card className="w-full">              
                <>
                <CardContent className="flex flex-col items-center min-h-[370px]">
                  <div className="border-4 border-blue-500 rounded-full mt-4 min-h-[176px] flex items-center justify-center">
                  <img src={item.image_url} className="max-w-44 mx-auto p-2" alt="" />
                  </div>
                  <p className="text-xl text-center font-bold pt-4 max-w-44">{item.name}</p>                  
                  <p className="text-center text-zinc-400 py-3">{item.description}</p>
                </CardContent>
                  <div className="flex px-3 w-full justify-between py-3">
                    <button className="border-2 px-3 text-white py-1 rounded-full">{item.price}</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-full" onClick={() => {
                      handleBuyNow(item)                 
                    }}>Buy Now</button>
                  </div>
                  </>                                 
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent> 
      
      : 

      <CarouselContent className="-ml-1">
        {items.slice(0, 5).map((item) => (
          <CarouselItem key={item.id} className={`pl-1 ${basis}`}>
            <div className="p-1">
              <Card className="w-full">
                <>
                <CardContent className="flex flex-col p-0">
                  <div className="mt-4 sm:pr-4 flex justify-center sm:justify-end">
                  <img src={item.image_url} className=" max-w-52 border-4 border-blue-500 rounded-full p-2" alt="" />
                  </div>
                  <p className="text-xl font-bold pt-6 pl-3">{item.name}</p>                  
                  <div className="flex items-center">
                  <Rating className="pl-3 pt-2" name="read-only" value={item.star_rating} readOnly precision={0.1} sx={{stroke:"gold", color:"gold"}} size="small" />
                  <p className="text-zinc-400 pl-2 text-xs pt-2">({item.rating_count})</p>
                  </div>
                  <div className="flex px- w-full justify-between pt-6">
                    <button className="text-4xl text-blue-500 px-2 py-1 flex-1">${item.price}</button>
                    <button onClick={() => {
                      handleBuyNow(item)
                    }} className="bg-blue-500 hover:bg-blue-700 flex justify-center py-6 text-white flex-1 rounded-br-xl rounded-tl-md mr-[0.5px]"><ShoppingBagIcon className="hover:bg-blue-700" size={40} /></button>
                  </div>
                </CardContent>
                </>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

CarouselSpacing.propTypes = {
  basis: PropTypes.string,
  menu: PropTypes.bool,
  items: PropTypes.array,
}