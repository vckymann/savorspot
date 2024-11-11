import { AlertDialogDemo } from "@/components/shadcn/Dialog";
import useCart from "@/hooks/pageHooks/useCart";
import { addDrinks, addItem, removeDrinks, removeItem } from "@/store/slices/cartSlice";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";


function Cart() {

  const { items, drinks, itemsTotal, drinksTotal, taxes, scheduledDelivery, selectedDate, toggleDeliverySchedule, dispatch, setSelectedDate} = useCart();

  return (
    <div className="flex justify-center gap-20 items-center mt-14 flex-col lg:flex-row lg:items-start p-8">
      {/* Delivery Information */}
      <div className="border text-white p-6 rounded-lg shadow-md max-w-[60rem]">
        <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="border bg-transparent p-2 rounded-md"
              placeholder="Bryan Cranston"
            />
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Mobile Number</label>
            <input
              type="text"
              className="border bg-transparent p-2 rounded-md"
              placeholder="+1 424-236-3574"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="border bg-transparent p-2 rounded-md"
              placeholder="thegon"
            />
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">City</label>
            <input
              type="text"
              className="border bg-transparent p-2 rounded-md"
              placeholder="Hawthorne"
            />
          </div>

          {/* State */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">State</label>
            <select className="border bg-transparent p-2 rounded-md">
              <option>California</option>
              <option>New York</option>
            </select>
          </div>

          {/* ZIP */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">ZIP</label>
            <input
              type="text"
              className="border bg-transparent p-2 rounded-md"
              placeholder="90250"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              className="border bg-transparent p-2 rounded-md"
              placeholder="4796 Libby Street"
            />
          </div>
        </form>

        {/* Schedule Delivery */}
        <div className="mt-6 flex items-center space-x-4">
          <label className="text-sm font-medium">Schedule Delivery</label>
          <input
            type="checkbox"
            className="w-4 h-4 appearance-none border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-transparent focus:outline-none transition-all duration-200 relative checked:before:content-['✓'] checked:before:text-white checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center"
            checked={scheduledDelivery}
            onChange={toggleDeliverySchedule}
          />
        </div>

        {scheduledDelivery && (
          <div className="mt-4">
            <label className="text-sm font-medium">Select Delivery Date</label>
            <input
              type="date"
              className="border text-black p-2 rounded-md w-full mt-2"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        )}

        {/* Payment Method */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
          <div className="flex gap-3">
            <label className="flex items-center gap-2">
              <input className="appearance-none border h-3 w-3 rounded-full checked:bg-blue-600" type="radio" name="payment" />
              Online Payment
            </label>
            <label className="flex items-center gap-2">
              <input className="appearance-none border h-3 w-3 rounded-full checked:bg-blue-600" type="radio" name="payment" />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input className="appearance-none border h-3 w-3 rounded-full checked:bg-blue-600" type="radio" name="payment" />
              POS on Delivery
            </label>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border text-white p-6 rounded-lg shadow-md w-full max-w-[25rem] h-full">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-4 border-2 p-4">
          {/* Order Items */}
          {items.length > 0? items.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between items-center">
                  <p className="max-w-24">{item.name}</p>
                  <p>${item.price}</p>                  
                  <div className="flex gap-3">
                    <button className="bg-gray-800 hover:bg-gray-700 rounded-md" onClick={() => dispatch(removeItem(item.id))}>{item.quantity > 1 ? <IconMinus /> : <IconTrash />}</button>
                      <p>{item.quantity}</p>
                    <button className="bg-gray-800 hover:bg-gray-700 rounded-md" onClick={() => dispatch(addItem({...item, quantity: 1}))}><IconPlus /></button>
                  </div>
              </div>                                
            </div>
            )) : <p className="text-white">No items</p>}          
        </div>
        <p className="mt-4">Total: ${itemsTotal}</p>
        {drinks && drinks.length > 0 &&
        <div className="space-y-4 mt-4 border-2 p-4">
          {drinks && drinks.map((drink, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">                
                <p className="max-w-24">{drink.name}</p>                
                <div className="flex gap-3 my-2">
                  <button className="bg-gray-800 hover:bg-gray-700 rounded-md" onClick={() => dispatch(removeDrinks(drink.name))}>{drink.quantity > 1 ? <IconMinus /> : <IconTrash />}</button>
                    <p>{drink.quantity}</p>
                  <button className="bg-gray-800 hover:bg-gray-700 rounded-md" onClick={() => dispatch(addDrinks(drink))}><IconPlus /></button>
                </div>
              </div>
            </div>
          ))}                  
        </div>
        }
        {drinks && drinks.length > 0 && <p className="mt-4">Total: ${drinksTotal}</p>}
        {/* Totals */}
        <div className="mt-6 mx-2 space-y-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>${ (Number(itemsTotal) + Number(drinksTotal)).toFixed(2)}</p>
          </div>
        {(items.length > 0 || drinks.length > 0 ) &&
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>$10</p>
          </div>
          }
          <div className="flex justify-between">
            <p>Taxes</p>
            <p>${taxes}</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Total</p>
            <p>${ (Number(itemsTotal) + Number(drinksTotal) + 10 + Number(taxes)).toFixed(2) }</p>
          </div>
        </div>
        <div className="mt-6">
          { (items.length > 0 || drinks.length > 0) && <AlertDialogDemo />}
        </div>
      </div>
    </div>
  );
}

export default Cart