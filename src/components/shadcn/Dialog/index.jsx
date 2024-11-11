import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/shadcn/Dialog/base/alert-dialog"
  import { Button } from "@/components/shadcn/Dialog/base/button"
import { setOrderConfirmed } from "@/store/slices/cartSlice";
import { useDispatch } from "react-redux"
  
  export function AlertDialogDemo() {

    const dispatch = useDispatch();
    const audio  = new Audio("/livechat-129007.mp3")


    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Confirm Order</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
            Are you sure you want to place this order? Please review your items before confirming.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => {
                audio.play()
              dispatch(setOrderConfirmed(true))
              setTimeout(() => {
                dispatch(setOrderConfirmed(false))
              }, 1500);
              window.scrollTo(0, 0)
            }} className="">Confirm</AlertDialogAction>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  