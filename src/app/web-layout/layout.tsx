import TopHeader from "../components/top-header/top-header";
import { Navbar } from "../components/navbar/navbar";
import Footer from "../components/footer/Footer";

export default function WebLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {/* Include shared UI here e.g. a header or sidebar */}
            <TopHeader />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}