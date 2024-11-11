"use client";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../../../utils/cn";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import propTypes from "prop-types";

export const FloatingNav = ({ navItems, className }) => {
  const currentRoute = useLocation();

  const {scrollYProgress} = useScroll();

  const [visible, setVisible] = useState(false);

  const checkIfScrollable = () => {
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    return docHeight > windowHeight;
  }

  useEffect(() => {
    if (checkIfScrollable()) {
      setVisible(true);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => { 
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      const isScrollable = checkIfScrollable();

      if (!isScrollable) {
        setVisible(true);
      } else if (scrollYProgress.get() < 0) {
        setVisible(true);
      } else if (direction < 0.0002) {
        setVisible(true);
      } else if (currentRoute.pathname === "/auth") {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="nav-container"
        className={cn(
          "flex max-w-fit fixed top-4 rounded-full inset-x-0 mx-auto border-[0.1px] border-white bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-2 py-2 items-center justify-center space-x-4",
          className
        )}
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.2 }}
      >
        {navItems.map((navItem, idx) => (
          <motion.div          
            key={`nav-item-${idx}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: idx * 0.1 }}
          >
            <NavLink
              key={`link-${idx}`}
              to={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 hover:text-neutral-300"
              )}
            >
              <motion.button
                className={cn(
                  "text-sm font-medium relative text-white px-4 py-2 rounded-full ",
                  {
                    "bg-gradient-to-r from-transparent via-blue-500 to-transparent":
                      currentRoute.pathname === navItem.link,
                    "border border-white/[0.2]": currentRoute.pathname === navItem.link
                  }
                )}
                whileHover={{ scale: 1.05                
                 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
                {currentRoute.pathname === navItem.link && (
                  <motion.span
                    className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"
                    layoutId="underline"
                  />
                )}
              </motion.button>
            </NavLink>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

FloatingNav.propTypes = {
  navItems: propTypes.array,
  className: propTypes.string,
};
