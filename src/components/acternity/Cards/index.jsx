import { HoverEffect } from "./base";
import { IconBowlChopsticks } from "@tabler/icons-react";
import { FolderHeart } from "lucide-react";
import { IconTruckDelivery } from "@tabler/icons-react";

export function CardHoverEffectDemo() {
  return (
    <div className="min-w-[20rem] max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
 const projects = [
  {
    symbol: <IconBowlChopsticks size={44} />,
    description:
      "We Serve all healthy food here. You can choose any food you like.",
  },
  {    
    symbol: <FolderHeart size={44} />,
    description:
      "Our food quality is excellent, you will get exactly what you ordered.",
  },
  {
    symbol: <IconTruckDelivery size={44} />,
    description:
      "We have the best service. We will deliver your food as soon as possible.",
  },  
];
