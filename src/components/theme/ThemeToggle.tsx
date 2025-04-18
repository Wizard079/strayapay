"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"

import * as React from "react"
import { Button } from "@/components/ui/button"


export function ModeToggle() {
  const { setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = React.useState("dark")
  
  const changeTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light")
      setCurrentTheme("light")
    } else if (currentTheme === "light") {
      setTheme("dark")
      setCurrentTheme("dark")
    } 
  }
  
  return (
    <Button onClick={changeTheme} variant="outline" size="icon" className="bg-transparent">
    {currentTheme === "dark" ? (
      <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
    ) : (
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
    )}
  </Button>
  )
}