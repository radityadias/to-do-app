import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

import { ButtonDarkMode } from "@/components/app-headers/button-dark-mode";

export function AppHeader() {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
            <div className="flex items-center justify-between gap-2 px-3 text-white-primary w-full">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="text-text-primary hover:bg-primary-accent hover:text-white active:bg-primary-foreground "/>
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <p className="font-medium text-lg hidden md:block text-text-primary">Build your time!</p>
                </div>
                <div>
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex h-10 text-text-primary min-w-full w-full sm:w-52 lg:w-96 bg-primary rounded-md placeholder:text-text-primary/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 max-w-96 transition-all duration-300 pr-10"
                        />
                    </div>
                </div>
                <div>
                    <ButtonDarkMode />
                </div>
            </div>
        </header>
    )
}