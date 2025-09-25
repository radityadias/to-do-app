'use client'

import { MoonIcon, StarIcon } from "lucide-react";

import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button";

export function ButtonDarkMode() {
    const [ theme, setTheme ] = useState('light')

    const toggleDarkMode = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }

    useEffect(() => {

    }, [theme]);

    return (
        <>
            <Button size="icon" onClick={toggleDarkMode} className="bg-blue-foreground hover:bg-blue-foreground">
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