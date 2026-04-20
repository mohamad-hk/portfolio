"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/app/lib/utils";

function Sheet({ open, onOpenChange, ...props }) {
  return (
    <SheetPrimitive.Root
      data-slot="sheet"
      open={open}
      onOpenChange={onOpenChange}
      {...props}
    />
  );
}

function SheetTrigger({ children, ...props }) {
  return (
    <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props}>
      {children}
    </SheetPrimitive.Trigger>
  );
}

function SheetPortal(props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({ className, ...props }) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
        className
      )}
      {...props}
    />
  );
}

function SheetContent({ className, children, ...props }) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed top-8 right-0 left-0 z-50 w-full h-fit bg-black border-b-2 border-muted-foreground/30",
          "flex flex-col gap-4",
          "duration-300",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[state=open]:slide-in-from-bottom-5 data-[state=closed]:slide-out-to-bottom-5",
          className
        )}
        {...props}
      >
        {children}

        <SheetPrimitive.Close className="absolute top-4 right-4 disabled:pointer-events-none" />
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

export { Sheet, SheetTrigger, SheetContent };
