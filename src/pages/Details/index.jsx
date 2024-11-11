import { useSelector } from "react-redux"
function Details() {

    const item = useSelector(state => state.menu.selectedItem)
  return (
    <div className="text-white">
      {item.name}, {item.price}, {item.description}, {item.image_url}, {item.cuisine}, {item.category}, {item.star_rating}, {item.dietary_preferences}, {item.price},
    </div>
  )
}

export default Details
