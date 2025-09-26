'use client'

import { MoonIcon, StarIcon } from "lucide-react";
import { useState } from "react"
import { Button } from "@/components/ui/button";

export function ButtonDarkMode() {
    const [ theme, setTheme ] = useState('light')

    const toggleDarkMode = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }

    return (
        <>
            <Button size="icon" onClick={toggleDarkMode} className="bg-primary-foreground hover:bg-primary-accent dark:bg-[#212121] dark:hover:bg-[#262626]">
                {
                    theme === 'light' ? (
                        <MoonIcon className="text-white" />
                    ) : (
                        <StarIcon className="text-gray-200"/>
                    )
                }
            </Button>
        </>
    )
}