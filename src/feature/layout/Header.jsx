"use client";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import React from "react";

export const Header = async () => {
  return (
    <header className=" border-b border-b-accent">
      <div className=" container flex items-center py-8 m-auto gap-1 ">
        <h2 className=" text-xl font-bold mr-auto">B. JETHRO</h2>
        <div className=" flex ">
       
        </div>
        <div className=" flex gap-8">
          <Button>Me joindre</Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
