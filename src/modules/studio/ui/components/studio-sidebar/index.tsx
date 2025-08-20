"use client"
import { Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import Link from "next/link"
import { LogOutIcon, VideoIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { Separator } from "@/components/ui/separator"

export const StudioSidebar = () => {

    const pathname = usePathname();
    return (
        <Sidebar side="left" collapsible="icon" className=" pt-16 z-40 " >
            <SidebarContent className=" bg-background">

                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem >
                            <SidebarMenuButton isActive={pathname == '/stdio'} tooltip="Exit Studio" asChild>
                                <Link href={'/studio/videos'}>
                                    <VideoIcon className="size-5" />
                                    <span className="text-sm">Content</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <Separator/>
                        <SidebarMenuItem>
                            <SidebarMenuButton tooltip="Exit Studio" asChild>
                                <Link href={'/'}>
                                    <LogOutIcon className="size-5" />
                                    <span className="text-sm">Exit Studio</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>


            </SidebarContent>
        </Sidebar>
    )
}