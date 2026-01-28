"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
    value?: string;
    onValueChange?: (value: string) => void;
}>({});

const Accordion = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        type?: "single" | "multiple";
        collapsible?: boolean;
        value?: string;
        onValueChange?: (value: string) => void;
    }
>(({ className, children, value: controlledValue, onValueChange, ...props }, ref) => {
    const [value, setValue] = React.useState(controlledValue || "");

    const handleValueChange = (newValue: string) => {
        const updatedValue = newValue === value ? "" : newValue;
        setValue(updatedValue);
        if (onValueChange) onValueChange(updatedValue);
    };

    return (
        <AccordionContext.Provider value={{ value, onValueChange: handleValueChange }}>
            <div ref={ref} className={cn("", className)} {...props}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, children, ...props }, ref) => {
    return (
        <div ref={ref} className={cn("border-b", className)} data-value={value} {...props}>
            {/* Pass value to children via cloneElement or context (simplified here) */}
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // @ts-ignore
                    return React.cloneElement(child, { itemValue: value });
                }
                return child;
            })}
        </div>
    );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & { itemValue?: string }
>(({ className, children, itemValue, onClick, ...props }, ref) => {
    const { value, onValueChange } = React.useContext(AccordionContext);
    const isOpen = value === itemValue;

    return (
        <div className="flex">
            <button
                ref={ref}
                onClick={(e) => {
                    if (onValueChange && itemValue) onValueChange(itemValue);
                    if (onClick) onClick(e);
                }}
                className={cn(
                    "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                    className
                )}
                data-state={isOpen ? "open" : "closed"}
                {...props}
            >
                {children}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
        </div>
    );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { itemValue?: string }
>(({ className, children, itemValue, ...props }, ref) => {
    const { value } = React.useContext(AccordionContext);
    const isOpen = value === itemValue;

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div ref={ref} className={cn("pb-4 pt-0", className)} {...props}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
