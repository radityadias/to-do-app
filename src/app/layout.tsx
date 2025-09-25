import '@/app/globals.css'
import { roboto } from "@/app/ui/fonts";

// Components
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-headers/app-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased `}
      >
          <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                 <AppHeader />

                  <div className="p-4">

                    {children}

                  </div>

              </SidebarInset>
          </SidebarProvider>
      </body>
    </html>
  );
}
