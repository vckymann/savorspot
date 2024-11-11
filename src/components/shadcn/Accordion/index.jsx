import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./base"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full max-w-[50rem] px-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer options for dietary restrictions or preferences?</AccordionTrigger>
          <AccordionContent>
          Yes! We provide a variety of options to cater to different dietary needs, including vegetarian, vegan, gluten-free, and dairy-free dishes. Use the filter options on our menu to find dishes that meet your preferences.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you accommodate large group bookings or private events?</AccordionTrigger>
          <AccordionContent>
          Yes, we can host large groups and private events. Please contact us to discuss your requirements, and we’ll be happy to help make your event memorable!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you offer catering services for events?</AccordionTrigger>
          <AccordionContent>
          Yes, we offer catering services for both small and large events. Contact us to discuss options for your event
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  