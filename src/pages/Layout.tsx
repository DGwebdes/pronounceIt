import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="h-dvh flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 overflow-auto">
            <Navbar />
            <main className="flex-grow px-4 py-6 max-w-5xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
