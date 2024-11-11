import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setSelectedItem } from "@/store/slices/menuSlice"

function useMenu() {

    const  menuItems = useSelector((state) => state.menu.items)
    const selectedItem = useSelector((state) => state.menu.selectedItem);  

  useEffect(() => {
    if (Object.keys(selectedItem).length !== 0) {
      SetShowdrawer(true);  
    } else {
      SetShowdrawer(false);
    }
  }, [ selectedItem ]);

  const dispatch = useDispatch();
  
  const { register, watch,reset } = useForm();

  const [filteredItems, setFilteredItems] = useState(menuItems);

  const [drawerOpen,SetShowdrawer] = useState(false);

  const [noItems, setNoItems] = useState(false);

  const handleClearFilters = () => {
    reset({
      cuisine: "",
      category: "",
      rating: "",
      dietaryPref: "",
      price: "",
    });
  };

  const onFilter = (filters) => {
    const { cuisine, category, rating, dietaryPref, price, search } = filters;
    

    let filtered = menuItems;

    if (search) {
      filtered = filtered.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()) || item.cuisine.toLowerCase().includes(search.toLowerCase()));
    }
    
    if (cuisine !== "") {
      filtered = filtered.filter(item => item.cuisine === cuisine);      
    }
    if (category !== "") {
      filtered = filtered.filter(item => item.category === category);
    }
    if (rating !== "") {
      const minRating = parseFloat(rating);
      const maxRating = minRating + 1;
      filtered = filtered.filter(item => item.star_rating >= minRating && item.star_rating < maxRating);
    }
    
    if (dietaryPref !== "") {
      filtered = filtered.filter(item => {
        console.log(item.
          dietary_preferences.includes(dietaryPref))
        return item.
        dietary_preferences.includes(dietaryPref)});
    }
    
    if (price !== "") {
      filtered = filtered.filter(item => item.price <= price);
    }

    if(filtered.length === 0) {
      setNoItems(true);
    } else {
      setNoItems(false);
    }
    
    setFilteredItems(filtered);
  }

  useEffect(() => {
    const subscription = watch((filters) => onFilter(filters))
    return () => subscription.unsubscribe()
  }, [watch])

  const handleViewDetails = (item) => {
    dispatch(setSelectedItem(item));
    SetShowdrawer(true);
  };

  return { filteredItems, drawerOpen, handleViewDetails, handleClearFilters, noItems, SetShowdrawer, selectedItem , register, watch, reset};
}

export default useMenu
