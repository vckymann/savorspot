"use client";
import { FloatingNav } from "./base";
import { useLocation } from "react-router-dom";
import { IconBadge, IconBaguette, IconCaretDown, IconCarTurbine, IconHome, IconInfoCircle, IconMenu, IconShoppingBag, } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { CheckCircle } from "lucide-react";
export function FloatingNavDemo() {

  const currentRoute = useLocation();
  let navItems = [];

  const itemAdded = useSelector((state) => state.cart.itemAdded);
  const orderConfirmed = useSelector((state) => state.cart.orderConfirmed);

  if (itemAdded) {
    navItems = [
      {
        name: `Item added to cart`,
        link: "/cart",
        icon: <CheckCircle className="h-7 w-7 text-green-500" />,
      },
    ]
  } else if (orderConfirmed) {
    navItems = [
      {
        name: `Order confirmed`,
        link: "/cart",
        icon: <CheckCircle className="h-7 w-7 text-green-500" />,
      },
    ]
  } else {
   navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className={`h-4 w-4 ${currentRoute.pathname === "/" ? "text-white" : "text-neutral-500"}`} />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconInfoCircle className={`h-5 w-5 ${currentRoute.pathname === "/about" ? "text-white" : "text-neutral-500"}`} />,
    },
    {
      name: "Menu",
      link: "/menu",
      icon: (
        <IconMenu className={`h-5 w-5 ${currentRoute.pathname === "/menu" ? "text-white" : "text-neutral-500"}`} />
      ),
    },
    {
      name: "Cart",
      link: "/cart",  
      icon: <IconShoppingBag className={`h-5 w-5 ${currentRoute.pathname === "/cart" ? "text-white" : "text-neutral-500"}`} />,
    }    
  ];
  }

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}