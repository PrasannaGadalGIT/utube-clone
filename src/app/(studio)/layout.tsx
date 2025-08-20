import HomeLayout from "@/modules/studio/ui/layouts/studio-layout";

interface LayoutProps {
    children : React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}

export default Layout;