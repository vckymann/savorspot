import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function useCart() {

  const dispatch = useDispatch();    

  const items = useSelector((state) => state.cart.items);
  const drinks = useSelector((state) => state.cart.drinks);
  
  const [scheduledDelivery, setScheduledDelivery] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const toggleDeliverySchedule = () => setScheduledDelivery(!scheduledDelivery);

  const itemsTotal = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  const drinksTotal = drinks.reduce((total, drink) => total + 1.25 * drink.quantity, 0).toFixed(2);
  const taxes = ((10 / 100) * (Number(itemsTotal) + Number(drinksTotal))).toFixed(2);

    
  return {
    items,
    drinks,
    scheduledDelivery,
    selectedDate,
    toggleDeliverySchedule,    
    itemsTotal,    
    drinksTotal,
    taxes,
    dispatch,
    setSelectedDate
  }
}

export default useCart
