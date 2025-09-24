import '@/app/globals.css'
import { roboto } from "@/app/ui/fonts";

// Components
import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
          <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                  <header className="flex h-16 shrink-0 items-center gap-2 bg-blue-accent">
                      <div className="flex items-center gap-2 px-3 text-white-primary">
                          <SidebarTrigger className="hover:bg-blue-foreground hover:text-white active:bg-white-accent active:text-black"/>
                          <Separator orientation="vertical" className="mr-2 h-4" />
                          <p className="font-medium text-lg">Build your time!</p>
                      </div>
                  </header>

                  <div className="p-4">

                    {children}

                  </div>

              </SidebarInset>
          </SidebarProvider>
      </body>
    </html>
  );
}
