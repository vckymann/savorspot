import { ArrowDown, Minus, Plus } from "lucide-react"
import { useState } from "react";

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    FormControlLabel,
    Checkbox,
    Typography,
  } from "@mui/material";


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./base/drawer"

import { useDispatch, useSelector } from "react-redux"
import { Divider, Rating } from "@mui/material"
import { addDrinks, addItem, setItemAdded } from "@/store/slices/cartSlice";
import { setSelectedItem } from "@/store/slices/menuSlice";
import PropTypes from "prop-types"


export function DrawerDemo({open, openChange}) {

    const dispatch = useDispatch();
    const selectedItem = useSelector(state => state.menu.selectedItem)        

    const {
        name = "",
        description = "",
        star_rating = 0,
        rating_count = 0,
        category = "",
        cuisine = "",
        dietary_preferences = [], // Default to empty array if undefined
        image_url = ""
    } = selectedItem;
    
    const [quantity, setQuantity ] = useState(1);
    const [selectedDrinks, setSelectedDrinks] = useState([]);
    
    const audio = new Audio("/livechat-129007.mp3")

    const drinks = ["Coke", "Pepsi", "Sprite", "Fanta", "Mountain Dew"];    
    
  // Using an object to manage the selected states
  const handleCheckboxChange = (event, drinkName) => {
    const { checked } = event.target;
    console.log(checked);
    
    setSelectedDrinks((prevSelectedDrinks) => (checked ? [...prevSelectedDrinks, drinkName] : prevSelectedDrinks.filter((drink) => drink !== drinkName)));
  };

  const handleOrder = () => {
    dispatch(addItem({...selectedItem,quantity}));

    const drinksToAdd = selectedDrinks.map((drink) => ({
        name: drink,
        quantity: 1
    }))

    if (drinksToAdd.length > 0) {
        dispatch(addDrinks(drinksToAdd));
    }

    audio.play();

    setQuantity(1);
    setSelectedDrinks([]);
    openChange(false);
    
    dispatch(setItemAdded(true));
    dispatch(setSelectedItem({}));
    setTimeout(() => {
      dispatch(setItemAdded(false));
    }, 1500);
  }
    
    return (    
        <Drawer open={open} onOpenChange={openChange}>
            <DrawerContent className="bg-[#09090b] max-h-[80vh] overflow-hidden">
                <div className="w-full flex flex-col sm:flex-row items-center sm:items-start overflow-y-auto lg:overflow-hidden">
                    <div className="max-w-[32rem] flex flex-col justify-center items-center p-4 pt-4">
                        <img src={image_url} alt="" />
                        <DrawerHeader>
                            <DrawerTitle className="text-2xl text-white font-bold text-center">{name}</DrawerTitle>
                            <DrawerDescription className="text-xl font-semibold text-gray-400 text-center">{description}</DrawerDescription>
                        </DrawerHeader>
                        <Rating value={star_rating} precision={0.1} sx={{stroke:"gold", color:"gold"}} />
                        <p className="text-gray-300">({rating_count}) Reviews</p>
                        <ul className="text-gray-300 text-center mt-4">
                            <li>
                            category: {category}    
                            </li>
                            <li>
                            cuisine: {cuisine}
                            </li>
                            {dietary_preferences.length > 0 && (
                                <li>
                                Dietary Preferences: {dietary_preferences.join(', ')}
                                </li>
                            )}                            
                            <li>
                                Price: ${selectedItem.price}
                            </li>
                        </ul>
                        <div className="flex gap-6 mt-6">
                            <button onClick={() => setQuantity(prev => Math.max((prev - 1), 1))} className="border rounded-full p-1"><Minus width={28} height={28} color="white"/></button>
                            <p className="text-white text-2xl">{quantity}</p>
                            <button onClick={() => setQuantity(prev => prev + 1)} className="border rounded-full p-1"><Plus color="white" width={28} height={28} /></button>
                        </div>
                    </div>
        <Divider className="bg-white h-full" orientation={"vertical"} flexItem />
                    <div className="w-full">
                    <Accordion sx={{'border':'1px solid white'}}>
                        <AccordionSummary expandIcon={<ArrowDown color="white" />}>
                            <Typography>Add any drinks to your order</Typography>
                        </AccordionSummary>
                    <AccordionDetails sx={{'bgcolor':'#09090b', 'color':'white'}} >
                        {drinks.map((drink) => (
                            <FormControlLabel className="bg-transparent pr-2 rounded-md"
                            key={drink}
                            control=
                            {<Checkbox
                                onChange={(e) => handleCheckboxChange(e, drink)}
                                sx={{'& .MuiSvgIcon-root': {fontSize: 28}, color:'white'}}           
                            />}
                            label={drink}
                            />
                        ))}
                    </AccordionDetails>
                    </Accordion>
                    <div className="text-white border-2 p-4 mx-auto max-w-96 mt-14 lg:mt-10">
                        <div className="flex justify-around">
                            <p>Item:</p>
                            <p>${(quantity * selectedItem.price).toFixed(2)}</p>
                        </div>
                        <div className="flex justify-around mt-2">
                            <p>Drinks:</p>
                            <div className="flex flex-col">
                                    <p className="text-gray-400">
                                        {selectedDrinks.length} * ($1.25)
                                    </p>
                                    <p className="">
                                        = $({Math.round((selectedDrinks.length * 1.25) * 100) / 100})
                                    </p>                                    
                            </div>                            
                        </div>                                                
                    </div>
                    <p className="text-blue-500 text-7xl mx-auto max-w-96 mt-10 text-center">
                        ${selectedItem.price ? (quantity * selectedItem.price + Math.round((selectedDrinks.length * 1.25) * 100) / 100).toFixed(2) : "ordered"}
                    </p>
                        <DrawerFooter className={"mt-10 flex flex-col items-center"}>
                            <div className="w-full flex justify-around mb-4">
                                <button onClick={handleOrder} className="border rounded-sm py-3 px-12 bg-black text-white hover:bg-blue-500">Order</button>
                                <DrawerClose asChild onClick={() => {
                                    openChange(false);
                                    dispatch(setSelectedItem({}));
                                }} >
                                    <button className="border rounded-sm py-3 px-12 bg-black hover:bg-blue-500 text-white">Cancel</button>
                                </DrawerClose>
                            </div>                            
                        </DrawerFooter>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

Drawer.propTypes = {
    open: PropTypes.bool,
    openChange: PropTypes.func
}